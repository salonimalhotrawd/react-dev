import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="nav-items items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "Active" : "Not-Active"}</li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/">Cart</Link>
                    </li>
                    <button className="lgn-btn px-4" onClick={
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

