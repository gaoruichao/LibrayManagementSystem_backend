package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import domain.BorrowBook;
import service.BorrowBookService;
import util.JSONUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.Collection;

@WebServlet("/borrowBook.ctl")
public class BorrowBookController extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //根据request对象，获得代表参数的JSON字串
        String borrowBook_json = JSONUtil.getJSON(request);
        //将JSON字串解析为BorrowBook对象
        BorrowBook borrowBookToAdd = JSON.parseObject(borrowBook_json, BorrowBook.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加BorrowBook对象
        try {
            BorrowBookService.getInstance().add(borrowBookToAdd);
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
        String borrowBook_str = request.getParameter("paraType");
        String name_str = request.getParameter("readerName");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有BorrowBook对象，否则响应id指定的BorrowBook对象
            if (id_str == null && borrowBook_str == null&&name_str==null) {
                responseBorrowBooks(response);
            } else if(borrowBook_str == null&&name_str==null){
                int id = Integer.parseInt(id_str);
                responseBorrowBook(id, response);
            } else if(name_str==null){
                int id = Integer.parseInt(id_str);
                responseBorrowBookByBook(id,response);
            }else {
                responseBorrowBookByReaderName(name_str,response);
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
    private void responseBorrowBookByBook(int id, HttpServletResponse response) throws IOException {
        Collection<BorrowBook> borrowBooks = null;
        borrowBooks = BorrowBookService.getInstance().findByBook(id);
        String borrow_json = JSON.toJSONString(borrowBooks, SerializerFeature.DisableCircularReferenceDetect);
        response.getWriter().println(borrow_json);
    }
    private void responseBorrowBookByReaderName(String name, HttpServletResponse response) throws SQLException,IOException {
        Collection<BorrowBook> borrowBooks = null;
        borrowBooks = BorrowBookService.getInstance().findByReaderName(name);
        String borrow_json = JSON.toJSONString(borrowBooks, SerializerFeature.DisableCircularReferenceDetect);
        response.getWriter().println(borrow_json);
    }
    //响应一个BorrowBook对象
    private void responseBorrowBook(int id, HttpServletResponse response)
            throws SQLException,Exception{
        BorrowBook borrowBook = null;
        //根据id查找BorrowBook
        borrowBook = BorrowBookService.getInstance().find(id);
        String borrowBook_json = JSON.toJSONString(borrowBook);
        //响应borrowBook_json到前端
        response.getWriter().println(borrowBook_json);
    }
    //响应所有BorrowBook对象
    private void responseBorrowBooks(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有BorrowBook
        Collection<BorrowBook> borrowBooks = BorrowBookService.getInstance().findAll();
        String borrowBooks_json = JSON.toJSONString(borrowBooks, SerializerFeature.DisableCircularReferenceDetect);
        //响应borrowBooks_json到前端
        response.getWriter().println(borrowBooks_json);
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String borrowBook_json = JSONUtil.getJSON(req);
        //将JSON字串解析为BorrowBook对象
        BorrowBook borrowBookToUpdate = JSON.parseObject(borrowBook_json, BorrowBook.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改BorrowBook对象对应的记录
        try {
            BorrowBookService.getInstance().update(borrowBookToUpdate);
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
        //到数据库表中删除对应的BorrowBook
        try {
            BorrowBookService.getInstance().delete(id);
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
