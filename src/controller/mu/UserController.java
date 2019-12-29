package controller.mu;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import domain.mu.User;
import service.mu.UserService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/user.ctl")
public class UserController extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userId = req.getParameter("user_id");
        if(userId!=null){
            try {
                respUser(resp,Integer.parseInt(userId));
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } else {
            try {
                respUsers(resp);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void respUser(HttpServletResponse resp , int userId) throws SQLException, IOException {
        User user = null;
        user = UserService.getInstance().findByUserId(userId);
        String user_json = JSON.toJSONString(user);
        resp.getWriter().println(user_json);
    }

    public void respUsers(HttpServletResponse resp) throws SQLException, IOException {
        Collection<User> users = null;
        users = UserService.getInstance().findAll();
        String users_json =  JSON.toJSONString(users);
        resp.getWriter().println(users_json);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String user_json = JSONUtil.getJSON(req);
        System.out.println(user_json);
        User user = JSONObject.parseObject(user_json,User.class);
        JSONObject message = new JSONObject();
        try {
            if(UserService.getInstance().addUser(user)){
                message.put("message","添加成功");
            }else {
                message.put("message","数据库未发生改变");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            message.put("message","数据库操作异常");
        }
        resp.getWriter().println(message);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String user_json = JSONUtil.getJSON(req);
        User user = JSONObject.parseObject(user_json,User.class);
        JSONObject message = new JSONObject();
        try {
            UserService.getInstance().updateUser(user);
            message.put("message","修改成功");
        } catch (SQLException e) {
            e.printStackTrace();
            message.put("message","数据库操作异常");
        }
        resp.getWriter().println(message);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userId_json = req.getParameter("user_id");
        JSONObject message = new JSONObject();
        try {
            boolean isDeleted = UserService.getInstance().deleteUser(Integer.parseInt(userId_json));
            System.out.println(isDeleted);
            message.put("message","删除成功");
        } catch (SQLException e) {
            e.printStackTrace();
            message.put("message","数据库操作异常");
        } catch (Exception e){
            e.printStackTrace();
            message.put("message","网络异常");
        }
        resp.getWriter().println(message);
    }
}
