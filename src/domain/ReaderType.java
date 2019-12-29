package domain;

import util.IdService;

import java.io.Serializable;

public class ReaderType implements Comparable<ReaderType>, Serializable {
	private Integer id;
	private String no;
	private String typeName;
	private Integer maxBorrowNum;
	private Integer limitDate;
	{
		this.id = IdService.getId();
	}
	public ReaderType(Integer id, String no,String typeName, Integer maxBorrowNum,
					 Integer limitDate) {
		this(no, typeName, maxBorrowNum,limitDate);
		this.id = id;
	}

	public ReaderType(String no ,String typeName, Integer  maxBorrowNum, Integer limitDate) {
		super();
		this.no = no;
		this.typeName = typeName;
		this.maxBorrowNum = maxBorrowNum;
		this.limitDate = limitDate;
	}

    public Integer getMaxBorrowNum() {
        return maxBorrowNum;
    }

    public void setMaxBorrowNum(Integer maxBorrowNum) {
        this.maxBorrowNum = maxBorrowNum;
    }

    public Integer getId() {
        return id;
    }

    public String getNo() {
        return no;
    }

    public String getTypeName() {
        return typeName;
    }

      public Integer getLimitDate() {
        return limitDate;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }


    public void setLimitDate(Integer limitDate) {
        this.limitDate = limitDate;
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
		final ReaderType other = (ReaderType) obj;
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
	public String toString() {
		final String TAB = "    ";

		String retValue = "";

		retValue = "ReaderType ( "
				+ super.toString() + TAB
				+ "id = " + this.id + TAB
				+ "typeName = " + this.typeName + TAB
				+ "maxBorrowNum = " + this.maxBorrowNum + TAB
				+ "limitDate = " + this.limitDate + TAB
				+ " )";

		return retValue;
	}

	@Override
	public int compareTo(ReaderType o) {
		return this.id - o.getId();
	}
}
