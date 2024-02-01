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
        path: "/trabajos",
        element: <Trabajos/>
    },

    {
        path: "/trabajosMecanic",
        element: < TrabajosMecanic/>
    },
    {
        path: "/statusTrabajo",
        element: <StatusTrabajo/>
    },
    {
        path: "/boton",
        element: <BotonFinal/>
    },

    {
        path: "/costo",
        element: <Costos/>
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