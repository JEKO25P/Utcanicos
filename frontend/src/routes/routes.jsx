import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/navbar",
        element: <Navbar/>
    },
    {
        path: "/card",
        element: <Card/>
    },
    {
        path: "*",
        element: <h1>ERROR, NO EXISTE LA PAGINA</h1>

    }
])