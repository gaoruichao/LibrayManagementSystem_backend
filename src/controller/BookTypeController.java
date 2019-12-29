package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.BookType;
import service.BookTypeService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/bookType.ctl")
public class BookTypeController extends HttpServlet {
    /**
     * POST, http://localhost:8080/bookType.ctl, 增加图书类型
     * 增加一个图书类型对象：将来自前端请求的JSON对象，增加到数据库表中
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
@Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //根据request对象，获得代表参数的JSON字串
    String bookType_json = JSONUtil.getJSON(request);

    //将JSON字串解析为BookType对象
    BookType bookTypeToAdd = JSON.parseObject(bookType_json, BookType.class);
    //创建JSON对象message，以便往前端响应信息
    JSONObject message = new JSONObject();
    try {
        //增加BookType对象
        boolean posted = BookTypeService.getInstance().add(bookTypeToAdd);
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
     * GET, http://localhost:8080/bookType.ctl?id=1, 查询id=1的图书类型
     * GET, http://localhost:8080/bookType.ctl, 查询所有的图书类型
     * 响应一个或所有图书类型对象
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
        //如果id值不为空，调用根据id值响应一个图书类型对象方法，否则，调用根据图书类型名响应一个图书类型对象的方法
        if (id_str != null){
            //强制类型转换成int型
            int id = Integer.parseInt(id_str);
            this.responseBookType(id,response);
        }else if (typeName != null){
            this.responseUserByBookTypeName(typeName,response);
        }else{
            responseBookTypes(response);
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
    //根据id响应一个图书类型对象
    private void responseBookType(int id, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //根据id查找图书类型
        BookType bookType = BookTypeService.getInstance().find(id);
        String bookType_json = JSON.toJSONString(bookType);
        //响应BookType_json到前端
        response.getWriter().println(bookType_json);
    }
    //根据用户名响应一个图书类型对象
    private void responseUserByBookTypeName(String typeName, HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //根据id查找图书类型
        BookType bookType = BookTypeService.getInstance().findByBookTypeName(typeName);
        String bookType_json = JSON.toJSONString(bookType);
        //响应BookType_json到前端
        response.getWriter().println(bookType_json);
    }
    //响应所有图书类型对象
    private void responseBookTypes(HttpServletResponse response)
            throws ServletException, IOException, SQLException {
        //获得所有图书类型
        Collection<BookType> bookTypes = BookTypeService.getInstance().findAll();
        String bookTypes_json = JSON.toJSONString(bookTypes, SerializerFeature.DisableCircularReferenceDetect);
        //响应message到前端
        response.getWriter().println(bookTypes_json);
    }

    /**
     * PUT, http://localhost:8080/bookType.ctl, 修改图书类型
     * 修改一个图书类型对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     *
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String bookType_json = JSONUtil.getJSON(request);
        //将JSON字串解析为BookType对象
        BookType bookTypeToUpdate = JSON.parseObject(bookType_json, BookType.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //修改BookType对象
            boolean puted = BookTypeService.getInstance().update(bookTypeToUpdate);
            if (puted) {
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
    /**
     * DELETE, http://localhost:8080/bookType.ctl?id=1, 删除id=1的图书类型
     * 删除一个图书类型对象：根据来自前端请求的id，删除数据库表中id的对应记录
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
            //到数据库表中删除对应的学院
            boolean deleted =  BookTypeService.getInstance().delete(id);
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


}
