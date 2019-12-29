package domain;


import java.io.Serializable;

/**
 * <!-- begin-user-doc -->
 * <!--  end-user-doc  -->
 * @generated
 */

public class Fine implements
		Comparable<Fine>, Serializable
{

	private int id;
	private String no;
	private int fineAmount;
	private String description;
	public Reader reader;
	public Book book;
	public Fine(){ }

	public Fine(int id, String no, int fineAmount, String description, Reader reader, Book book) {
		this(no,fineAmount,description,reader,book);
		this.id = id;
	}

	public Fine(String no, int fineAmount, String description, Reader reader, Book book) {
		this.no = no;
		this.fineAmount = fineAmount;
		this.description = description;
		this.reader = reader;
		this.book = book;
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

	public int getFineAmount() {
		return fineAmount;
	}

	public void setFineAmount(int fineAmount) {
		this.fineAmount = fineAmount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	@Override
	public int compareTo(Fine o) {
		return this.id - o.getId();
	}
}

