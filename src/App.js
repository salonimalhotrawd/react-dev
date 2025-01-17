import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import BodyLayout from "./components/BodyLayout";
import AboutUsLayout from "./components/AboutUsLayout";
import ContactUsLayout from "./components/ContactUsLayout";
import NoRouteLayout from "./components/NoRouteLayout";
import ResturantMenuLayout from "./components/ResturantMenuLayout";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

//Dynamic Bundling
//Code-Splitting
// Lazy Loading
//Chunking
//Dynamic Import

const Grocery = React.lazy(() => import("../src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Saloni Dogra"
    };
    setUserName(data.name);
  },[]);

  // We can UserContext as a whole application or we can wrap the particular section

  return (
    /*before the UserContext value is Default value*/
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/*After this the value of UserContext is Saloni Dogra*/}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "Anmol Dogra" }}> */}
          {/*After this the value of UserContext is Saloni Dogra*/}
          <HeaderLayout />
        {/* </UserContext.Provider> */}
        {/** Outlet basically replace the component according to the route */}
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

/**
 * React Router Implementation
 */
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", element: <BodyLayout />
      },
      {
        path: "/about-us", element: <AboutUsLayout />
      },
      {
        path: "/contact-us", element: <ContactUsLayout />
      },
      {
        path: "/res-menu/:resId", element: <ResturantMenuLayout />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>
      },
    ],
    errorElement: <NoRouteLayout />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);