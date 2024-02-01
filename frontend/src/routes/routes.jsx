import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Login from "../login";
import Registrar from "../registrar";

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
        path: "/login",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Registrar/>
    },
    {
        path: "*",
        element: <h1>ERROR, NO EXISTE LA PAGINA</h1>

    }
])