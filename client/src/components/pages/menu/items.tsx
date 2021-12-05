//get items from axios
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useEffect, useState } from "react";

type ItemType = {
    description: string;
    image: string;
    ItemId: string;
    name: string;
    price: number;
};
type User = {
    id: string;
    userAddress: string;
};
type Order = {
    isPaid: boolean;
    itemName: string;
    orderId: string;
    price: number;
    userAddress: string;
};
const fetch = "http://localhost:8080/api/menu/";
export default function GetItems() {
    const [items, setItems] = useState<ItemType[]>([]);
    const { account } = useWeb3React();
    const fetchData = async () => {
        const { data } = await axios.get(fetch);
        console.log(data);
        setItems(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    //remove item from menu
    async function deleteItem(itemId: string) {
        console.log(itemId);
        const { data } = await axios.delete(fetch + itemId);
        console.log(data);
        fetchData();
    }

    async function postOrder(item: { name: any; price: any }) {
        if (account) {
            const { data } = await axios.post(
                "http://localhost:8080/api/orders/addOrdersItem",
                {
                    isPaid: false,
                    itemName: item.name,
                    price: item.price,
                    userAddress: account
                }
            );
            console.log(data);
        } else {
            alert("Please connect to Metamask");
        }
    }

    return (
        <div className="p-10 ">
            <div className="w-full lg:max-w-full lg:flex flex-row flex-wrap">
                {items.map((item) => (
                    <div key={item.ItemId} className="p-8">
                        <div className="rounded-xl border bg-blue-700 overflow-hidden w-80 ">
                            <div className="">
                                <img
                                    src={item.image}
                                    alt="item"
                                    className="object-fill w-full h-64"
                                />
                            </div>
                            <h1 className=" subpixel-antialiased text-xl font-extrabold tracking-wide text-center bg-blue-500 p-2">
                                {item.name}
                            </h1>
                            <p className="subpixel-antialiased text-base  text-center bg-grey  bg-blue-500 p-2">
                                {item.description}
                            </p>

                            <p className="subpixel-antialiased text-base font-extrabold tracking-wide text-center bg-grey bg-blue-500 p-1">
                                {item.price} Eth
                            </p>
                            <p>{item.ItemId}</p>
                            <div className="subpixel-antialiased bg-blue-500 p-4">
                                <button
                                    onClick={() => postOrder(item)}
                                    className="mx-20 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
