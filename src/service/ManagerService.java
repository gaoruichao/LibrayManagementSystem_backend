package service;


import dao.ManagerDao;
import domain.Manager;

import javax.xml.namespace.QName;
import java.sql.SQLException;
import java.util.Collection;

public final class ManagerService {
	private static ManagerDao managerDao= ManagerDao.getInstance();
	private static ManagerService managerService=new ManagerService();
	private ManagerService(){}

	public static ManagerService getInstance(){
		return managerService;
	}

	public Collection<Manager> findAll(){
		return managerDao.findAll();
	}
	public Collection<Manager> findAllByManagerName(String name){
		return managerDao.findAllByManagerName(name);
	}

	public Manager find(Integer id)throws SQLException{
		return managerDao.find(id);
	}

	public boolean update(Manager manager) throws SQLException,ClassNotFoundException {
		return managerDao.update(manager);
	}

	public boolean add(Manager manager)throws SQLException{
		return managerDao.add(manager);
	}

	public boolean delete(Integer id) throws SQLException {
		return managerDao.delete(id);
	}

}
