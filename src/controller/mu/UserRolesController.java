package controller.mu;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import domain.mu.UserRoles;
import service.mu.UserRolesService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/userRoles.ctl")
public class UserRolesController extends HttpServlet {

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userRoles_json = JSONUtil.getJSON(req);
        UserRoles userRoles = JSON.parseObject(userRoles_json, UserRoles.class);
        JSONObject message = new JSONObject();
        try {
            UserRolesService.getInstance().updateRoles(userRoles);
            message.put("message","修改成功");
        } catch (SQLException e) {
            e.printStackTrace();
            message.put("message","修改失败");
        }
        resp.getWriter().println(message);
    }
}
