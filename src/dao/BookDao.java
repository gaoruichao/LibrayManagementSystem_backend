package dao;
import domain.Book;
import util.JdbcHelper;
import service.BookTypeService;
import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;
public final class BookDao {
    private static BookDao bookDao= new BookDao();
    private BookDao(){}
    public static BookDao getInstance(){
        return bookDao;
    }
    //返回结果集对象
    public Collection<Book> findAll(){
        Collection<Book> books = new TreeSet<Book>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //在该连接上创建语句盒子对象
            Statement stmt = connection.createStatement();
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM Book");
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //打印结果集中记录的type_id字段
                System.out.print(BookTypeService.getInstance().find(resultSet.getInt("type_id")));
                //根据数据库中的数据,创建Book类型的对象
                Book book = new Book(resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getString("isbn"),
                        resultSet.getString("bookName"),
                        resultSet.getString("author"),
                        resultSet.getString("publish"),
                        resultSet.getString("publishDate"),
                        resultSet.getInt("unitPrice"),
                        BookTypeService.getInstance().find(resultSet.getInt("type_id")),
                        resultSet.getInt("bookStatus")
                );
                //添加到集合books中
                books.add(book);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return books;
    }

    public Collection<Book> findAllByBookName(String name){
        Collection<Book> books = new TreeSet<Book>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //写sql语句
            String deleteBook_sql = "SELECT * FROM book WHERE bookName like ?";
            //在该连接上创建预编译语句对象
            PreparedStatement preparedStatement = connection.prepareStatement(deleteBook_sql);
            //为预编译参数赋值
            preparedStatement.setString(1,"%"+name +"%");
            ResultSet resultSet = preparedStatement.executeQuery();
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //打印结果集中记录的type_id字段
                System.out.print(BookTypeService.getInstance().find(resultSet.getInt("type_id")));
                //根据数据库中的数据,创建Book类型的对象
                Book book = new Book(resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getString("isbn"),
                        resultSet.getString("bookName"),
                        resultSet.getString("author"),
                        resultSet.getString("publish"),
                        resultSet.getString("publishDate"),
                        resultSet.getInt("unitPrice"),
                        BookTypeService.getInstance().find(resultSet.getInt("type_id")),
                        resultSet.getInt("bookStatus")
                );
                //添加到集合books中
                books.add(book);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return books;
    }

    public Book find(Integer id) throws SQLException {
        //声明一个Book类型的变量
        Book book = null;
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteBook_sql = "SELECT * FROM book WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteBook_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Book对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()){
            book = new Book(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getString("isbn"),
                    resultSet.getString("bookName"),
                    resultSet.getString("author"),
                    resultSet.getString("publish"),
                    resultSet.getString("publishDate"),
                    resultSet.getInt("unitPrice"),
                    BookTypeService.getInstance().find(resultSet.getInt("type_id")),
                    resultSet.getInt("bookStatus")
            );
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return book;
    }
    public boolean add(Book book) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String addBook_sql = "INSERT INTO book (no,isbn,bookName,author,publish,publishDate,unitPrice,bookStatus,type_id) VALUES"+" (?,?,?,?,?,?,?,?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(addBook_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,book.getNo());
        preparedStatement.setString(2,book.getIsbn());
        preparedStatement.setString(3,book.getBookName());
        preparedStatement.setString(4,book.getAuthor());
        preparedStatement.setString(5,book.getPublish());
        preparedStatement.setString(6,book.getPublishDate());
        preparedStatement.setInt(7,book.getUnitPrice());
        preparedStatement.setInt(8,book.getBookStatus());
        preparedStatement.setInt(9,book.getBookType().getId());
        //执行预编译语句，获取添加记录行数并赋值给affectedRowNum
        int affectedRowNum=preparedStatement.executeUpdate();
        System.out.println("添加了"+affectedRowNum+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRowNum>0;
    }
    //delete方法，根据book的id值，删除数据库中对应的book对象
    public boolean delete(int id) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteBook_sql = "DELETE FROM book WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteBook_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句，获取删除记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("删除了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
    public boolean update(Book book) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateBook_sql = " update book set no=?,isbn=?,bookname=?,author=?,publish=?,publishdate=?,unitprice=?,bookStatus=?,type_id=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateBook_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,book.getNo());
        preparedStatement.setString(2,book.getIsbn());
        preparedStatement.setString(3,book.getBookName());
        preparedStatement.setString(4,book.getAuthor());
        preparedStatement.setString(5,book.getPublish());
        preparedStatement.setString(6,book.getPublishDate());
        preparedStatement.setInt(7,book.getUnitPrice());
        preparedStatement.setInt(8,book.getBookStatus());
        preparedStatement.setInt(9,book.getBookType().getId());
        preparedStatement.setInt(10,book.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("修改了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
//    public Book findByBookName(String bookName) throws SQLException {
//        //声明一个Book类型的变量
//        Book book = null;
//        //获得数据库连接对象
//        Connection connection = JdbcHelper.getConn();
//        //写sql语句
//        String deleteBook_sql = "SELECT * FROM book WHERE bookName like ?";
//        //在该连接上创建预编译语句对象
//        PreparedStatement preparedStatement = connection.prepareStatement(deleteBook_sql);
//        //为预编译参数赋值
//        preparedStatement.setString(1,"%"+bookName +"%");
//        //执行预编译语句
//        ResultSet resultSet = preparedStatement.executeQuery();
//        //由于id不能取重复值，故结果集中最多有一条记录
//        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Book对象
//        //若结果集中没有记录，则本方法返回null
//        if (resultSet.next()){
//            book = new Book(resultSet.getInt("id"),
//                    resultSet.getString("no"),
//                    resultSet.getString("isbn"),
//                    resultSet.getString("bookName"),
//                    resultSet.getString("author"),
//                    resultSet.getString("publish"),
//                    resultSet.getString("publishDate"),
//                    resultSet.getInt("unitPrice"),
//                    BookTypeService.getInstance().find(resultSet.getInt("type_id")),
//                    resultSet.getInt("bookStatus")
//            );
//        }
//        //关闭资源
//        JdbcHelper.close(resultSet,preparedStatement,connection);
//        return book;
//    }
}
