package service.mu;

import dao.mu.UserDao;
import domain.mu.User;

import java.sql.SQLException;
import java.util.Collection;

public class UserService {
    private static UserDao degreeDao
            = UserDao.getInstance();
    private static UserService degreeService
            =new UserService();
    private UserService(){}
    public boolean addUser(User user)throws SQLException{
        return UserDao.getInstance().addUser(user);
    }
    public boolean updateUser(User user) throws SQLException{
        return UserDao.getInstance().updateUser(user);
    }
    public boolean deleteUser(int userId) throws SQLException{
        return UserDao.getInstance().deleteUser(userId);
    }
    public static UserService getInstance(){
        return degreeService;
    }
    public User login(String account) throws SQLException {
        return UserDao.getInstance().login(account);
    }
    public User findByUserId(int userId) throws SQLException{
        return UserDao.getInstance().findByUserId(userId);
    }
    public Collection<User> findAll() throws SQLException {
        return UserDao.getInstance().findAll();
    }
}
