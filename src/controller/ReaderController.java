package controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.Reader;
import service.ReaderService;
import util.JSONUtil;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;
/**
 * 将所有方法组织在一个Controller(Servlet)中
 */
@WebServlet("/reader.ctl")
public class ReaderController extends HttpServlet {
    /**
     * 增加一个Reader对象：将来自前端请求的JSON对象，增加到数据库表中
     * @param request 请求对象
     * @param response 响应对象
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //根据request对象，获得代表参数的JSON字串
        String reader_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Reader对象
        Reader readerToAdd = JSON.parseObject(reader_json, Reader.class);
        JSONObject message = new JSONObject();
        //在数据库表中增加Reader对象
        try {
            ReaderService.getInstance().add(readerToAdd);
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
     * 删除一个Reader对象：根据来自前端请求的id，删除数据库表中id的对应记录
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
        //到数据库表中删除对应的Reader
        try {
            ReaderService.getInstance().delete(id);
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
     * 修改一个Reader对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String reader_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Reader对象
        Reader readerToUpdate = JSON.parseObject(reader_json, Reader.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改Reader对象对应的记录
        try {
            ReaderService.getInstance().update(readerToUpdate);
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
     * 把一个或所有Reader对象响应到前端
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        String name_str = request.getParameter("name");
        String paraType = request.getParameter("line");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            if(paraType != null){

            }
            //如果id = null, 表示响应所有Reader对象，否则响应id指定的Reader对象
            if (id_str == null && name_str == null) {
                responseReaders(response);
            } else if(name_str == null){
                int id = Integer.parseInt(id_str);
                responseReader(id, response);
            } else {
                responseReadersByName(name_str,response);
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
    private void responseTypeNum(HttpServletResponse response) throws SQLException {
        int[] typeNum = new int[3];
        String jsonStr;
        typeNum = ReaderService.getInstance().findTypeNum();
        String numStr = JSON.toJSONString(typeNum);
        JSONObject jsonObject = JSON.parseObject(numStr);
        JSONArray jsonArray = (JSONArray) jsonObject.get("jsonObject");
        jsonStr = jsonArray.toString();
    }
    private void responseReadersByName(String name,HttpServletResponse response)
            throws SQLException, IOException {
        Collection<Reader> readers = ReaderService.getInstance().findByName(name);
        String readers_json = JSON.toJSONString(readers, SerializerFeature.DisableCircularReferenceDetect);
        response.getWriter().println(readers_json);
    }
    //响应一个Reader对象
    private void responseReader(int id, HttpServletResponse response)
            throws SQLException,Exception{
        Reader reader = null;
        //根据id查找Reader
        reader = ReaderService.getInstance().find(id);
        String reader_json = JSON.toJSONString(reader);
        //响应reader_json到前端
        response.getWriter().println(reader_json);
    }
    //响应所有Reader对象
    private void responseReaders(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有Reader
        Collection<Reader> readers = ReaderService.getInstance().findAll();
        String readers_json = JSON.toJSONString(readers, SerializerFeature.DisableCircularReferenceDetect);
        //响应readers_json到前端
        response.getWriter().println(readers_json);
    }
}

