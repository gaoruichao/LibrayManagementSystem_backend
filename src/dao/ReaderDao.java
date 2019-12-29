package dao;
import domain.Reader;
import util.JdbcHelper;
import service.ReaderTypeService;
import java.sql.*;
import java.util.Collection;
import java.util.TreeSet;
public final class ReaderDao {
    private static ReaderDao readerDao= new ReaderDao();
    private ReaderDao(){}
    public static ReaderDao getInstance(){
        return readerDao;
    }
    //返回结果集对象
    public Collection<Reader> findAll(){
        Collection<Reader> readers = new TreeSet<Reader>();
        try{
            //获得数据库连接对象
            Connection connection = JdbcHelper.getConn();
            //在该连接上创建语句盒子对象
            Statement stmt = connection.createStatement();
            //执行SQL查询语句并获得结果集对象
            ResultSet resultSet = stmt.executeQuery("SELECT * FROM Reader");
            //若结果存在下一条，执行循环体
            while (resultSet.next()) {
                //打印结果集中记录的type_id字段
                System.out.print(ReaderTypeService.getInstance().find(resultSet.getInt("type_id")));
                //根据数据库中的数据,创建Reader类型的对象
                Reader reader = new Reader(resultSet.getInt("id"),
                        resultSet.getString("no"),
                        resultSet.getString("name"),
                        resultSet.getInt("age"),
                        resultSet.getString("phone"),
                        resultSet.getInt("borrowedNum"),
                        resultSet.getDate("date"),
                        ReaderTypeService.getInstance().find(resultSet.getInt("type_id"))
                );
                //添加到集合readers中
                readers.add(reader);
            }
            connection.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return readers;
    }
    public int[] findTypeNum() throws SQLException {
        int[] findResults = new int[3];
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //在该连接上创建语句盒子对象
        Statement stmt = connection.createStatement();
        //执行SQL查询语句并获得结果集对象
        ResultSet resultSet = stmt.executeQuery("SELECT * FROM Reader");
        //若结果存在下一条，执行循环体
        while (resultSet.next()) {
            if(resultSet.getInt("type_id") == 1){
                findResults[0]++;
            } else if (resultSet.getInt("type_id") == 2){
                findResults[1]++;
            }else {
                findResults[2]++;
            }
        }
        return findResults;
    }
    public Collection<Reader> findByName(String name) throws SQLException {
        Collection<Reader> readers = new TreeSet<Reader>();
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String findReaderByName_sql = "SELECT * FROM reader WHERE name like ?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(findReaderByName_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,"%"+name+"%");
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Reader对象
        //若结果集中没有记录，则本方法返回null
        while (resultSet.next()) {
            //根据数据库中的数据,创建Reader类型的对象
            Reader reader = new Reader(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getString("name"),
                    resultSet.getInt("age"),
                    resultSet.getString("phone"),
                    resultSet.getInt("borrowedNum"),
                    resultSet.getDate("date"),
                    ReaderTypeService.getInstance().find(resultSet.getInt("type_id"))
            );
            //添加到集合readers中
            readers.add(reader);
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return readers;
    }
    public Reader find(Integer id) throws SQLException {
        //声明一个Reader类型的变量
        Reader reader = null;
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteReader_sql = "SELECT * FROM reader WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteReader_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句
        ResultSet resultSet = preparedStatement.executeQuery();
        //由于id不能取重复值，故结果集中最多有一条记录
        //若结果集有一条记录，则以当前记录中的id,description,no,remarks值为参数，创建Reader对象
        //若结果集中没有记录，则本方法返回null
        if (resultSet.next()){
            reader = new Reader(resultSet.getInt("id"),
                    resultSet.getString("no"),
                    resultSet.getString("name"),
                    resultSet.getInt("age"),
                    resultSet.getString("phone"),
                    resultSet.getInt("borrowedNum"),
                    resultSet.getDate("date"),
                    ReaderTypeService.getInstance().find(resultSet.getInt("type_id"))
            );
        }
        //关闭资源
        JdbcHelper.close(resultSet,preparedStatement,connection);
        return reader;
    }
    public boolean add(Reader reader) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String addReader_sql = "INSERT INTO reader (no,name,age,phone,borrowedNum,date,type_id) VALUES"+" (?,?,?,?,?,?,?)";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(addReader_sql);
        //为预编译参数赋值
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        preparedStatement.setString(1,reader.getNo());
        preparedStatement.setString(2,reader.getName());
        preparedStatement.setInt(3,reader.getAge());
        preparedStatement.setString(4,reader.getPhone());
        preparedStatement.setInt(5,0);
        preparedStatement.setDate(6,new Date(timestamp.getTime()));
        preparedStatement.setInt(7,reader.getReaderType().getId());
        //执行预编译语句，获取添加记录行数并赋值给affectedRowNum
        int affectedRowNum=preparedStatement.executeUpdate();
        System.out.println("添加了"+affectedRowNum+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRowNum>0;
    }
    //delete方法，根据reader的id值，删除数据库中对应的reader对象
    public boolean delete(int id) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String deleteReader_sql = "DELETE FROM reader WHERE id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(deleteReader_sql);
        //为预编译参数赋值
        preparedStatement.setInt(1,id);
        //执行预编译语句，获取删除记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("删除了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
    public boolean update(Reader reader) throws SQLException{
        //获得数据库连接对象
        Connection connection = JdbcHelper.getConn();
        //写sql语句
        String updateReader_sql = " update reader set no=?,name=?,age=?,phone=?,borrowedNum=?,date=?,type_id=? where id=?";
        //在该连接上创建预编译语句对象
        PreparedStatement preparedStatement = connection.prepareStatement(updateReader_sql);
        //为预编译参数赋值
        preparedStatement.setString(1,reader.getNo());
        preparedStatement.setString(2,reader.getName());
        preparedStatement.setInt(3,reader.getAge());
        preparedStatement.setString(4,reader.getPhone());
        preparedStatement.setInt(5,reader.getBorrowedNum());
        preparedStatement.setDate(6,reader.getDate());
        preparedStatement.setInt(7,reader.getReaderType().getId());
        preparedStatement.setInt(8,reader.getId());
        //执行预编译语句，获取改变记录行数并赋值给affectedRowNum
        int affectedRows = preparedStatement.executeUpdate();
        System.out.println("修改了"+affectedRows+"行记录");
        //关闭资源
        JdbcHelper.close(preparedStatement,connection);
        return affectedRows>0;
    }
}