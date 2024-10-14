import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import ShimmerCompLayout from "./Shimmer";

const ResturantMenuLayout = () => {

    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        console.log('Resturant Menu Layout Called');
        fetchResturantMenu();
    }, []);

    fetchResturantMenu = async () => {
        const apiUrl = MENU_API_URL + resId;
        const resData = await fetch(apiUrl);

        const jsonResponse = await resData.json();
        setResMenu(jsonResponse?.data);
    };

    if (resMenu === null) return <ShimmerCompLayout />;

    //Destructing the Array
    const { text } = resMenu?.cards[0]?.card?.card;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    
    return (
        <div className="res-menu">
            <h1>{text}</h1>
            <h2>Menu</h2>
            <div className="menu-items">
                {
                    itemCards?.map((item) =>
                        <li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - Rs. {item?.card?.info?.price/100}
                        </li>)
                }
            </div>
        </div>
    )
};

export default ResturantMenuLayout;