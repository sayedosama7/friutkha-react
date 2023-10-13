import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import About from "./Pages/About";
import Sale from "./Pages/Sale";
import Shop from "./Pages/Shop";
import News from "./Pages/News";
import Footer from "./Pages/Footer";
import App from "./App";
import Search from "./Pages/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "news",
        element: <News />,
    },
    {
        path: "contact",
        element: <Footer />,
    },
    {
        path: "sale",
        element: <Sale />,
    },
    {
        path: "search",
        element: <Search />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

