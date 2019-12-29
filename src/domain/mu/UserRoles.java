package domain.mu;
import java.util.Collection;

public class UserRoles {
    private User adminUser ;

    private Collection<Role> roles;

    public User getAdminUser() {
        return adminUser;
    }

    public void setAdminUser(User adminUser) {
        this.adminUser = adminUser;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public UserRoles(User adminUser, Collection<Role> roles) {
        this.adminUser = adminUser;
        this.roles = roles;
    }
}
