package com.example.main;

public class order {
    private long orderId;
    private long userId;
    private long itemId;

    public order(){

    }

    public order(long orderId, long userId, long itemId) {
        this.orderId = orderId;
        this.userId = userId;
        this.itemId = itemId;
    }

    public order(long userId, long itemId) {
        this.userId = userId;
        this.itemId = itemId;
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getItemId() {
        return itemId;
    }

    public void setItemId(long itemId) {
        this.itemId = itemId;
    }

    @Override
    public String toString() {
        return "order{" +
                "orderId=" + orderId +
                ", userId=" + userId +
                ", itemId=" + itemId +
                '}';
    }
}
