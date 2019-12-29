package service;

import dao.BorrowBookDao;
import domain.BorrowBook;

import java.sql.SQLException;
import java.util.Collection;

public class BorrowBookService {
    private static BorrowBookDao borrowBookDao = BorrowBookDao.getInstance();
    private static BorrowBookService borrowBookService =new BorrowBookService();
    private BorrowBookService(){}
    public static BorrowBookService getInstance(){
        return borrowBookService;
    }
    public Collection<BorrowBook> findAll(){
        return borrowBookDao.findAll();
    }
    public Collection<BorrowBook> findByReaderName(String name)throws SQLException{
        return borrowBookDao.findByReaderName(name);
    }
    public BorrowBook find(Integer id)throws SQLException {
        return borrowBookDao.find(id);
    }
    public boolean update(BorrowBook borrowBook)throws SQLException{
        return borrowBookDao.update(borrowBook);
    }
    public boolean add(BorrowBook borrowBook) throws SQLException{
        return borrowBookDao.add(borrowBook);
    }
    public boolean delete(Integer id) throws SQLException{
        return borrowBookDao.delete(id);
    }
    public Collection<BorrowBook> findByBook(int id){
        return borrowBookDao.findByBook(id);
    }
}
