package dao.mu;

import domain.mu.Role;
import util.JdbcHelper;
import util.RolesMenus;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashSet;

public class RoleDao {
    private static RoleDao roleDao=
            new RoleDao();
    private RoleDao(){}
    public static RoleDao getInstance(){
        return roleDao;
    }

    public Collection<Role> findAll() throws SQLException {
        Collection<Role> roles = new HashSet<Role>();
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("SELECT * from role");
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            Role role = new Role(resultSet.getInt("id"),
                    false,resultSet.getString("description"));
            roles.add(role);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return roles;
    }
    public Collection<Role> findByUserIdLogin(int userId) throws SQLException {
        Collection<Role> roles = new HashSet<Role>();
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("select role.id,role.description " +
                "from role,ur,user " +
                "where ur.user_id = user.id and ur.role_id = role.id " +
                "and user.id = ?");
        preparedStatement.setInt(1,userId);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            Role role = new Role(resultSet.getInt("id"),true,resultSet.getString("description"));
            roles.add(role);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return roles;
    }

    public Collection<Role> findByUserId(int userId) throws SQLException {
        Collection<Role> allFalseRoles = RoleDao.getInstance().findAll();
        Collection<Role> allTrueRoles = new HashSet<Role>();
        Connection connection = JdbcHelper.getConn();

        PreparedStatement preparedStatement = connection.prepareStatement("\n" +
                "Select role.id,role.description\n" +
                "from ur,role,user\n" +
                "where ur.user_id=user.id and role.id = ur.role_id \n" +
                "and user.id = ?;\n");
        preparedStatement.setInt(1,userId);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            Role role = new Role(resultSet.getInt("id"),
                    true,resultSet.getString("description"));
            allTrueRoles.add(role);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return RolesMenus.createRoles(allFalseRoles,allTrueRoles);
    }
}
