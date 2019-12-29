package domain;
import util.IdService;
import java.io.Serializable;
public class BookType implements
		Comparable<BookType>, Serializable {
	private Integer id ;
	private String no;
	private String typeName;
	{
		this.id = IdService.getId();
	}
	public BookType(Integer id, String no, String typeName) {
		this(no, typeName);
		this.id = id;
	}
	public BookType(String no, String typeName) {
		super();
		this.no = no;
		this.typeName = typeName;
	}

	public String getNo() {
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}




	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final BookType other = (BookType) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}


	/**
	 * Constructs a <code>String</code> with all attributes
	 * in name = value format.
	 *
	 * @return a <code>String</code> representation
	 * of this object.
	 */
	public String toString()
	{
		final String TAB = "    ";

		String retValue = "";

		retValue = "BookType ( "
				+ super.toString() + TAB
				+ "id = " + this.id + TAB
				+ "typeName = " + this.typeName + TAB
				+ " )";

		return retValue;
	}
@Override
	public int compareTo(BookType o) {
		return this.id - o.getId();
	}
}
