package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.ReaderType;
import service.ReaderTypeService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/readerType.ctl")
public class ReaderTypeController extends HttpServlet {
    /**
     * POST, http://localhost:8080/readerType.ctl, 增加读者类型
     * 增加一个读者类型对象：将来自前端请求的JSON对象，增加到数据库表中
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //根据request对象，获得代表参数的JSON字串
        String readerType_json = JSONUtil.getJSON(request);
        //将JSON字串解析为ReaderType对象
        ReaderType readerTypeToAdd = JSON.parseObject(readerType_json, ReaderType.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //增加ReaderType对象
            boolean posted = ReaderTypeService.getInstance().add(readerTypeToAdd);
            if (posted) {
                message.put("message", "增加成功");
            }else {
                message.put("message", "已被增加");
            }
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        response.getWriter().println(message);
    }

    /**
     * GET, http://localhost:8080/readerType.ctl?id=1, 查询id=1的读者类型
     * GET, http://localhost:8080/readerType.ctl, 查询所有的读者类型
     * 响应一个或所有读者对象
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        String typeName = request.getParameter("typeName");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id值不为空，调用根据id值响应一个读者类型对象方法，否则，调用根据读者类型名响应一个读者类型对象的方法
            if (id_str != null){
                //强制类型转换成int型
                int id = Integer.parseInt(id_str);
                this.responseReaderType(id,response);
            }else if (typeName != null){
                this.responseUserByReaderTypeName(typeName,response);
            }else{
                responseReaderTypes(response);
            }
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
            //响应message到前端
            response.getWriter().println(message);
        } catch (Exception e) {
            message.put("message", "网络异常");
            e.printStackTrace();
            //响应message到前端
            response.getWriter().println(message);
        }
    }

    //根据id响应一个读者类型对象
    private void responseReaderType(int id, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //根据id查找读者类型
        ReaderType readerType = ReaderTypeService.getInstance().find(id);
        String readerType_json = JSON.toJSONString(readerType, SerializerFeature.DisableCircularReferenceDetect);
        //响应ReaderType_json到前端
        response.getWriter().println(readerType_json);
    }
    //根据读者类型名响应一个读者类型对象
    private void responseUserByReaderTypeName(String typeName, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //根据id查找读者类型
        ReaderType readerType = ReaderTypeService.getInstance().findByReaderTypeName(typeName);
        String readerType_json = JSON.toJSONString(readerType, SerializerFeature.DisableCircularReferenceDetect);
        //响应ReaderType_json到前端
        response.getWriter().println(readerType_json);
    }
    //响应所有读者类型对象
    private void responseReaderTypes(HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //获得所有读者类型
        Collection<ReaderType> readerTypes = ReaderTypeService.getInstance().findAll();
        String readerTypes_json = JSON.toJSONString(readerTypes, SerializerFeature.DisableCircularReferenceDetect);
        //响应message到前端
        response.getWriter().println(readerTypes_json);
    }
    /**
     * DELETE, http://localhost:8080/readerType.ctl?id=1, 删除id=1的读者类型
     * 删除一个读者类型对象：根据来自前端请求的id，删除数据库表中id的对应记录
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
        try {
            //到数据库表中删除对应的读者类型
            boolean deleted =  ReaderTypeService.getInstance().delete(id);
            if (deleted) {
                message.put("message", "删除成功");
            }else {
                message.put("message", "已被删除");
            }
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
            e.printStackTrace();
        }

        //响应message到前端
        response.getWriter().println(message);
    }
    /**
     * PUT, http://localhost:8080/readerType.ctl, 修改读者类型
     * 修改一个读者类型对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String readerType_json = JSONUtil.getJSON(request);
        //将JSON字串解析为ReaderType对象
        ReaderType readerTypeToUpdate = JSON.parseObject(readerType_json, ReaderType.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //修改ReaderType对象
            boolean put = ReaderTypeService.getInstance().update(readerTypeToUpdate);
            if (put) {
                message.put("message", "修改成功");
            }else {
                message.put("message", "已被修改");
            }
        } catch (SQLException e) {
            message.put("message", "数据库操作异常");
            e.printStackTrace();
            e.printStackTrace();
        } catch (Exception e) {
            message.put("message", "网络异常");
            e.printStackTrace();
        }

        //响应message到前端
        response.getWriter().println(message);
    }

}
