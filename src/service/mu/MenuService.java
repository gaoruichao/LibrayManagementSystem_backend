package service.mu;

import dao.mu.MenuDao;
import domain.mu.Menu;

import java.sql.SQLException;
import java.util.Collection;

public class MenuService {
    private static MenuDao menuDao
            = MenuDao.getInstance();
    private static MenuService menuService
            =new MenuService();
    private MenuService(){}

    public static MenuService getInstance(){
        return menuService;
    }
    public Collection<Menu> findByUserId(int userId) throws SQLException {
        return MenuDao.getInstance().findByUserId(userId);
    }
    public Collection<Menu> findByRoleId(int roleId) throws SQLException {
        return MenuDao.getInstance().findByRoleId(roleId);
    }
}
