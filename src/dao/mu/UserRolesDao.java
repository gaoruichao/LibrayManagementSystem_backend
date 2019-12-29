package dao.mu;

import domain.mu.Role;
import domain.mu.UserRoles;
import util.JdbcHelper;
import util.RolesMenus;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Collection;

public class UserRolesDao {
    private static UserRolesDao userRolesDao =
            new UserRolesDao();
    private UserRolesDao(){}
    public static UserRolesDao getInstance(){
        return userRolesDao;
    }
    public void deleteRoles(Collection<Role> roles, int userId) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("delete from ur " +
                "where user_id = ? and role_id = ?");
        for(Role role : roles){
            preparedStatement.setInt(1,userId);
            preparedStatement.setInt(2,role.getId());
            preparedStatement.executeUpdate();
        }
        JdbcHelper.close(preparedStatement,connection);
    }
    public boolean addUR(Connection connection , int userId , int roleId) throws SQLException {
        int isAdded;
        PreparedStatement preparedStatement = connection.prepareStatement("insert into ur " +
                "(user_id, role_id) values (?,?)");
        preparedStatement.setInt(1,userId);
        preparedStatement.setInt(2,roleId);
        isAdded = preparedStatement.executeUpdate();
        JdbcHelper.close(preparedStatement,null);
        return isAdded>0;
    }

    public void addRoles(Collection<Role> roles,int userId) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("insert into ur (user_id, role_id) values " +
                "(?,?)");
        for(Role role:roles){
            preparedStatement.setInt(1,userId);
            preparedStatement.setInt(2,role.getId());
            preparedStatement.executeUpdate();
        }
        JdbcHelper.close(preparedStatement,connection);
    }


    public void updateRoles(UserRoles userRoles, Collection<Role> oldRoles) throws SQLException {
        Collection<Role> addRoles = RolesMenus.getAddRoles(userRoles,oldRoles);
        UserRolesDao.getInstance().addRoles(addRoles,userRoles.getAdminUser().getId());
        Collection<Role> deleteRoles = RolesMenus.getDeleteRoles(userRoles,oldRoles);
        UserRolesDao.getInstance().deleteRoles(deleteRoles,userRoles.getAdminUser().getId());
    }


}
