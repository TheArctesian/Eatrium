package com.model;

@Entity
@Table(name = "menu_item")
public class menuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long itemId;

    @Column( name = "name")
    private String itemName;
    @Column( name = "description")
    private String itemDescription;
    @Column( name = "price")
    private double itemPrice;
    @Column( name = "type")
    private String itemType;

    public menuItem(){

    }

    public menuItem(long itemId,
                    String itemName,
                    String itemDescription,
                    double itemPrice,
                    String itemType) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
    }

    public menuItem(String itemName,
                    String itemDescription,
                    double itemPrice,
                    String itemType) {
        super();
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.itemType = itemType;
    }

    public long getItemId() {return itemId;}

    public void setItemId(long itemId) {this.itemId = itemId;}

    public String getItemName() {return itemName;}

    public void setItemName(String itemName) {this.itemName = itemName;}

    public String getItemDescription() {return itemDescription;}

    public void setItemDescription(String itemDescription) {this.itemDescription = itemDescription;}

    public double getItemPrice() {return itemPrice;}

    public void setItemPrice(double itemPrice) {this.itemPrice = itemPrice;}

    public String getItemType() {return itemType;}

    public void setItemType(String itemType) {this.itemType = itemType;}

    @Override
    public String toString() {
        return "menuItem{" +
                "itemId=" + itemId +
                ", itemName='" + itemName + '\'' +
                ", itemDescription='" + itemDescription + '\'' +
                ", itemPrice=" + itemPrice +
                ", itemType='" + itemType + '\'' +
                '}';
    }
}
