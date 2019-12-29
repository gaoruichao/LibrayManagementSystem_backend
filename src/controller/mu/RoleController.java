package controller.mu;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import domain.mu.Role;
import service.mu.RoleService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/role.ctl")
public class RoleController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id_str = request.getParameter("id");
        String login_userId = request.getParameter("login_id");
        JSONObject message = new JSONObject();
        if(id_str == null&&login_userId==null){
            try {
                responseRoles(response);
                return;
            } catch (SQLException e) {
                e.printStackTrace();
                message.put("message", "查找失败");
            } catch (Exception e){
                e.printStackTrace();
                message.put("message","网络异常");
            }
        } else if (id_str!=null){
            int id = Integer.parseInt(id_str);
            try {
                responseRole(id, response);
                return;
            } catch (SQLException e) {
                e.printStackTrace();
                message.put("message", "查找失败");
            } catch (Exception e){
                e.printStackTrace();
                message.put("message","网络异常");
            }
        } else if(login_userId !=null){
            int id = Integer.parseInt(login_userId);
            try {
                responseRolesByUserIdLogin(response,id);
                return;
            } catch (SQLException e) {
                message.put("message", "查找失败");
                e.printStackTrace();
            } catch (Exception e){
                e.printStackTrace();
                message.put("message","网络异常");
            }
        }
        response.getWriter().println(message);
    }

    private void responseRole(int id, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        Collection<Role> role = RoleService.getInstance().findByUserId(id);
        String role_json = JSON.toJSONString(role);
        response.getWriter().println(role_json);
    }

    private void responseRoles(HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        Collection<Role> roles = RoleService.getInstance().findAll();
        String roles_json = JSON.toJSONString(roles);
        response.getWriter().println(roles_json);
    }
    private void responseRolesByUserIdLogin(HttpServletResponse response, int userId)
            throws ServletException, IOException, SQLException {
        Collection<Role> roles = RoleService.getInstance().findByUserIdLogin(userId);
        String roles_json = JSON.toJSONString(roles);
        response.getWriter().println(roles_json);
    }
}
