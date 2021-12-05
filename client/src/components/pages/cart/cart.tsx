import axios from "axios";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
type Order = {
    isPaid: boolean;
    itemName: string;
    orderId: string;
    price: number;
    userAddress: string;
};

const fetch = "http://localhost:8080/api/orders/";

export default function Cart() {
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchData = async () => {
        // fetch data
        const { data } = await axios.get(fetch);
        console.log(data);
        setOrders(data);
    };

    useEffect(() => {
        // fetch data on load
        fetchData();
    }, []);

    // update order status
    async function updateOrder(orderId: string, status: boolean) {
        const { data } = await axios.put(fetch + orderId, {
            Status: true
        });
        console.log(data);
        fetchData();
    }

    //dekete order
    async function deleteOrder(orderId: string) {
        console.log(orderId);
        const { data } = await axios.delete(fetch + orderId);
        console.log(data);
        fetchData();
    }
    // send transaction using ethers
    async function sendTransaction() {
        const provider = new ethers.providers.JsonRpcProvider(
            "http://localhost:7545"
        );
        const signer = provider.getSigner();
        //send transaction
        const tx = await signer.sendTransaction({
            to: "0x206BcCF64aB61A0Bd90F97732625815aDe3AbD33",
            value: ethers.utils.parseEther("0.1")
        });
        console.log(tx);
    }
    //transaction params
    return (
        <div>
            <h1 className="subpixel-antialiased text-base  text-center bg-grey  bg-blue-500 p-2">
                {account}'s Cart
            </h1>
            <div className="table-auto mx-80 p-12">
                <thead className="w-10/12 items-center">
                    <tr>
                        <th className="px-4 py-2">Item</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>

                {orders.map((order) => (
                    <tr>
                        <td className="border px-4 py-2 w-30 ">
                            {order.itemName}
                        </td>
                        <td className="border px-4 py-2">{order.price}</td>
                        <td className="border px-4 py-2">
                            {order.isPaid ? "Paid" : "Not Paid"}
                        </td>

                        <td>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => deleteOrder(order.orderId)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </div>

            <button
                onClick={sendTransaction}
                className="mx-96 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Checkout
            </button>
            <br />
            <br />
        </div>
    );
}
