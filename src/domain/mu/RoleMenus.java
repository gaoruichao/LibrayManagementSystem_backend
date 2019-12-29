package domain.mu;

import java.util.Collection;

public class RoleMenus {
    private int id;
    private Role role ;
    private Collection<Menu> menus;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Collection<Menu> getMenus() {
        return menus;
    }

    public void setMenus(Collection<Menu> menus) {
        this.menus = menus;
    }

    public RoleMenus(Role role, Collection<Menu> menus) {
        this.role = role;
        this.menus = menus;
    }
    public RoleMenus(int id, Role role, Collection<Menu> menus) {
        this.id = id;
        this.role = role;
        this.menus = menus;
    }
}
