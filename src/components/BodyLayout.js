import ResturantCardLayout from "./ResturantCardLayout";
import NoResturantDataFoundLayout from "./NoResturantDataFoundLayout";
import resturantDataList from "../utils/mockData";
import { useState } from "react";


const BodyLayout = () => {
    // Normal JS variable
    // let listofResturants = [];

    //Local State Variable - Superpowerful Variable
    const [listofResturants, setListofResturants] = useState(resturantDataList);
    return (
        <div className="body-container">

            <div className="filter-section">
                <button className="filter-btn"
                    onClick={
                        () => {
                            const filteredList = listofResturants.filter(res => res.info.avgRating > 4.5);
                            setListofResturants(filteredList);
                        }
                    }>Top Rated Resturant</button>
            </div>
            {/* Dont use indexes as key for unique property as its a bad practice.
            Use array uniqueId as key property */}
            <div className="resturant-body">
                {
                    listofResturants?.length > 0 ? listofResturants.map((resturant) => <ResturantCardLayout key={resturant?.info?.id} resData={resturant} />) : <NoResturantDataFoundLayout />
                }
            </div>
        </div>
    )
};


export default BodyLayout;