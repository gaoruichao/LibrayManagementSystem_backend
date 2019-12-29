package controller;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import dao.BookDao;
import domain.Book;
import util.JSONUtil;
import service.BookService;
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
@WebServlet("/book.ctl")
public class BookController extends HttpServlet {
    /**
     * 增加一个Book对象：将来自前端请求的JSON对象，增加到数据库表中
     * @param request 请求对象
     * @param response 响应对象
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //根据request对象，获得代表参数的JSON字串
        String book_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Book对象
        Book bookToAdd = JSON.parseObject(book_json, Book.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //在数据库表中增加Book对象
        try {
            BookService.getInstance().add(bookToAdd);
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
     * 删除一个Book对象：根据来自前端请求的id，删除数据库表中id的对应记录
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
        //到数据库表中删除对应的Book
        try {
            BookService.getInstance().delete(id);
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
     * 修改一个Book对象：将来自前端请求的JSON对象，更新数据库表中相同id的记录
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String book_json = JSONUtil.getJSON(request);
        //将JSON字串解析为Book对象
        Book bookToUpdate = JSON.parseObject(book_json, Book.class);
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        //到数据库表修改Book对象对应的记录
        try {
            BookService.getInstance().update(bookToUpdate);
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
     * 把一个或所有Book对象响应到前端
     * @param request
     * @param response
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        //读取参数id
        String id_str = request.getParameter("id");
        String bookName = request.getParameter("bookName");
        //创建JSON对象message，以便往前端响应信息
        JSONObject message = new JSONObject();
        try {
            //如果id = null, 表示响应所有Book对象，否则响应id指定的Book对象
            if (id_str == null && bookName == null) {
                responseBooks(response);
            } else if(id_str != null && bookName ==null){
                int id = Integer.parseInt(id_str);
                responseBook(id, response);
            }else if (id_str == null && bookName != null){
                responseBooksByBookName(bookName,response);
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
    //响应一个Book对象
    private void responseBook(int id, HttpServletResponse response)
            throws SQLException,Exception{
        Book book = null;
        //根据id查找Book
        book = BookService.getInstance().find(id);
        String book_json = JSON.toJSONString(book);
        //响应book_json到前端
        response.getWriter().println(book_json);
    }
    //响应所有Book对象
    private void responseBooks(HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有Book
        Collection<Book> books = BookService.getInstance().findAll();
        String books_json = JSON.toJSONString(books, SerializerFeature.DisableCircularReferenceDetect);
        //响应books_json到前端
        response.getWriter().println(books_json);
    }

    private void responseBooksByBookName(String name,HttpServletResponse response)
            throws SQLException,Exception {
        //获得所有Book
        Collection<Book> books = BookService.getInstance().findAllByBookName(name);
        String books_json = JSON.toJSONString(books, SerializerFeature.DisableCircularReferenceDetect);
        //响应books_json到前端
        response.getWriter().println(books_json);
    }

}

