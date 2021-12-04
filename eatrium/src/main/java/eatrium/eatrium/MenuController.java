package eatrium.eatrium;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@CrossOrigin
@RequestMapping("/api/menu")
public class MenuController {
    @Autowired
    private MenuRepository menuRepository; //init menu repository

    @GetMapping("/")
    public List<Menu> getAllMenu() { //get all menu
        return menuRepository.findAll();
    }

    @GetMapping("/{ItemId}")
    public Menu getMenuById(@PathVariable String ItemId) { //get menu by id
        return menuRepository.findById(ItemId).orElse(null);
    }

    @PostMapping(value="/addMenuItem")
    public Menu postMenu(@RequestBody Menu menu) { //add menu
        return menuRepository.save(menu);
    }

    @PutMapping(value="/{ItemId}")
    public Menu putMenu(@RequestBody Menu menu) { //update menu
        Menu oldMenu = menuRepository.findById(menu.getItemId()).orElse(null);  //get old menu
        oldMenu.setName(menu.getName());
        oldMenu.setPrice(menu.getPrice());
        oldMenu.setDescription(menu.getDescription());
        oldMenu.setImage(menu.getImage());
        menuRepository.save(oldMenu);
        return oldMenu;
    }

    @DeleteMapping(value="/{ItemId}") // delete menu
    public String deleteMenu(@PathVariable String ItemId) {
        menuRepository.deleteById(ItemId);
        return "Deleted" + ItemId;
    }
}
