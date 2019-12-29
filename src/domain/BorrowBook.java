package domain;


import java.io.Serializable;
import java.sql.Date;

/**
 * <!-- begin-user-doc -->
 * <!--  end-user-doc  -->
 * @generated
 */

public class BorrowBook implements
		Comparable<BorrowBook>, Serializable
{
	private int id;
	private String no;
	private Date borrowDate;
	public Reader reader;
	public Book book;
	public Manager manager;

	public BorrowBook(){
	}

	public BorrowBook(int id, String no, Date borrowDate, Reader reader, Book book, Manager manager) {
		this(no,borrowDate,reader,book,manager);
		this.id = id;
	}

	public BorrowBook(String no, Date borrowDate, Reader reader, Book book, Manager manager) {
		this.no = no;
		this.borrowDate = borrowDate;
		this.reader = reader;
		this.book = book;
		this.manager = manager;
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

	public Date getBorrowDate() {
		return borrowDate;
	}

	public void setBorrowDate(Date borrowDate) {
		this.borrowDate = borrowDate;
	}

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	@Override
	public int compareTo(BorrowBook o) {
		return this.id - o.getId();
	}
}

