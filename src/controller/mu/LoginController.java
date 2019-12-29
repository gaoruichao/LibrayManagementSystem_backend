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

@WebServlet("/login.ctl")
public class LoginController extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String userFromReq_json = JSONUtil.getJSON(req);
        User userFromReq = JSON.parseObject(userFromReq_json, User.class);
        User user = null;
        try {
            //根据请求信息的账户的用户名查询数据库中的记录，若存在该账户名的用户，则将查到的user给user赋值
            user = UserService.getInstance().login(userFromReq.getUsername());
        } catch (SQLException e) {
            e.printStackTrace();
        }
        //如果没查到user或者查到user但密码不对应，则返回错误登录的反馈信息
        if (user == null || (!user.getPassword().equals(userFromReq.getPassword()))) {
            JSONObject message = new JSONObject();
            message.put("message", "账户或密码错误");
            resp.getWriter().println(message);
            return;
        }
        String user_json = JSON.toJSONString(user);
        resp.getWriter().println(user_json);
    }
}

