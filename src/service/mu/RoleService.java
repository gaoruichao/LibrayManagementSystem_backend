package service.mu;

import dao.mu.RoleDao;
import domain.mu.Role;

import java.sql.SQLException;
import java.util.Collection;

public class RoleService {
    private static RoleDao roleDao
            = RoleDao.getInstance();
    private static RoleService roleService
            =new RoleService();
    private RoleService(){}

    public static RoleService getInstance(){
        return roleService;
    }
    public Collection<Role> findByUserId(int userId) throws SQLException {
        return RoleDao.getInstance().findByUserId(userId);
    }
    public Collection<Role> findAll() throws SQLException {
        return RoleDao.getInstance().findAll();
    }
    public Collection<Role> findByUserIdLogin(int userId) throws SQLException {
        return RoleDao.getInstance().findByUserIdLogin(userId);
    }
}
