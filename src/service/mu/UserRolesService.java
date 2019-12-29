package service.mu;

import dao.mu.RoleDao;
import dao.mu.UserRolesDao;
import domain.mu.UserRoles;

import java.sql.SQLException;

public class UserRolesService {
    private static UserRolesDao roleMenusDao
            = UserRolesDao.getInstance();
    private static UserRolesService roleMenusService
            =new UserRolesService();
    private UserRolesService(){}
    public static UserRolesService getInstance(){
        return roleMenusService;
    }
    public void updateRoles(UserRoles adminUserRoles) throws SQLException {
        UserRolesDao.getInstance().updateRoles(adminUserRoles, RoleDao.getInstance().findByUserId(adminUserRoles.getAdminUser().getId()));
    }
}
