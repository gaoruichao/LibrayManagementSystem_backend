package service;

import dao.ReaderDao;
import domain.Reader;

import java.sql.SQLException;
import java.util.Collection;
public class ReaderService {
    private static ReaderDao readerDao = ReaderDao.getInstance();
    private static ReaderService readerService =new ReaderService();
    private ReaderService(){}
    public static ReaderService getInstance(){
        return readerService;
    }
    public Collection<Reader> findAll(){
        return readerDao.findAll();
    }
    public Reader find(Integer id)throws SQLException {
        return readerDao.find(id);
    }
    public boolean update(Reader reader)throws SQLException{
        return readerDao.update(reader);
    }
    public boolean add(Reader reader) throws SQLException{
        return readerDao.add(reader);
    }
    public boolean delete(Integer id) throws SQLException{
        return readerDao.delete(id);
    }
    public Collection<Reader> findByName(String name) throws SQLException {
        return readerDao.findByName(name);
    }
    public int[] findTypeNum() throws SQLException {
        return readerDao.findTypeNum();
    }
}
