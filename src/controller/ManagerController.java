package controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.Manager;
import service.ManagerService;
import util.JSONUtil;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;
@WebServlet("/manager.ctl")
public class ManagerController extends HttpServlet{
    /**
     * 增加一个管理员对象：将来自前端请求的JSON对象，增加到数据库表中
     *
     * @param request  请求对象
     * @param response 响应对象
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //设置请求字符编码为UTF-8
        request.setCharacterEncoding("UTF-8");
        //根据request对象，获得代表参数的JSON字串
        String manager_json = JSONUtil.getJSON(request);

        //将JSON字串解析为manager对象
        Manager managerToAdd = JSON.parseObject(manager_json, Manager.class);

        //设置响应字符编码为UTF-8
        response.setContentType("text/html;charset=UTF-8");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加manager对象
        try {
            ManagerService.getInstance().add(managerToAdd);
            message.put("message", "增加成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * 删除一个管理员对象：根据来自前端请求的id，删除数据库表中id的对应记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        int id = Integer.parseInt(id_str);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();

        //到数据库表中删除对应的管理员
        try {
            ManagerService.getInstance().delete(id);
            message.put("message", "删除成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }


    /**
     * <p>
     * 修改一个管理员对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String manager_json = JSONUtil.getJSON(request);
        //将JSON字串解析为manager对象
        Manager managerToAdd = JSON.parseObject(manager_json, Manager.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改manager对象对应的记录
        try {
            ManagerService.getInstance().update(managerToAdd);
            message.put("message", "修改成功");
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
        } catch (Exception e) {
            message.put("message", "网络异常");
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * 把一个或所有管理员对象响应到前端
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //设置响应字符编码为UTF-8
        //response.setContentType("text/html;charset=UTF-8");
        //读取参数id
        String id_str = request.getParameter("id");
        String name = request.getParameter("name");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有manager对象，否则响应id指定的manager对象
            if (id_str == null && name == null) {
                responseManagers(response);
            } else if(id_str != null && name ==null){

                int id = Integer.parseInt(id_str);
                responseManager(id, response);
            }else if (id_str == null && name != null){
                responseManagersByManagerName(name,response);
            }
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
            //响应message到前端
            response.getWriter().println(message);
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
            //响应message到前端
            response.getWriter().println(message);
        }
    }

    //响应一个manager对象
    private void responseManager(int id, HttpServletResponse response)
            throws SQLException,Exception{
        Manager manager = null;
        //根据id查找manager
        manager = ManagerService.getInstance().find(id);
        String manager_json = JSON.toJSONString(manager);
        //响应manager_json到前端
        response.getWriter().println(manager_json);
    }
    //响应所有manager对象
    private void responseManagers(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有manager
        Collection<Manager> managers = ManagerService.getInstance().findAll();
        String managers_json = JSON.toJSONString(managers, SerializerFeature.DisableCircularReferenceDetect);
        //响应books_json到前端
        response.getWriter().println(managers_json);
    }

    private void responseManagersByManagerName(String name,HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有managerBook
        Collection<Manager> managers = ManagerService.getInstance().findAllByManagerName(name);
        String managers_json = JSON.toJSONString(managers, SerializerFeature.DisableCircularReferenceDetect);
        //响应managers_json到前端
        response.getWriter().println(managers_json);
    }

}
