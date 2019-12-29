package service;

import dao.BookTypeDao;
import domain.BookType;

import java.sql.SQLException;
import java.util.Collection;

public final class BookTypeService {
    private static BookTypeDao bookTypeDao
            = BookTypeDao.getInstance();
    private static BookTypeService bookTypeService
            =new BookTypeService();
    private BookTypeService(){}

    public static BookTypeService getInstance(){
        return bookTypeService;
    }

    public Collection<BookType> findAll()throws SQLException {
        return bookTypeDao.findAll();
    }
    public BookType find(Integer id)throws SQLException{
        return bookTypeDao.find(id);
    }
    public BookType findByBookTypeName(String bookTypeName)throws SQLException{
        return bookTypeDao.findByBookTypeName(bookTypeName);
    }

    public boolean update(BookType bookType)throws SQLException{
        return bookTypeDao.update(bookType);
    }

    public boolean add(BookType bookType)throws SQLException {
        return bookTypeDao.add(bookType);
    }

    public boolean delete(Integer id)throws SQLException{
        return bookTypeDao.delete(id);
    }

}

