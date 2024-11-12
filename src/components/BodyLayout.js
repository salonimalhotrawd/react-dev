import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resturantDataList from "../utils/mockData";
import ResturantCardLayout from "./ResturantCardLayout";
import NoResturantDataFoundLayout from "./NoResturantDataFoundLayout";
import ShimmerCompLayout from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const BodyLayout = () => {
    // Normal JS variable
    // let listofResturants = [];


    //Local State Variable - Superpowerful Variable
    const [listofResturants, setListofResturants] = useState([]);
    const [filteredListofResturants, setfilteredListofResturants] = useState([]);
    const [isAPICalled, setIsAPICalled] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [resSearchText, setResSearchText] = useState('');

    console.log("Body Component renders");

    /**
     * Whenever the state local variables updates, react triggers a reconcillation cycle(re-rendering the components)
     */

    //As soon as the body component rendered then the useEffect hooks called
    useEffect(() => {
        fetchResturantsData();
    }, []);

    const fetchResturantsData = async () => {
        setIsAPICalled(true);
        const resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.877874&lng=75.7800259&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const jsonResponse = await resData.json();

        jsonResponse?.data?.cards?.splice(0, 3);
        const apiFetchSmallData = jsonResponse?.data?.cards;
        setListofResturants(apiFetchSmallData);
        setfilteredListofResturants(apiFetchSmallData);
        setIsAPICalled(false);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
        <h4>Looks Like you have an unstable Internet Connection. Please check again !!</h4>
    )

    //Shimmer UI When Data is Called
    return isAPICalled ? <ShimmerCompLayout /> : (listofResturants?.length === 0 ? <NoResturantDataFoundLayout /> : (
        <div className="body-container">
            <div className="filter-section">
                <div className="search-scn">
                    <input className="search-input" type="text" placeholder="search Resturants" value={resSearchText} onChange={
                        (e) => {
                            setResSearchText(e.target.value);
                        }
                    } />
                    <button className="search-btn" onClick={
                        () => {
                            //Filter the resturant List based on the input data
                            const filteredSearchRes = listofResturants.filter(res => res?.card?.card?.info.name.toLowerCase().trim('').includes(resSearchText?.toLowerCase().trim('')));
                            setfilteredListofResturants(filteredSearchRes);
                            setIsDisabled(false);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={
                        () => {
                            const filteredList = listofResturants.filter(res => res?.card?.card?.info.avgRating > 4.5);
                            setfilteredListofResturants(filteredList);
                            setIsDisabled(false);
                        }
                    }>Top Rated Resturant</button>
                <button className="filter-btn" disabled={isDisabled} onClick={
                    () => {
                        setfilteredListofResturants(listofResturants);
                        setResSearchText('');
                        setIsDisabled(true);
                    }
                }>Clear Filters</button>
                <div className="res-count">Total Resturant Count: {filteredListofResturants.length}</div>
            </div>
            {/* Dont use indexes as key for unique property as its a bad practice.
            Use array uniqueId as key property */}
            <div className="resturant-body">
                {
                    filteredListofResturants.map((resturant) =>
                        <Link className="body" key={resturant?.card?.card?.info?.id} to={"res-menu/" + resturant?.card?.card?.info?.id}><ResturantCardLayout resData={resturant?.card?.card?.info} /></Link>
                    )
                }
            </div>
        </div>
    ))
};

export default BodyLayout;