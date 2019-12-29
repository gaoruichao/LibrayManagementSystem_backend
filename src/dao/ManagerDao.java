package dao;
import domain.Manager;
import util.JdbcHelper;
import java.sql.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.TreeSet;
public final class ManagerDao {
	//本类的一个对象引用，保存自身对象
	private static ManagerDao managerDao=new ManagerDao();
	//私有的构造方法，防止其它类创建它的对象
	private ManagerDao(){}
	//静态方法，返回本类的惟一实例化对象
	public static ManagerDao getInstance(){
		return managerDao;
	}

	//findAll方法，获取全部数据
	public Collection<Manager> findAll(){
		Collection<Manager> managers = new TreeSet<Manager>();
		try{
			//获得数据库连接对象
			Connection connection = JdbcHelper.getConn();
			//在该连接上创建语句盒子对象
			Statement stmt = connection.createStatement();
			//执行SQL查询语句并获得结果集对象
			ResultSet resultSet = stmt.executeQuery("SELECT * FROM manager");
			//若结果存在下一条，执行循环体
			while (resultSet.next()) {
				//根据数据库中的数据,创建manager类型的对象
				Manager manager = new Manager(resultSet.getInt("id"),
						resultSet.getString("no"),
						resultSet.getString("name")
				);
				//添加到集合managers中
				managers.add(manager);
			}
			connection.close();
		}catch (SQLException e){
			e.printStackTrace();
		}
		return managers;
	}

	//根据id找对象
	public Manager find(Integer id) throws SQLException{
		//声明一个manager类型的变量
		Manager manager = null;
		//获得数据库连接对象
		Connection connection = JdbcHelper.getConn();
		//写sql语句
		String findTeacherById_sql = "SELECT * FROM Manager WHERE id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(findTeacherById_sql);
		//为预编译参数赋值
		preparedStatement.setInt(1,id);
		//执行预编译语句
		ResultSet resultSet = preparedStatement.executeQuery();
		if (resultSet.next()){
			manager = new Manager(
					resultSet.getInt("id"),
					resultSet.getString("no"),
					resultSet.getString("name"));
		}
		//关闭资源
		JdbcHelper.close(resultSet,preparedStatement,connection);
		return manager;
	}
	//模糊查询
	public Collection<Manager> findAllByManagerName(String name){
		Collection<Manager> managers = new TreeSet<Manager>();
		try{
			//获得数据库连接对象
			Connection connection = JdbcHelper.getConn();
			//写sql语句
			String deleteManager_sql = "SELECT * FROM manager WHERE name like ?";
			//在该连接上创建预编译语句对象
			PreparedStatement preparedStatement = connection.prepareStatement(deleteManager_sql);
			//为预编译参数赋值
			preparedStatement.setString(1,"%"+name +"%");
			ResultSet resultSet = preparedStatement.executeQuery();
			//若结果存在下一条，执行循环体
			while (resultSet.next()) {
				//根据数据库中的数据,创建manager类型的对象
				Manager manager = new Manager(resultSet.getInt("id"),
						resultSet.getString("no"),
						resultSet.getString("name")
				);
				//添加到集合managers中
				managers.add(manager);
			}
			connection.close();
		}catch (SQLException e){
			e.printStackTrace();
		}
		return managers;
	}
	//更新方法
	public boolean update(Manager manager) throws SQLException,ClassNotFoundException{
		//获得数据库连接对象
		Connection connection = JdbcHelper.getConn();
		//写sql语句
		String updateDegree_sql = " update Manager set no=?,name=? where id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(updateDegree_sql);
		//为预编译参数赋值
		preparedStatement.setString(1,manager.getNo());
		preparedStatement.setString(2,manager.getName());
		preparedStatement.setInt(3,manager.getId());
		//执行预编译语句，获取改变记录行数并赋值给affectedRowNum
		preparedStatement.executeUpdate();
		int affectedRows = preparedStatement.executeUpdate();
		System.out.println("修改了"+affectedRows+"行记录");
		//关闭资源
		JdbcHelper.close(preparedStatement,connection);
		return affectedRows>0;
	}
	// 先为manager表增加一条记录，获得新增记录的id，然后为本方法的manager参数赋id。
	// 然后创建一个manager对象，关联已经拥有id的manager对象，然后将manager对象保存到表中。
	public boolean add(Manager manager) throws SQLException {
		PreparedStatement preparedStatement = null;
		Connection connection = null;
		int actorId = 0;
		//获得数据库连接对象
		connection = JdbcHelper.getConn();
		String addTeacher_sql = "INSERT INTO Manager (id,no,name) VALUES" + " (?,?,?)";
		//在该连接上创建预编译语句对象，该对象可获得自增型的属性的值
		preparedStatement = connection.prepareStatement(addTeacher_sql);
		//为预编译参数赋值
		preparedStatement.setInt(1,actorId);
		preparedStatement.setString(2, manager.getNo());
		preparedStatement.setString(3, manager.getName());
		//执行预编译语句
		//执行预编译语句，获取添加记录行数并赋值给affectedRowNum
		int affectedRowNum=preparedStatement.executeUpdate();
		System.out.println("添加了"+affectedRowNum+"行记录");
		//关闭资源
		JdbcHelper.close(preparedStatement, connection);
		//因为该方法会处理异常，所以返回该变量，以便controller根据此值做出响应
		return affectedRowNum>0;
	}

	//delete方法，根据manager的id值，删除数据库中对应的manager对象
	public boolean delete(int id) throws SQLException{
		//获得数据库连接对象
		Connection connection = JdbcHelper.getConn();
		//写sql语句
		String deleteManager_sql = "DELETE FROM manager WHERE id=?";
		//在该连接上创建预编译语句对象
		PreparedStatement preparedStatement = connection.prepareStatement(deleteManager_sql);
		//为预编译参数赋值
		preparedStatement.setInt(1,id);
		//执行预编译语句，获取删除记录行数并赋值给affectedRowNum
		int affectedRows = preparedStatement.executeUpdate();
		System.out.println("删除了"+affectedRows+"行记录");
		//关闭资源
		JdbcHelper.close(preparedStatement,connection);
		return affectedRows>0;
	}
}
