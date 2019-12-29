package domain;

import util.IdService;

import java.io.Serializable;

public final class Manager extends Actor implements Comparable<Manager>,Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String no;
	private String name;
	{
		this.id = IdService.getId();
	}

	public Manager(Integer id,
				   String no,
				   String name) {
		this(no, name);
		this.id = id;
	}
	public Manager(String no,
				   String name) {
		this.no = no;
		this.name = name;
	}
	public String getNo(){
		return no;
	}
	public void setNo(String no) {
		this.no = no;
	}
	public int getId() {
		return id;
	}

	@Override
	public void setId(int id) {

	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	@Override
	public int compareTo(Manager o) {
		// TODO Auto-generated method stub
		return this.id-o.getId();
	}

	public String toString()
	{
	    final String TAB = "    ";
	    
	    String retValue = "";
	    
	    retValue = "Teacher ( "
	        + super.toString() + TAB
	        + "id = " + this.id + TAB
	        + "no = " + this.no + TAB
	        + "name = " + this.name + TAB
	        + " )";
	
	    return retValue;
	}

}
