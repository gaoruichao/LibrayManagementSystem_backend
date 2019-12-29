package domain;
import domain.BookType;
import util.IdService;
import java.io.Serializable;
public class Book implements Comparable<Book>, Serializable {
    {
        this.id = IdService.getId();
    }
    public Book() {
    }

    public Book(int id, String no, String isbn, String bookName, String author, String publish, String publishDate, int unitPrice, BookType bookType, int bookStatus) {
        this(no,isbn,bookName,author,publish,publishDate,unitPrice,bookType,bookStatus);
        this.id = id;
    }

    public Book(String no, String isbn, String bookName, String author, String publish, String publishDate, int unitPrice, BookType bookType, int bookStatus) {
        this.no = no;
        this.isbn = isbn;
        this.bookName = bookName;
        this.author = author;
        this.publish = publish;
        this.publishDate = publishDate;
        this.unitPrice = unitPrice;
        this.bookType = bookType;
        this.bookStatus = bookStatus;
    }

    public int getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(int bookStatus) {
        this.bookStatus = bookStatus;
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

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublish() {
        return publish;
    }

    public void setPublish(String publish) {
        this.publish = publish;
    }

    public String getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(String publishDate) {
        this.publishDate = publishDate;
    }

    public int getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public BookType getBookType() {
        return bookType;
    }

    public void setBookType(BookType bookType) {
        this.bookType = bookType;
    }

    private int id;
    private String no;
    private String isbn;
    private String bookName;
    private String author;
    private String publish;
    private String publishDate;
    private int unitPrice;
    private BookType bookType;
    //为1则表示可借，为0不可借
    private int bookStatus;

    @Override
    public int compareTo(Book o) {
        return this.id - o.getId();
    }
}