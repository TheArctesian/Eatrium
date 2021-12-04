//get items from axios
import axios from "axios";
import { useEffect, useState } from "react";
type ItemType = {
    description: string;
    image: string;
    ItemId: string;
    name: string;
    price: number;
};
const fetch = "http://localhost:8080/api/menu/";
export default function GetItems() {
    const [items, setItems] = useState<ItemType[]>([]);
    const fetchData = async () => {
        const { data } = await axios.get(fetch);
        console.log(data);
        setItems(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="p-10 ">
            <div className="w-full lg:max-w-full lg:flex flex-row ">
                {items.map((item) => (
                    <div key={item.ItemId} className="p-8 ">
                        <div className="block shadow-md hover:shadow-xl rounded-xl bg-blue-700 overflow-hidden w-80 ">
                            <div className="">
                                <img
                                    src={item.image}
                                    alt="item"
                                    className="object-fill w-full h-64"
                                />
                            </div>
                            <h1 className="w-80 subpixel-antialiased text-xl font-extrabold tracking-wide text-center bg-blue-500 p-1">
                                {item.name}
                            </h1>
                            <p className="subpixel-antialiased text-base  text-center bg-grey  bg-blue-500 p-5">
                                {item.description}
                            </p>

                            <p className="subpixel-antialiased text-base font-extrabold tracking-wide text-center bg-grey bg-blue-500 p-1">
                                {item.price} Eth
                            </p>
                            <div className="subpixel-antialiased bg-blue-500 p-4">
                                <button className="mx-20 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
