package util;



import domain.mu.Menu;
import domain.mu.Role;
import domain.mu.RoleMenus;
import domain.mu.UserRoles;

import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class RolesMenus {

    public static Collection<Menu> getDeleteMenus(RoleMenus roleMenus, Collection<Menu> oldMenus){
        Collection<Menu> newMenus = roleMenus.getMenus();
        Map<Integer,Integer> map = new HashMap<Integer, Integer>();
        HashSet<Menu> deleteMenus = new HashSet<Menu>();
        for(Menu menu:newMenus){
            if(menu.isChecked()){
                map.put(menu.getId(),1);
            }else {
                map.put(menu.getId(),2);
            }
        }
        for(Menu menu:oldMenus){
            if(map.get(menu.getId())==2&&menu.isChecked()){
                deleteMenus.add(menu);
            }
        }
        return  deleteMenus;
    }

    public static Collection<Role> getDeleteRoles(UserRoles adminUserRoles, Collection<Role> oldRoles){
        Collection<Role> newRoles = adminUserRoles.getRoles();
        Map<Integer,Integer> map = new HashMap<Integer, Integer>();
        HashSet<Role> deleteRoles = new HashSet<Role>();
        for(Role role:newRoles){
            if(role.isChecked()){
                map.put(role.getId(),1);
            }else {
                map.put(role.getId(),2);
            }
        }
        for(Role role:oldRoles){
            if(map.get(role.getId())==2&&role.isChecked()){
                deleteRoles.add(role);
            }
        }
        return  deleteRoles;
    }
    public static Collection<Role> getAddRoles(UserRoles userRoles, Collection<Role> oldRoles){
        Collection<Role> newRoles = userRoles.getRoles();
        Map<Integer,Integer> map = new HashMap<Integer, Integer>();
        HashSet<Role> addRoles = new HashSet<Role>();
        for(Role role:newRoles){
            if(role.isChecked()){
                map.put(role.getId(),1);
            }else {
                map.put(role.getId(),2);
            }
        }
        for(Role role:oldRoles){
            if(map.get(role.getId())==1&&!role.isChecked()){
                addRoles.add(role);
            }
        }
        return  addRoles;
    }

    public static Collection<Menu> getAddMenus(RoleMenus roleMenus, Collection<Menu> oldMenus){
        Collection<Menu> newMenus = roleMenus.getMenus();
        Map<Integer,Integer> map = new HashMap<Integer, Integer>();
        HashSet<Menu> addMenus = new HashSet<Menu>();
        for(Menu menu:newMenus){
            if(menu.isChecked()){
                map.put(menu.getId(),1);
            }else {
                map.put(menu.getId(),2);
            }
        }
        for(Menu menu:oldMenus){
            if(map.get(menu.getId())==1&&!menu.isChecked()){
                addMenus.add(menu);
            }
        }
        return  addMenus;
    }
    public static Collection<Role> createRoles(Collection<Role> allFalseRoles, Collection<Role> rightRoles){
        HashSet<Integer> check = new HashSet<Integer>();
        for(Object object:rightRoles){
            Role role = (Role) object;
            check.add(role.getId());
        }
        for(Object object:allFalseRoles){
            Role role = (Role)object;
            if(check.add(role.getId())){
                continue;
            }else {
                role.setChecked(true);
            }
        }
        return allFalseRoles;
    }
    public static Collection<Menu> createMenus(Collection<Menu> allFalseMenus, Collection<Menu> rightMenus){
        HashSet<Integer> check = new HashSet<Integer>();
        for(Object object:rightMenus){
            Menu menu = (Menu)object;
            check.add(menu.getId());
        }
        for(Object object:allFalseMenus){
            Menu menu = (Menu)object;
            if(check.add(menu.getId())){
                continue;
            }else {
                menu.setChecked(true);
            }
        }
        return allFalseMenus;
    }
}
