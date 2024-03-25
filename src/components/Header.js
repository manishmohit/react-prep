import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utils/useOnLineStatus"

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login")
    const onLineStatus = useOnLineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: { onLineStatus ? "☑️" : "❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contactUs">Contact US</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <button
                        className="login"
                        onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
