package domain.mu;


import java.util.Objects;

/**
 * <!-- begin-user-doc -->
 * <!--  end-user-doc  -->
 * @generated
 */

public class Menu
{
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Menu menu = (Menu) o;
		return id == menu.id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	public Menu(int id, String description, boolean checked, String url) {
		this.id = id;
		this.description = description;
		this.checked = checked;
		this.url = url;
	}

	public Menu(String description, boolean checked, String url) {
		this.description = description;
		this.checked = checked;
		this.url = url;
	}

	public Menu(int id, String description, String url) {
		this.id = id;
		this.description = description;
		this.url = url;
	}

	public int id;
	public String description;
	public boolean checked;
	public String url;

	public boolean isChecked() {
		return checked;
	}
	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public Menu(){
		super();
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public String getRoute() {
		return url;
	}

	public void setRoute(String url) {
		this.url = url;
	}
}

