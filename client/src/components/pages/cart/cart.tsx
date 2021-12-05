import axios from "axios";
import React, { useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
type OrderType = {
    isPaid: boolean;
    itemId: string;
    orderId: string;
    userId: string;
};

type ItemType = {
    description: string;
    image: string;
    ItemId: string;
    name: string;
    price: number;
};

type OrderList = {
    Order: string;
    OrderId: string;
    UserId: string;
    Price: number;
    Status: boolean;
};

const fetch = "http://localhost:8080/api/api/orders/";

export default function cart() {
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    const [orders, setOrders] = useState<OrderType[]>([]); // order list
    const [orderList, setOrderList] = useState<OrderList[]>([]); // order list for display
    const [items, setItems] = useState<ItemType[]>([]); // items
    const fetchData = async () => {
        // fetch data
        const { data } = await axios.get(fetch);
        console.log(data);
        setOrders(data);
        getItems(data);
    };
    React.useEffect(() => {
        // fetch data on load
        fetchData();
    }, []);

    async function getItems(data: any) {
        // get items
        const { data: data2 } = await axios.get(
            "http://localhost:8080/api/api/menu/" + data[0].ItemId
        );
        console.log(data2);
        setItems(data2);
    }

    // remove one order from order list
    async function rmOrder(orderId: string) {
        const { data } = await axios.delete(fetch + orderId);
        console.log(data);
        fetchData();
    }

    // add order to order list
    async function addOrder(orderId: string) {
        const { data } = await axios.post(fetch, {
            OrderId: orderId,
            UserId: "",
            Price: 0,
            Status: false
        });
        console.log(data);
        fetchData();
    }

    // update order status
    async function updateOrder(orderId: string, status: boolean) {
        const { data } = await axios.put(fetch + orderId, {
            OrderId: orderId,
            UserId: "",
            Price: 0,
            Status: status
        });
        console.log(data);
        fetchData();
    }
    // send transaction using ethers
    async function sendTransaction() {
        const provider = new ethers.providers.JsonRpcProvider(
            "http://localhost:8545"
        );
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction(transactionParams);
        console.log(tx);
        updateOrder(tx.hash, true); //update to tx hash so can view forever
    }
    //transaction params
    const transactionParams = {
        to: "0x206BcCF64aB61A0Bd90F97732625815aDe3AbD332",
        value: ethers.utils.parseEther("0.01"),
        gasLimit: 2000000,
        gasPrice: ethers.utils.parseUnits("10", "gwei")
    };
    return (
        <div>
            <h1 className="subpixel-antialiased text-base  text-center bg-grey  bg-blue-500 p-2">
                {account}'s Cart
            </h1>
            <div className="table-auto">
                <thead>
                    {" "}
                    <tr>
                        <th>Order</th>
                        <th>OrderID</th>
                        <th>Account</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                {orderList.map((order) => (
                    <tr>
                        <td>{order.Order}</td>
                        <td>{order.OrderId}</td>
                        <td>{order.UserId}</td>
                        <td>{order.Status ? "Paid" : "Not Paid"}</td>
                        <td>
                            <button onClick={() => rmOrder(order.OrderId)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </div>

            <button
                onClick={sendTransaction}
                className="mx-20 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Checkout
            </button>
        </div>
    );
}

function setOrderList(data: any) {
    throw new Error("Function not implemented.");
}
