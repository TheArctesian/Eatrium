import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { injected } from "../web3/Wallet/walletConnect";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
type User = {
    id: string;
    account: string;
};
const Navbar = () => {
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    async function connect() {
        try {
            await activate(injected);
            console.log("connected");
        } catch (ex) {
            console.log(ex);
        }
        addUser();
    }
    async function addUser() {
        console.log(account);
        axios.post("http://localhost:8080/api/user/addUserItem", {
            address: account
        });
    }
    return (
        <nav className="subpixel-antialiased tracking-normal mx-2   text-center bg-grey rounded-bl-3xl rounded-br-lg bg-yellow-300 p-4">
            <ul className="bg-yellow-300">
                <li className="list-none bg-yellow-300 ">
                    <NavLink to="/">
                        <svg
                            className="w-24 h-24 bg-yellow-300 "
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z" />
                        </svg>
                    </NavLink>
                </li>
                <li className="list-none  bg-yellow-300">
                    <NavLink to="/cart">
                        <svg
                            className="w-24 h-24 bg-yellow-300 "
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
                        </svg>
                    </NavLink>
                </li>
                <li className="bg-yellow-300 ">
                    <button onClick={connect} className="bg-yellow-300 mt-8">
                        {active ? (
                            <span
                                className=" text-xs font-bold bg-yellow-300 hover:bg-yellow-500 p-3 "
                                id="metamask"
                            >
                                {account}
                            </span>
                        ) : (
                            <span
                                className=" font-bold bg-yellow-300 hover:bg-yellow-500 p-5  "
                                id="metamask"
                            >
                                Connect with MetaMask
                            </span>
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
