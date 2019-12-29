package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.Fine;
import domain.Reader;
import service.FineService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/fine.ctl")
public class FineController extends HttpServlet {
    /**
     * 增加一个Fine对象：将来自前端请求的JSON对象，增加到数据库表中
     * @param request 请求对象
     * @param response 响应对象
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //根据request对象，获得代表参数的JSON字串
        String fine_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Fine对象
        Fine fineToAdd = JSON.parseObject(fine_json, Fine.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加Fine对象
        try {
            FineService.getInstance().add(fineToAdd);
            message.put("message", "增加成功");
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * 删除一个Fine对象：根据来自前端请求的id，删除数据库表中id的对应记录
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        int id = Integer.parseInt(id_str);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表中删除对应的Fine
        try {
            FineService.getInstance().delete(id);
            message.put("message", "删除成功");
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        response.getWriter().println(message);
    }


    /**
     *
     * 修改一个Fine对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String fine_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Fine对象
        Fine fineToUpdate = JSON.parseObject(fine_json, Fine.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改Fine对象对应的记录
        try {
            FineService.getInstance().update(fineToUpdate);
            message.put("message", "修改成功");
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * 把一个或所有Fine对象响应到前端
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        String name_str = request.getParameter("readerName");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有Fine对象，否则响应id指定的Fine对象
            if (id_str == null && name_str == null) {
                responseFines(response);
            } else if(name_str == null){
                int id = Integer.parseInt(id_str);
                responseFine(id, response);
            }else{
                responseFinesByReaderName(name_str,response);
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
    //响应一个Fine对象
    private void responseFine(int id, HttpServletResponse response)
            throws SQLException,Exception{
        Fine fine = null;
        //根据id查找Fine
        fine = FineService.getInstance().find(id);
        String fine_json = JSON.toJSONString(fine);
        //响应fine_json到前端
        response.getWriter().println(fine_json);
    }
    //响应所有Fine对象
    private void responseFines(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有Fine
        Collection<Fine> fines = FineService.getInstance().findAll();
        String fines_json = JSON.toJSONString(fines, SerializerFeature.DisableCircularReferenceDetect);
        //响应fines_json到前端
        response.getWriter().println(fines_json);
    }
    private void responseFinesByReaderName(String readerName, HttpServletResponse response)
            throws SQLException, IOException {
        Collection<Fine> fines = FineService.getInstance().fineByReaderName(readerName);
        String fines_json = JSON.toJSONString(fines, SerializerFeature.DisableCircularReferenceDetect);
        response.getWriter().println(fines_json);
    }
}
