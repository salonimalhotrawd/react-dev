import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from './Grocery';

const HeaderLayout = () => {
    /**
     * !! Everytime the react state variables change, Whole Header Components re-render
     * Basically when we call setBtnName it will change the headerBtnReact with the new 
     * value and renders the header component. It will find the div and compare it with the 
     * previous version i.e old virtual version wid the new version nd see the diff. That is why
     * it only change the header btn
     */

    //Powerful State Variable
    const [headerBtnReact, setBtnName] = useState("Login");

    console.log("Header-re-render");

    /**
     * !!pt1- if there is no dependency array => useEffect is called on every component Render
     * !!pt2- if the dependecy array is empty [] => useEffect is called on initial component Render(Just once)
     * !!pt3- if there is anything in the dependency array => useEffect will call everytime when the dependcy is updated
     * !!forEx - if i pass headerBtnReact as a dependency in the useEffect then everytime headerBtnReact value is updated then useEffect is called
     */

    useEffect(() => {
        console.log("UseEffect Called");
    }, []);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "Active" : "Not-Active"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <button className="lgn-btn" onClick={
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

