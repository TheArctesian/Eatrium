import React from "react";
import Items from "./items";

const menu = () => {
    return (
        <div>
            <h1 className="subpixel-antialiased text-7xl font-extrabold tracking-wide text-center bg-grey rounded-bl-lg rounded-br-lg bg-yellow-300 p-10">
                Menu
            </h1>
            <Items />
        </div>
    );
};

export default menu;
