package dao.mu;

import domain.mu.User;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.HashSet;

public class UserDao {
    private static UserDao userDao =
            new UserDao();
    private UserDao(){}
    public static UserDao getInstance(){
        return userDao;
    }

    public boolean addUser(User user)throws SQLException{
        //声明connection和预编译语句对象并赋初值
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        int isAdded = 0;
        int userId = 0;
        try{
            //获得connection对象
            connection= JdbcHelper.getConn();
            //自动提交关闭
            connection.setAutoCommit(false);
            //创建预编译语句，并用RETURN_GENERATED_KEYS字段，用于获得数据库自增的id值的最大值
            preparedStatement =  connection.prepareStatement("INSERT INTO user " +
                    " (password,username) VALUES " +
                    "(?,?)", Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1,user.getPassword());
            preparedStatement.setString(2,user.getUsername());
            //执行预编译语句
            isAdded = preparedStatement.executeUpdate();
            //获得数据库中最大的id值，即刚刚加入的数据，但并为提交真正更新到数据库
            ResultSet resultSet = preparedStatement.getGeneratedKeys();
            if(resultSet.next()){
                userId = resultSet.getInt(1);
            }
            //创建teacher的同时在数据库创建一个user
            if(user.getRole()==1){
                if(UserRolesDao.getInstance().addUR(connection,userId,1)){
                    System.out.println("User表添加成功");
                }else {
                    System.out.println("User表添加失败");
                }
            }else if(user.getRole()==2){
                if(UserRolesDao.getInstance().addUR(connection,userId,2)){
                    System.out.println("User表添加成功");
                }else {
                    System.out.println("User表添加失败");
                }
            }
            //提交
            connection.commit();
        }catch (SQLException e){
            //如果数据库操作异常则回滚
            if(connection!=null){
                isAdded = 0;
                connection.rollback();
            }
            e.printStackTrace();
        }catch (Exception e){
            //其他的异常出现也进行回滚
            if(connection!=null){
                isAdded = 0;
                connection.rollback();
            }
            e.printStackTrace();
        }finally {
            //关闭自动提交
            try {
                if(connection!=null){
                    connection.setAutoCommit(true);
                }
            }catch (SQLException e){
                e.printStackTrace();
            }
            //关闭资源
            JdbcHelper.close(preparedStatement,connection);
        }
        //是否添加成功
        return isAdded>0;
    }

    public User findByUserId(int userId) throws SQLException{
        User user = null;
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("select * from user " +
                "where id = ?");
        preparedStatement.setInt(1,userId);
        ResultSet resultSet = preparedStatement.executeQuery();
        if(resultSet.next()){
            user = new User(resultSet.getInt("id"),resultSet.getString("username"),
                    resultSet.getString("password"));
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return user;
    }

    public Collection<User> findAll() throws SQLException {
        Collection<User> users = new HashSet<User>();
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("select * from user");
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            User user = new User(resultSet.getInt("id"),
                    resultSet.getString("username"),
                    resultSet.getString("password"));
            users.add(user);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return users;
    }

    public User login(String account) throws SQLException {
        User user = null;
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("select * from user where " +
                "username = ?");
        preparedStatement.setString(1,account);
        ResultSet resultSet = preparedStatement.executeQuery();
        if(resultSet.next()){
            user = new User(resultSet.getInt("id"),
                    resultSet.getString("username"),resultSet
            .getString("password"));
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return user;
    }

    public boolean deleteUser(int userId) throws SQLException{
        int isDelete = 0;
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("delete" +
                "from user where id = ?");
        preparedStatement.setInt(1,userId);
        isDelete = preparedStatement.executeUpdate();
        JdbcHelper.close(preparedStatement,connection);
        return isDelete>0;
    }
    public boolean updateUser(User user) throws SQLException{
        int isUpdate = 0;
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("" +
                "update user set username = ?,password = ? where id = ?");
        preparedStatement.setString(1,user.getUsername());
        preparedStatement.setString(2,user.getPassword());
        preparedStatement.setInt(3,user.getId());
        isUpdate = preparedStatement.executeUpdate();
        JdbcHelper.close(preparedStatement,connection);
        return isUpdate>0;
    }
}
