package dao;

import domain.Book;
import domain.BorrowBook;
import domain.Reader;
import domain.ReturnBook;
import service.BookService;
import service.BorrowBookService;
import service.ManagerService;
import service.ReaderService;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;

public class ReturnBookDao {
    private static ReturnBookDao returnBookDao=
            new ReturnBookDao();
    private ReturnBookDao(){}
    public static ReturnBookDao getInstance(){
        return returnBookDao;
    }
    //返回结果集对象
    public Collection<ReturnBook> findAll(){
        Collection<ReturnBook> returnBooks = new TreeSet<ReturnBook>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //在该连接上创建语句盒子对象
            Statement stmt = connection.createStatement();
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM ReturnBook");
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //根据数据库中的数据,创建ReturnBook类型的对象
                ReturnBook returnBook = new ReturnBook(resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getDate("returnDate"),
                        BookService.getInstance().find(resultSet.getInt("book_id")),
                        ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                        BorrowBookService.getInstance().find(resultSet.getInt("borrowBook_id")),
                        ManagerService.getInstance().find(resultSet.getInt("manager_id")));
                //添加到集合ReturnBooks中
                returnBooks.add(returnBook);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return returnBooks;
    }
    public ReturnBook find(Integer id) throws SQLException{
        //声明一个ReturnBook类型的变量
        ReturnBook returnBook = null;
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteReturnBook_sql = "SELECT * FROM ReturnBook WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteReturnBook_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        if (resultSet.next()){
            returnBook = new ReturnBook(resultSet.getInt("id"),
                    resultSet.getString("no"), resultSet.getDate("returnDate"),
                    BookService.getInstance().find(resultSet.getInt("book_id")),
                    ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                    BorrowBookService.getInstance().find(resultSet.getInt("borrowBook_id")),
                    ManagerService.getInstance().find(resultSet.getInt("manager_id")));
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return returnBook;
    }
    public Collection<ReturnBook> findByReaderName(String readerName) throws SQLException {
        Collection<ReturnBook> returnBooks = new TreeSet<ReturnBook>();
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String findReturnBookByName_sql = "SELECT * FROM returnBook WHERE reader_id IN (SELECT id FROM Reader WHERE name like ?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findReturnBookByName_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,"%"+readerName+"%");
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()) {
            //根据数据库中的数据,创建ReturnBook类型的对象
            ReturnBook returnBook = new ReturnBook(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getDate("returnDate"),
                    BookService.getInstance().find(resultSet.getInt("book_id")),
                    ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                    BorrowBookService.getInstance().find(resultSet.getInt("borrowBook_id")),
                    ManagerService.getInstance().find(resultSet.getInt("manager_id")));
            //添加到集合ReturnBooks中
            returnBooks.add(returnBook);
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return returnBooks;
    }
    public boolean add(ReturnBook returnBook) throws SQLException,ClassNotFoundException{
        Reader reader = ReaderService.getInstance().find(returnBook.getReader().getId());
        Book book = BookService.getInstance().find(returnBook.getBook().getId());
        //获得数据库连接对象
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int fineAmount = 0;
        int diff = 0;
        BorrowBook borrowBook = null;

        boolean isCommited = false;

        connection = JdbcHelper.getConn();
        //关闭自动提交
        connection.setAutoCommit(false);

        try {
            //写sql语句
            String addReturnBook_sql = "INSERT INTO ReturnBook (no,returnDate,book_id,reader_id,borrowBook_id,manager_id) VALUES" + " (?,?,?,?,?,?)";
            //在该连接上创建预编译语句对象
            preparedStatement = connection.prepareStatement(addReturnBook_sql);
            //为预编译参数赋值
            //获取当前时间
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            preparedStatement.setString(1, returnBook.getNo());
            preparedStatement.setDate(2, new Date(timestamp.getTime()));
            preparedStatement.setInt(3, returnBook.getBook().getId());
            preparedStatement.setInt(4, returnBook.getReader().getId());
            preparedStatement.setInt(5, returnBook.getBorrowBook().getId());
            preparedStatement.setInt(6, returnBook.getManager().getId());
            preparedStatement.executeUpdate();

            String findBorrowBook_sql = "SELECT * FROM BorrowBook WHERE book_id=?";
            PreparedStatement preparedStatement1 = connection.prepareStatement(findBorrowBook_sql);
            preparedStatement1.setInt(1,book.getId());
            //执行预编译语句
            ResultSet resultSet = preparedStatement1.executeQuery();
            if (resultSet.next()){
                borrowBook = new BorrowBook(resultSet.getInt("id"), resultSet.getString("no"), resultSet.getDate("borrowDate"), ReaderService.getInstance().find(resultSet.getInt("reader_id")), BookService.getInstance().find(resultSet.getInt("book_id")), ManagerService.getInstance().find(resultSet.getInt("manager_id")));
            }

            Long diff_long = (timestamp.getTime() - borrowBook.getBorrowDate().getTime()) / (24 * 60 * 60 * 1000);
            diff = Integer.parseInt(String.valueOf(diff_long));
            System.out.println(diff);
//            if(diff > 0){
//                fineAmount = diff * 1;
//            }
            if(reader.getReaderType().getLimitDate() < diff) {
                fineAmount = (diff - reader.getReaderType().getLimitDate()) * 1;

                String addFine_str = "INSERT INTO fine (fineAmount,description,reader_id,book_id) VALUES (?,?,?,?)";
                //在该连接上创建预编译语句对象
                preparedStatement = connection.prepareStatement(addFine_str);
                //为预编译参数赋值
                preparedStatement.setInt(1, fineAmount);
                preparedStatement.setString(2, "超期" + diff + "天");
                preparedStatement.setInt(3, returnBook.getReader().getId());
                preparedStatement.setInt(4, returnBook.getBook().getId());
                //执行预编译语句，获取添加记录行数并赋值给affectedRowNum
                int affectedRowNum = preparedStatement.executeUpdate();
                System.out.println("添加了" + affectedRowNum + "行记录");
            }


            String updateBook_sql = " update book set bookStatus=? where id=?";
            preparedStatement = connection.prepareStatement(updateBook_sql);
            preparedStatement.setInt(1, 1);
            preparedStatement.setInt(2, book.getId());
            preparedStatement.executeUpdate();

            String updateReader_sql = "update reader set borrowedNum=? where id=?";
            preparedStatement = connection.prepareStatement(updateReader_sql);
            preparedStatement.setInt(1, reader.getBorrowedNum()-1);
            preparedStatement.setInt(2, reader.getId());
            preparedStatement.executeUpdate();

            //提交当前连接所做的操作
            connection.commit();
            //将判断提交变量设为true
            isCommited = true;
        }catch (SQLException e){
            e.printStackTrace();
            System.out.println(e.getMessage()+"\n errorCode="+e.getErrorCode());
            try{
                //回滚当前连接所做的操作
                if (connection != null){
                    connection.rollback();
                }
            }catch (SQLException e1){
                e1.printStackTrace();
            }
        }finally {
            try{
                //恢复自动提交
                if (connection != null){
                    connection.setAutoCommit(true);
                }
            }catch (SQLException e){
                e.printStackTrace();
            }
            //关闭资源
            JdbcHelper.close(preparedStatement, connection);
        }

        return isCommited;
    }
    //delete方法，根据ReturnBook的id值，删除数据库中对应的ReturnBook对象
    public boolean delete(int id) throws ClassNotFoundException,SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteReturnBook_sql = "DELETE FROM ReturnBook WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteReturnBook_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句，获取删除记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("删除了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
    public boolean update(ReturnBook returnBook) throws ClassNotFoundException,SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateReturnBook_sql = " update ReturnBook set no=?,returnDate=?,book_id=?," +
                "reader_id=?,borrowBook_id,manager_id=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateReturnBook_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,returnBook.getNo());
        preparedStatement.setDate(2,returnBook.getReturnDate());
        preparedStatement.setInt(3,returnBook.getBook().getId());
        preparedStatement.setInt(3,returnBook.getReader().getId());
        preparedStatement.setInt(5,returnBook.getBorrowBook().getId());
        preparedStatement.setInt(6,returnBook.getManager().getId());
        preparedStatement.setInt(6,returnBook.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("修改了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
}


