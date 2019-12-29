package service;

import dao.ReturnBookDao;
import domain.ReturnBook;

import java.sql.SQLException;
import java.util.Collection;

public class ReturnBookService {
    private static ReturnBookDao returnBookDao = ReturnBookDao.getInstance();
    private static ReturnBookService returnBookService =new ReturnBookService();
    private ReturnBookService(){}
    public static ReturnBookService getInstance(){
        return returnBookService;
    }
    public Collection<ReturnBook> findAll(){
        return returnBookDao.findAll();
    }
    public Collection<ReturnBook> findByReaderName(String name)throws SQLException{
        return returnBookDao.findByReaderName(name);
    }
    public ReturnBook find(Integer id)throws SQLException {
        return returnBookDao.find(id);
    }
    public boolean update(ReturnBook ReturnBook) throws SQLException, ClassNotFoundException {
        return returnBookDao.update(ReturnBook);
    }
    public boolean add(ReturnBook ReturnBook) throws SQLException, ClassNotFoundException {
        return returnBookDao.add(ReturnBook);
    }
    public boolean delete(Integer id) throws SQLException, ClassNotFoundException {
        return returnBookDao.delete(id);
    }
}
