package domain;
import util.IdService;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
public class Reader implements
        Comparable<Reader>, Serializable {
    {
        this.id = IdService.getId();
    }
    public Reader() {
    }

    public Reader(int id, String no, String name, int age, String phone,int borrowedNum,Date date, ReaderType readerType) {
        this(no,name,age,phone,borrowedNum,date,readerType);
        this.id = id;
    }

    public Reader(String no, String name, int age, String phone,int borrowedNum,Date date, ReaderType readerType) {
        this.no = no;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.borrowedNum = borrowedNum;
        this.date = date;
        this.readerType = readerType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public ReaderType getReaderType() {
        return readerType;
    }

    public void setReaderType(ReaderType readerType) {
        this.readerType = readerType;
    }

    public int getBorrowedNum() {
        return borrowedNum;
    }

    public void setBorrowedNum(int borrowedNum) {
        this.borrowedNum = borrowedNum;
    }

    private int id;
    private String no;
    private String name;
    private int age;
    private String phone;
    private Date date;
    private ReaderType readerType;
    private int borrowedNum;

    @Override
    public int compareTo(Reader o) {
        return this.id - o.getId();
    }
}
