import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderLayout from "./components/HeaderLayout";
import BodyLayout from "./components/BodyLayout";
import AboutUsLayout from "./components/AboutUsLayout";
import ContactUsLayout from "./components/ContactUsLayout";
import NoRouteLayout from "./components/NoRouteLayout";
import ResturantMenuLayout from "./components/ResturantMenuLayout";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderLayout />
      {/** Outlet basically replace the component according to the route */}
      <Outlet />
    </div>
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
    ],
    errorElement: <NoRouteLayout />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);