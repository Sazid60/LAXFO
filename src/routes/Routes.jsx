import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductPage from "../pages/productPage/ProductPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import CartPage from "../pages/cartPage/CartPage";

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
                path: "/cartPage",
                element:<CartPage/> ,
            },
        ]
    },
]);

export default router;