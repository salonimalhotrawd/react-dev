import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";
const useResturantMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchResturantMenu();
    }, []);

    fetchResturantMenu = async () => {
        const apiUrl = MENU_API_URL + resId;
        const resData = await fetch(apiUrl);

        const jsonResponse = await resData.json();
        setResMenu(jsonResponse?.data);
    };

    return resMenu;
}

export default useResturantMenu;