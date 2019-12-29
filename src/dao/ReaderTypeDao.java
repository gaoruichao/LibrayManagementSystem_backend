package dao;


import com.mysql.cj.jdbc.JdbcConnection;
import domain.ReaderType;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;


public class ReaderTypeDao {
    private static ReaderTypeDao readerTypeDao = new ReaderTypeDao();

    private ReaderTypeDao() {
    }

    public static ReaderTypeDao getInstance() {
        return readerTypeDao;
    }

    private static Collection<ReaderType> readerTypes;
    private static Collection<String> readerNames;
    /**
     * 查询所有读者类型名
     */
    public Collection<String> findNameAll() throws SQLException {
        readerNames = new TreeSet<>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        //执行SQL查询语句并获得结果集对象（游标指向结果集的开头）
        ResultSet resultSet = statement.executeQuery("select typename from readertype");
        while (resultSet.next()) {
            readerNames.add(resultSet.getString(1));
        }
        //关闭资源
        JdbcHelper.close(resultSet, statement, connection);
        return readerNames;
    }

    /**
     * 查询所有读者类型
     * @return
     */
    public Collection<ReaderType> findAll() throws SQLException {
        readerTypes = new TreeSet<>();
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        Statement statement = connection.createStatement();
        //执行SQL查询语句并获得结果集对象（游标指向结果集的开头）
        ResultSet resultSet = statement.executeQuery("select * from readertype");
        while (resultSet.next()) {
            //创建ReaderType对象，根据遍历结果中的id,typeName,maxBorrowNum,limitDate值
            ReaderType readerType = new ReaderType(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getString("typeName"),
                    resultSet.getInt("maxBorrowNum"),
                    resultSet.getInt("limitDate"));
            //向bookTypes集合中添加BookType对象
            readerTypes.add(readerType);
        }
        //关闭资源
        JdbcHelper.close(resultSet, statement, connection);
        return readerTypes;
    }
    /**
     * 根据id查询读者类型
     */
    public ReaderType find(Integer id)throws SQLException{
        ReaderType readerType = null;
        Connection connection = JdbcHelper.getConn();
        String findReaderType_sql = "SELECT * FROM readertype WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findReaderType_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,username,password值为参数，User
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()) {
            readerType = new ReaderType(resultSet.getInt("id"),resultSet.getString("no"), resultSet.getString("typeName"), resultSet.getInt("maxBorrowNum"),resultSet.getInt("limitDate"));
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return readerType;
    }

    /**
     * 根据类型名查询读者类型
     */
    public ReaderType findByReaderTypeName(String typeName) throws SQLException {
        ReaderType readerType = null;
        Connection connection = JdbcHelper.getConn();
        String selectReaderType_sql = "SELECT * FROM readertype WHERE typeName=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(selectReaderType_sql);
        //为预编译参数赋值
        preparedStatement.setString(1, typeName);
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks，school值为参数，创建Department对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()) {
            readerType = new ReaderType(resultSet.getInt("id"), resultSet.getString("no"),resultSet.getString("typeName"),
                    resultSet.getInt("maxBorrowNum"),resultSet.getInt("limitDate"));
        }
        //关闭资源
        JdbcHelper.close(resultSet, preparedStatement, connection);
        return readerType;
    }

    /**
     * 添加读者类型
     */
    public boolean add(ReaderType readerType) throws SQLException {
        //获得连接对象
        Connection connection = JdbcHelper.getConn();
        //创建sql对象
        String addReaderType_sql = "INSERT INTO readertype (no,typeName,maxBorrowNum,limitDate) VALUES" + " (?,?,?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement pstmt = connection.prepareStatement(addReaderType_sql);
        //为预编译参数赋值
        pstmt.setString(1, readerType.getNo());
        pstmt.setString(2, readerType.getTypeName());
        pstmt.setInt(3, readerType.getMaxBorrowNum());
        pstmt.setInt(4, readerType.getLimitDate());
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
     * 修改读者类型
     */
    public boolean update(ReaderType readerType) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateReaderType_sql = " update readerType set no=?, typeName=? , maxBorrownum = ?, limitDate= ? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateReaderType_sql);
        //为预编译参数赋值
        preparedStatement.setString(1, readerType.getNo());
        preparedStatement.setString(2, readerType.getTypeName());
        preparedStatement.setInt(3, readerType.getMaxBorrowNum());
        preparedStatement.setInt(4, readerType.getLimitDate());
        preparedStatement.setInt(5, readerType.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        //关闭资源
        JdbcHelper.close(preparedStatement, connection);
        return affectedRows > 0;
    }

    /**
     * 删除读者类型
     */

    public boolean delete(Integer id) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        //创建sql语句，“？”作为占位符
        String deleteReaderType_sql = "DELETE FROM readertype WHERE ID = ?";
        //创建PreparedStatement接口对象，包装编译后的目标代码（可以设置参数，安全性高）
        PreparedStatement pstmt = connection.prepareStatement(deleteReaderType_sql);
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
