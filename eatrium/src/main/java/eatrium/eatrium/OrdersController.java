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
@RequestMapping("/api/orders")
public class OrdersController {
    @Autowired
    private OrdersRepository ordersRepository; //init order repository

    @GetMapping("/")
    public List<Orders> getAllOrders() { //get all orders
        return ordersRepository.findAll();
    }

    @GetMapping("/{OrderId}")
    public Orders getOrdersById(@PathVariable String OrderId) {     //get order by id
        return ordersRepository.findById(OrderId).orElse(null);
    }

    @PostMapping(value="/addOrdersItem")
    public Orders postOrders(@RequestBody Orders Orders) { // add orders
        return ordersRepository.save(Orders);
    }

    @PutMapping(value="/{OrderId}")
    public Orders putOrders(@RequestBody Orders Orders) { // putt orders
        Orders oldOrders = ordersRepository.findById(Orders.getOrderId()).orElse(null);
        oldOrders.setUserId(Orders.getUserId());
        oldOrders.setItemId(Orders.getItemId());
        oldOrders.setIsPaid(Orders.getIsPaid());
        ordersRepository.save(oldOrders);

        return oldOrders;
    }

    @DeleteMapping(value="/{OrderId}")
    public String deleteOrders(@PathVariable String OrderId) { // delete order
        ordersRepository.deleteById(OrderId);
        return "Deleted" + OrderId;
    }
}
