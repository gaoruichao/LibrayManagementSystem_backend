package service;

import dao.FineDao;
import domain.Fine;
import domain.Reader;

import java.sql.SQLException;
import java.util.Collection;

public class FineService {
    private static FineDao fineDao = FineDao.getInstance();
    private static FineService fineService =new FineService();
    private FineService(){}
    public static FineService getInstance(){
        return fineService;
    }
    public Collection<Fine> findAll(){
        return fineDao.findAll();
    }
    public Collection<Fine> fineByReaderName(String raederName) throws SQLException{
        return fineDao.findByReaderName(raederName);
    }
    public Fine find(Integer id)throws SQLException {
        return fineDao.find(id);
    }
    public boolean update(Fine reader)throws SQLException{
        return fineDao.update(reader);
    }
    public boolean add(Fine reader) throws SQLException{
        return fineDao.add(reader);
    }
    public boolean delete(Integer id) throws SQLException{
        return fineDao.delete(id);
    }
}
