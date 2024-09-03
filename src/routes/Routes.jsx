import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductPage from "../pages/productPage/ProductPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ShopPage from "../pages/shopPage/ShopPage";
import PrescriptionPage from "../pages/prescriptionPage/PrescriptionPage";
import BookTherapyPage from "../pages/bookThrapyPage/BookTherapyPage";
import BlogPage from "../pages/blogPage/BlogPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <ProductPage />,
            },
            {
                path: "/shop",
                element:<ShopPage/> ,
            },
            {
                path: "/prescription",
                element:<PrescriptionPage/> ,
            },
            {
                path: "/book",
                element:<BookTherapyPage/> ,
            },
            {
                path: "/blog",
                element:<BlogPage/> ,
            },
        ]
    },
]);

export default router;