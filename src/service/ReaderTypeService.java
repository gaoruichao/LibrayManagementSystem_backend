package service;

import dao.ReaderTypeDao;
import domain.ReaderType;

import java.sql.SQLException;
import java.util.Collection;

public final class ReaderTypeService {

    private static ReaderTypeDao readerTypeDao
            = ReaderTypeDao.getInstance();
    private static ReaderTypeService bookTypeService
            =new ReaderTypeService();
    private ReaderTypeService(){}

    public static ReaderTypeService getInstance(){
        return bookTypeService;
    }

    public Collection<ReaderType> findAll()throws SQLException {
        return readerTypeDao.findAll();
    }
    public ReaderType find(Integer id)throws SQLException{
        return readerTypeDao.find(id);
    }
    public ReaderType findByReaderTypeName(String readerTypeName)throws SQLException{
        return readerTypeDao.findByReaderTypeName(readerTypeName);
    }
    public boolean update(ReaderType readerType)throws SQLException{
        return readerTypeDao.update(readerType);
    }

    public boolean add(ReaderType readerType)throws SQLException {
        return readerTypeDao.add(readerType);
    }

    public boolean delete(Integer id)throws SQLException{
        return readerTypeDao.delete(id);
    }

}

