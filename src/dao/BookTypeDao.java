package dao;

import domain.BookType;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;

public class BookTypeDao {
    private static BookTypeDao bookTypeDao = new BookTypeDao();

    private BookTypeDao() {
    }

    public static BookTypeDao getInstance() {
        return bookTypeDao;
    }

    private static TreeSet<BookType> bookTypes;
    private static Collection<String> bookNames;

    /**
     * 查询所有书籍类型名
     */
    public Collection<String> findNameAll() throws SQLException {
        bookNames = new TreeSet<>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        //执行SQL查询语句并获得结果集对象（游标指向结果集的开头）
        ResultSet resultSet = statement.executeQuery("select typename from booktype");
        while (resultSet.next()) {
            bookNames.add(resultSet.getString(1));
        }
        //关闭资源
        JdbcHelper.close(resultSet, statement, connection);
        return bookNames;
    }

    /**
     * 查询所有书本类型
     */
    public Collection<BookType> findAll() throws SQLException {
        bookTypes = new TreeSet<>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        //执行SQL查询语句并获得结果集对象（游标指向结果集的开头）
        ResultSet resultSet = statement.executeQuery("select * from booktype");
        while (resultSet.next()) {
            //创建BookType对象，根据遍历结果中的id,typeName值
            BookType bookType = new BookType(resultSet.getInt("id"),resultSet.getString("no"), resultSet.getString("typeName"));
            //向bookTypes集合中添加BookType对象
            bookTypes.add(bookType);
        }
        //关闭资源
        JdbcHelper.close(resultSet, statement, connection);
        return bookTypes;
    }


    /**
     *增加书籍类型
     */
    public boolean add(BookType bookType) throws SQLException {
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        //创建sql对象
        String addDegree_sql = "INSERT INTO booktype (no,typename) VALUES" + " (?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement pstmt = connection.prepareStatement(addDegree_sql);
        //为预编译参数赋值
        pstmt.setString(1, bookType.getNo());
        pstmt.setString(2, bookType.getTypeName());
        //执行预编译对象的executeUpdate方法，获取增加的记录行数
        int affectedRowNum = pstmt.executeUpdate();
        System.out.println("增加了" + affectedRowNum + "条记录");
        //关闭pstmt对象
        pstmt.close();
        //关闭connection对象
        connection.close();
        //如果影响的行数>1,则返回ture,否则返回false
        return affectedRowNum > 0;
    }
    /**
     * 根据id查询书籍类型
     */
    public BookType find(Integer id)throws SQLException{
        BookType bookType = null;
        Connection connection = JdbcHelper.getConn();
        String findBookType_sql = "SELECT * FROM booktype WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findBookType_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,username,password值为参数，User
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()){
            bookType = new BookType(resultSet.getInt("id"),resultSet.getString("no"), resultSet.getString("typename"));        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return bookType;
    }
    /**
     * 根据类型名查询书籍类型
     */
    public BookType findByBookTypeName(String typeName) throws SQLException {
        BookType bookType = null;
        Connection connection = JdbcHelper.getConn();
        String selectbookType_sql = "SELECT * FROM booktype WHERE typename=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(selectbookType_sql);
        //为预编译参数赋值
        preparedStatement.setString(1, typeName);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks，school值为参数，创建Department对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()) {
            bookType = new BookType(resultSet.getInt("id"),resultSet.getString("no"), resultSet.getString("typename"));
        }
        //关闭资源
        JdbcHelper.close(resultSet, preparedStatement, connection);
        return bookType;
    }

    /**
     * 更新书籍类型名信息
     */
    public boolean update(BookType bookType) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateBookType_sql = " update booktype set no=?, typename=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateBookType_sql);
        //为预编译参数赋值
        preparedStatement.setString(1, bookType.getNo());
        preparedStatement.setString(2, bookType.getTypeName());
        preparedStatement.setInt(3, bookType.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement, connection);
        return affectedRows > 0;
    }

    /**
     * 删除书籍
     */

    public boolean delete(Integer id) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        //创建sql语句，“？”作为占位符
        String deleteBookType_sql = "DELETE FROM booktype WHERE ID = ?";
        //创建PreparedStatement接口对象，包装编译后的目标代码（可以设置参数，安全性高）
        PreparedStatement pstmt = connection.prepareStatement(deleteBookType_sql);
        //为预编译的语句参数赋值
        pstmt.setInt(1, id);
        //执行预编译对象的executeUpdate()方法，获取删除记录的行数
        int affectedRowNum = pstmt.executeUpdate();
        System.out.println("删除了 " + affectedRowNum + " 条");
        //关闭pstmt对象
        pstmt.close();
        //关闭connection对象
        connection.close();
        return affectedRowNum > 0;
    }

}