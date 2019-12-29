package service;

import dao.BookDao;
import domain.Book;

import java.sql.SQLException;
import java.util.Collection;
public class BookService {
    private static BookDao bookDao = BookDao.getInstance();
    private static BookService bookService =new BookService();
    private BookService(){}
    public static BookService getInstance(){
        return bookService;
    }
    public Collection<Book> findAll(){
        return bookDao.findAll();
    }
    public Collection<Book> findAllByBookName(String name){
        return bookDao.findAllByBookName(name);
    }
    public Book find(Integer id)throws SQLException {
        return bookDao.find(id);
    }
    public boolean update(Book book)throws SQLException{
        return bookDao.update(book);
    }
    public boolean add(Book book) throws SQLException{
        return bookDao.add(book);
    }
    public boolean delete(Integer id) throws SQLException{
        return bookDao.delete(id);
    }
}