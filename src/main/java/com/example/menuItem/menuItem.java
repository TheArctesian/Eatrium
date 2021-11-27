package com.example.menuItem;

public class menuItem {
    private long itemId;
    private String itemName;
    private String itemDescription;
    private double itemPrice;
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
