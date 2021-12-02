package api.service;

import model.menuItem;

import java.util.List;

public interface menuService {
    List<menuItem> getMenuList();

    menuItem getMenuItem(Long id);

    void addMenuItem(menuItem item);

    void updateMenuItem(menuItem item);

    void deleteMenuItem(String name);

    menuItem getMenuItemById(int id);

}
