package domain.mu;


import java.util.Objects;

public class Role
{
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Role role = (Role) o;
		return id == role.id;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	private int id;
	private boolean checked;

	public Role(int id, boolean checked, String description) {
		this.id = id;
		this.checked = checked;
		this.description = description;
	}

	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}

