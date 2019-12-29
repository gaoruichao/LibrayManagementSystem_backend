package controller.mu;

import com.alibaba.fastjson.JSON;
import domain.mu.Menu;
import service.mu.MenuService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/menu.ctl")
public class MenuController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String roleId_str = req.getParameter("role_id");
        //用于前端菜单显示，通过登录用户user的id
        String userId_str = req.getParameter("user_id");
        if(roleId_str!=null){
            findByRoleId(Integer.parseInt(roleId_str),resp);
        }else if(userId_str!=null){
            findByUserId(Integer.parseInt(userId_str),resp);
        }
    }

    public static void findByRoleId(int roleId, HttpServletResponse resp) throws IOException {
        Collection<Menu> menus = null;
        try {
            menus = MenuService.getInstance().findByRoleId(roleId);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        String menus_json = JSON.toJSONString(menus);
        resp.getWriter().println(menus_json);
    }
    //初始化前端动态菜单
    public static void findByUserId(int userId, HttpServletResponse resp) throws IOException {
        Collection<Menu> menus = null;
        try {
            menus = MenuService.getInstance().findByUserId(userId);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        String menus_json = JSON.toJSONString(menus);
        resp.getWriter().println(menus_json);
    }
}
