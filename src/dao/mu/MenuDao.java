package dao.mu;

import domain.mu.Menu;
import util.JdbcHelper;
import util.RolesMenus;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.HashSet;

public class MenuDao {
    private static MenuDao menuDao=
            new MenuDao();
    private MenuDao(){}
    public static MenuDao getInstance(){
        return menuDao;
    }


    public Collection<Menu> findAll() throws SQLException {
        Collection<Menu> menus = new HashSet<Menu>();
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("SELECT * from menu");
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            Menu menu = new Menu(resultSet.getInt("id"),
                   resultSet.getString("description"),false,
                    resultSet.getString("url"));
            menus.add(menu);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return menus;
    }

    public Collection<Menu> findByRoleId(int roleId) throws SQLException {
        Collection<Menu> allFalseMenus = MenuDao.getInstance().findAll();
        Collection<Menu> allTrueMenus = new HashSet<Menu>();
        Connection connection = JdbcHelper.getConn();

        PreparedStatement preparedStatement = connection.prepareStatement("Select menu.id,menu.description,menu.url\n" +
                "from rm,role,menu\n" +
                "where rm.role_id=role.id and menu.id = rm.menu_id \n" +
                "and role.id =?;");
        preparedStatement.setInt(1,roleId);
        ResultSet resultSet = preparedStatement.executeQuery();
        while (resultSet.next()){
            Menu menu = new Menu(resultSet.getInt("id"),
                    resultSet.getString("description"),true,
                    resultSet.getString("url"));
            allTrueMenus.add(menu);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        System.out.println(allFalseMenus);
        System.out.println(allTrueMenus);
        return RolesMenus.createMenus(allFalseMenus,allTrueMenus);
    }
    //多表连接查询，通过user的id查找对应角色含有的菜单的属性
    public Collection<Menu> findByUserId(int userId) throws SQLException {
        Connection connection = JdbcHelper.getConn();
        PreparedStatement preparedStatement = connection.prepareStatement("Select menu.id,menu.description,menu.url\n" +
                "from menu,user,role,ur,rm\n" +
                "where user.id = ur.user_id and ur.role_id = role.id and rm.role_id = role.id and rm.menu_id = menu.id\n" +
                "and user.id =?  ");
        preparedStatement.setInt(1,userId);
        ResultSet resultSet = preparedStatement.executeQuery();
        Collection<Menu> menus = new HashSet<Menu>();
        while (resultSet.next()){
            Menu menu = new Menu(resultSet.getInt("id"),resultSet.getString("description")
                    ,resultSet.getString("url"));
            menus.add(menu);
        }
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return menus;
    }
}
