package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.ReturnBook;
import service.ReturnBookService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/returnBook.ctl")
public class ReturnBookController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //根据request对象，获得代表参数的JSON字串
        String returnBook_json = JSONUtil.getJSON(request);
        //将JSON字串解析为ReturnBook对象
        ReturnBook returnBookToAdd = JSON.parseObject(returnBook_json, ReturnBook.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加ReturnBook对象
        try {
            ReturnBookService.getInstance().add(returnBookToAdd);
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

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        String name_str = request.getParameter("readerName");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有ReturnBook对象，否则响应id指定的ReturnBook对象
            if (id_str == null&&name_str==null) {
                responseReturnBooks(response);
            } else if(name_str==null){
                int id = Integer.parseInt(id_str);
                responseReturnBook(id, response);
            }else {
                responseReturnBooksByReaderName(name_str,response);
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
    //响应一个ReturnBook对象
    private void responseReturnBook(int id, HttpServletResponse response)
            throws SQLException,Exception{
        ReturnBook returnBook = null;
        //根据id查找ReturnBook
        returnBook = ReturnBookService.getInstance().find(id);
        String returnBook_json = JSON.toJSONString(returnBook);
        //响应returnBook_json到前端
        response.getWriter().println(returnBook_json);
    }
    //响应所有ReturnBook对象
    private void responseReturnBooks(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有ReturnBook
        Collection<ReturnBook> returnBooks = ReturnBookService.getInstance().findAll();
        String returnBooks_json = JSON.toJSONString(returnBooks, SerializerFeature.DisableCircularReferenceDetect);
        //响应returnBooks_json到前端
        response.getWriter().println(returnBooks_json);
    }
    private void responseReturnBooksByReaderName(String name,HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有ReturnBook
        Collection<ReturnBook> returnBooks = ReturnBookService.getInstance().findByReaderName(name);
        String returnBooks_json = JSON.toJSONString(returnBooks, SerializerFeature.DisableCircularReferenceDetect);
        //响应returnBooks_json到前端
        response.getWriter().println(returnBooks_json);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String returnBook_json = JSONUtil.getJSON(req);
        //将JSON字串解析为ReturnBook对象
        ReturnBook returnBookToUpdate = JSON.parseObject(returnBook_json, ReturnBook.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改ReturnBook对象对应的记录
        try {
            ReturnBookService.getInstance().update(returnBookToUpdate);
            message.put("message", "修改成功");
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        resp.getWriter().println(message);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //读取参数id
        String id_str = req.getParameter("id");
        int id = Integer.parseInt(id_str);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表中删除对应的ReturnBook
        try {
            ReturnBookService.getInstance().delete(id);
            message.put("message", "删除成功");
        }catch (SQLException e){
            message.put("message", "数据库操作异常");
            e.printStackTrace();
        }catch(Exception e){
            message.put("message", "网络异常");
            e.printStackTrace();
        }
        //响应message到前端
        resp.getWriter().println(message);
    }
}
