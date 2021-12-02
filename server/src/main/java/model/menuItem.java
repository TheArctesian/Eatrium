package model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collation = "menuItem")
public class menuItem {
    @Id
    Long itemID;
    String itemName;
    String description;
    int itemPrice;

    public menuItem() {

    }

    public menuItem(String itemName, String description, int itemPrice) {
        super();
        this.itemName = itemName;
        this.description = description;
        this.itemPrice = itemPrice;
    }

    public menuItem(Long itemID, String itemName, String description, int itemPrice) {
        this.itemID = itemID;
        this.itemName = itemName;
        this.description = description;
        this.itemPrice = itemPrice;
    }

    public Long getItemID() {
        return itemID;
    }

    public void setItemID(Long itemID) {
        this.itemID = itemID;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(int itemPrice) {
        this.itemPrice = itemPrice;
    }

    @Override
    public String toString() {
        return "menuItem{" +
                "itemID=" + itemID +
                ", itemName='" + itemName + '\'' +
                ", description='" + description + '\'' +
                ", itemPrice=" + itemPrice +
                '}';
    }
}