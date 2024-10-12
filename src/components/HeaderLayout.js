import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderLayout = () => {
    //Powerful State Variable
    const [headerBtnReact, setBtnName] = useState("Login");

    //Everytime the react state variables change, Whole Header Components re-render
    //Basically when we call setBtnName it will change the headerBtnReact with the new 
    //value and renders the header component. It will find the div and compare it with the 
    //previous version i.e old virtual version wid the new version nd see the diff. That is why
    //it only change the header btn

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="lgn-btn" onClick = {
                        () => {
                            headerBtnReact === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }
                    }>{headerBtnReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default HeaderLayout;

