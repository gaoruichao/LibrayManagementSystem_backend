package domain;


import java.io.Serializable;
import java.sql.Date;

/**
 * <!-- begin-user-doc -->
 * <!--  end-user-doc  -->
 * @generated
 */

public class ReturnBook implements
		Comparable<ReturnBook>, Serializable
{

	private int id;
	private String no;
	private Date returnDate;
	public Book book;
	public Reader reader;
	public BorrowBook borrowBook;
	public Fine fine;
	public Manager manager;
	public ReturnBook(){
	}

	public ReturnBook(int id, String no, Date returnDate, Book book, Reader reader, BorrowBook borrowBook, Manager manager) {
		this(no,returnDate,book,reader,borrowBook,manager);
		this.id = id;
	}

	public ReturnBook(String no, Date returnDate, Book book, Reader reader, BorrowBook borrowBook, Manager manager) {
		this.no = no;
		this.returnDate = returnDate;
		this.book = book;
		this.reader = reader;
		this.borrowBook = borrowBook;
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

	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public Reader getReader() {
		return reader;
	}

	public void setReader(Reader reader) {
		this.reader = reader;
	}

	public BorrowBook getBorrowBook() {
		return borrowBook;
	}

	public void setBorrowBook(BorrowBook borrowBook) {
		this.borrowBook = borrowBook;
	}

	public Fine getFine() {
		return fine;
	}

	public void setFine(Fine fine) {
		this.fine = fine;
	}

	public Manager getManager() {
		return manager;
	}

	public void setManager(Manager manager) {
		this.manager = manager;
	}

	@Override
	public int compareTo(ReturnBook o) {
		return this.id - o.getId();
	}
}

