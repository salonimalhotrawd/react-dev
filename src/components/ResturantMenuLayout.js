import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import ShimmerCompLayout from "./Shimmer";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategoryLayout from "./ResturantCategoryLayout";
import { useState } from "react";

const ResturantMenuLayout = () => {

    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();

    const resMenu = useResturantMenu(resId);

    if (resMenu === null) return <ShimmerCompLayout />;

    //Destructing the Array
    const { text } = resMenu?.cards[0]?.card?.card;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

    const categoriesFilter = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (cd) => cd?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    return (
        <div className="res-menu">
            <h1>{text}</h1>
            {categoriesFilter.map((cat, index) => 
                <ResturantCategoryLayout 
                   key={index} 
                   res={cat?.card?.card}
                   showCatItems={index === showIndex ? true : false}
                   callSetShowIndex={() => setShowIndex(index)}/>
            )}
        </div>
    )
};

export default ResturantMenuLayout;