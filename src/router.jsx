import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardHelper from "./pages/dashboard/dashboard.helper";
import { SiteListHelper } from "./pages/site";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DashboardHelper/>
    },
    {
        path:'/site/list',
        element: <SiteListHelper/>
    }
]);

function Routes() {
    return(
        <RouterProvider router={router}/>
    )
}

export default Routes;