import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../login";
import Registrar from "../registrar";
import Trabajos from "../pages/Trabajos";
    
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/registro",
        element: <Registrar/>
    },
    {
        path: "/app",
        element: <App/>
    },
    {
        path: "/trabajos",
        element: <Trabajos/>
    },
    {
        path: "*",
        element: <h1>ERROR, NO EXISTE LA PAGINA</h1>

    }
])