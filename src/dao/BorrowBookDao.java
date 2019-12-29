package dao;

import domain.Book;
import domain.BorrowBook;
import domain.Reader;
import service.BookService;
import service.BorrowBookService;
import service.ManagerService;
import service.ReaderService;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;

public class BorrowBookDao {
    private static BorrowBookDao borrowBookDao=
            new BorrowBookDao();
    private BorrowBookDao(){}
    public static BorrowBookDao getInstance(){
        return borrowBookDao;
    }
    //返回结果集对象
    public Collection<BorrowBook> findAll(){
        Collection<BorrowBook> borrowBooks = new TreeSet<BorrowBook>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //在该连接上创建语句盒子对象
            Statement stmt = connection.createStatement();
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM BorrowBook");
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //根据数据库中的数据,创建BorrowBook类型的对象
                BorrowBook borrowBook = new BorrowBook(
                        resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getDate("borrowDate"),
                        ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                        BookService.getInstance().find(resultSet.getInt("book_id")),
                        ManagerService.getInstance().find(resultSet.getInt("manager_id")));
                //添加到集合BorrowBooks中
                borrowBooks.add(borrowBook);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return borrowBooks;
    }
    public BorrowBook find(Integer id) throws SQLException{
        //声明一个BorrowBook类型的变量
        BorrowBook borrowBook = null;
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteBorrowBook_sql = "SELECT * FROM BorrowBook WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteBorrowBook_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        if (resultSet.next()){
            borrowBook = new BorrowBook(resultSet.getInt("id"), resultSet.getString("no"), resultSet.getDate("borrowDate"), ReaderService.getInstance().find(resultSet.getInt("reader_id")), BookService.getInstance().find(resultSet.getInt("book_id")), ManagerService.getInstance().find(resultSet.getInt("manager_id")));
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return borrowBook;
    }
    public Collection<BorrowBook> findByBook(int id){
        Collection<BorrowBook> borrowBooks = new TreeSet<BorrowBook>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();

            String find_sql = "SELECT * FROM BorrowBook where book_id=?";
            PreparedStatement preparedStatement = connection.prepareStatement(find_sql);
            preparedStatement.setInt(1,id);
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = preparedStatement.executeQuery();
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //根据数据库中的数据,创建BorrowBook类型的对象
                BorrowBook borrowBook = new BorrowBook(resultSet.getInt("id"), resultSet.getString("no"), resultSet.getDate("borrowDate"), ReaderService.getInstance().find(resultSet.getInt("reader_id")), BookService.getInstance().find(resultSet.getInt("book_id")), ManagerService.getInstance().find(resultSet.getInt("manager_id")));
                //添加到集合BorrowBooks中
                borrowBooks.add(borrowBook);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return borrowBooks;
    }
    public Collection<BorrowBook> findByReaderName(String readerName) throws SQLException {
        Collection<BorrowBook> borrowBooks = new TreeSet<BorrowBook>();
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String findBorrowBookByName_sql = "SELECT * FROM borrowBook WHERE reader_id IN (SELECT id FROM Reader WHERE name like ?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findBorrowBookByName_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,"%"+readerName+"%");
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        //若结果存在下一条，执行循环体
        while (resultSet.next()) {
            //根据数据库中的数据,创建BorrowBook类型的对象
            BorrowBook borrowBook = new BorrowBook(
                    resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getDate("borrowDate"),
                    ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                    BookService.getInstance().find(resultSet.getInt("book_id")),
                    ManagerService.getInstance().find(resultSet.getInt("manager_id")));
            //添加到集合BorrowBooks中
            borrowBooks.add(borrowBook);
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return borrowBooks;
    }
    public boolean add(BorrowBook borrowBook) throws SQLException{
        //通过book_id获得所借图书对象
        Book book = BookService.getInstance().find(borrowBook.getBook().getId());
        //通过reader_id获得借书的读者对象
        Reader reader = ReaderService.getInstance().find(borrowBook.getReader().getId());
        PreparedStatement preparedStatement = null;
        Connection connection = null;
        boolean isCommited = false;
        try {
        connection = JdbcHelper.getConn();
        //关闭自动提交
        connection.setAutoCommit(false);
        if(book.getBookStatus() == 1) {
            //写sql语句
            String updateBook_sql = " update book set bookStatus=? where id=?";
            //在该连接上创建预编译语句对象
            preparedStatement = connection.prepareStatement(updateBook_sql);
            //为预编译参数赋值
            preparedStatement.setInt(1, 0);
            preparedStatement.setInt(2, book.getId());
            //执行预编译语句
            preparedStatement.executeUpdate();
        }else{
            return false;
        }
        if(reader.getBorrowedNum() < reader.getReaderType().getMaxBorrowNum()){
        String updateReader_sql = "update reader set borrowedNum=? where id=?";
        preparedStatement = connection.prepareStatement(updateReader_sql);
        //将该读者的已借书数量加1
        preparedStatement.setInt(1,reader.getBorrowedNum()+1);
        preparedStatement.setInt(2,reader.getId());
        preparedStatement.executeUpdate();
        }else{
            return false;
        }
        //写sql语句
        String addBorrowBook_sql = "INSERT INTO BorrowBook (no,borrowDate,reader_id,book_id,manager_id) VALUES"+" (?,?,?,?,?)";
        //在该连接上创建预编译语句对象
        preparedStatement = connection.prepareStatement(addBorrowBook_sql);
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        //为预编译参数赋值
        preparedStatement.setString(1,borrowBook.getNo());
        preparedStatement.setDate(2,new Date(timestamp.getTime()));
        preparedStatement.setInt(3,borrowBook.getReader().getId());
        preparedStatement.setInt(4,borrowBook.getBook().getId());
        preparedStatement.setInt(5,borrowBook.getManager().getId());
        //执行预编译语句
        preparedStatement.executeUpdate();

        connection.commit();
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
    //delete方法，根据BorrowBook的id值，删除数据库中对应的BorrowBook对象
    public boolean delete(int id) throws SQLException{
        Book book = BookService.getInstance().find(BorrowBookService.getInstance().find(id).getBook().getId());
        Reader reader = ReaderService.getInstance().find(BorrowBookService.getInstance().find(id).getReader().getId());
        //获得数据库连接对象
        PreparedStatement preparedStatement = null;
        Connection connection = null;
        boolean isCommited = false;
        try {
            //写sql语句
            String deleteBorrowBook_sql = "DELETE FROM BorrowBook WHERE id=?";
            //在该连接上创建预编译语句对象
            preparedStatement = connection.prepareStatement(deleteBorrowBook_sql);
            //为预编译参数赋值
            preparedStatement.setInt(1, id);
            //执行预编译语句
            preparedStatement.executeUpdate();

            String updateBook_sql = " update book set bookStatus=? where id=?";
            preparedStatement = connection.prepareStatement(updateBook_sql);
            preparedStatement.setInt(1, 1);
            preparedStatement.setInt(2, book.getId());
            preparedStatement.executeUpdate();

            String updateReader_sql = "update reader set borrowedNum=? where id=?";
            preparedStatement = connection.prepareStatement(updateReader_sql);
            preparedStatement.setInt(1, reader.getBorrowedNum() - 1);
            preparedStatement.setInt(2, reader.getId());
            preparedStatement.executeUpdate();

            connection.commit();
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
    public boolean update(BorrowBook borrowBook) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateBorrowBook_sql = " update BorrowBook set no=?,borrowDate=?,reader_id=?,book_id=?,manager_id=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateBorrowBook_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,borrowBook.getNo());
        preparedStatement.setDate(2,borrowBook.getBorrowDate());
        preparedStatement.setInt(3,borrowBook.getReader().getId());
        preparedStatement.setInt(4,borrowBook.getBook().getId());
        preparedStatement.setInt(5,borrowBook.getManager().getId());
        preparedStatement.setInt(6,borrowBook.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("修改了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
}


