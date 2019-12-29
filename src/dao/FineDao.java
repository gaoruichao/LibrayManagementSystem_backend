package dao;

import domain.Fine;
import domain.Reader;
import service.BookService;
import service.ReaderService;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;

public class FineDao {
    private static FineDao fineDao= new FineDao();
    private FineDao(){}
    public static FineDao getInstance(){
        return fineDao;
    }
    public Collection<Fine> findAll(){
        Collection<Fine> fines = new TreeSet<Fine>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //在该连接上创建语句盒子对象
            Statement stmt = connection.createStatement();
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM Fine");
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //根据数据库中的数据,创建Fine类型的对象
                Fine fine = new Fine(resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getInt("fineAmount"),
                        resultSet.getString("description"),
                        ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                        BookService.getInstance().find(resultSet.getInt("book_id"))
                );
                //添加到集合fines中
                fines.add(fine);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return fines;
    }
    public Fine find(Integer id) throws SQLException {
        //声明一个Fine类型的变量
        Fine fine = null;
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteFine_sql = "SELECT * FROM fine WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteFine_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        if (resultSet.next()){
            fine = new Fine(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getInt("fineAmount"),
                    resultSet.getString("description"),
                    ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                    BookService.getInstance().find(resultSet.getInt("book_id"))
            );
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return fine;
    }
    public Collection<Fine> findByReaderName(String readerName) throws SQLException {
        Collection<Fine> fines = new TreeSet<Fine>();
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String findFineByName_sql = "SELECT * FROM fine WHERE reader_id IN (SELECT id FROM Reader WHERE name like ?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findFineByName_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,"%"+readerName+"%");
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Fine对象
        //若结果集中没有记录，则本方法返回null
        //若结果存在下一条，执行循环体
        while (resultSet.next()) {
            //根据数据库中的数据,创建Fine类型的对象
            Fine fine = new Fine(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getInt("fineAmount"),
                    resultSet.getString("description"),
                    ReaderService.getInstance().find(resultSet.getInt("reader_id")),
                    BookService.getInstance().find(resultSet.getInt("book_id"))
            );
            //添加到集合fines中
            fines.add(fine);
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return fines;
    }
    public boolean add(Fine fine) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String addFine_sql = "INSERT INTO fine (no,fineAmount,description,reader_id,book_id) VALUES"+" (?,?,?,?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(addFine_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,fine.getNo());
        preparedStatement.setInt(2,fine.getFineAmount());
        preparedStatement.setString(3,fine.getDescription());
        preparedStatement.setInt(4,fine.getReader().getId());
        preparedStatement.setInt(5,fine.getBook().getId());
        //执行预编译语句，获取添加记录行数并赋值给affectedRowNum
        int affectedRowNum=preparedStatement.executeUpdate();
        System.out.println("添加了"+affectedRowNum+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRowNum>0;
    }
    //delete方法，根据fine的id值，删除数据库中对应的fine对象
    public boolean delete(int id) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteFine_sql = "DELETE FROM fine WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteFine_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句，获取删除记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("删除了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
    public boolean update(Fine fine) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateFine_sql = " update fine set no=?,fineAmount=?,description=?,reader_id=?,book_id=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateFine_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,fine.getNo());
        preparedStatement.setInt(2,fine.getFineAmount());
        preparedStatement.setString(3,fine.getDescription());
        preparedStatement.setInt(4,fine.getReader().getId());
        preparedStatement.setInt(5,fine.getBook().getId());
        preparedStatement.setInt(6,fine.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("修改了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
}
