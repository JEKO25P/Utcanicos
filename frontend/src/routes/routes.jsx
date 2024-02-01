import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Trabajos from "../pages/Trabajos";
import TrabajosMecanic from "../pages/TrabajosMecanic";
import StatusTrabajo from "../pages/StatusTrabajo";
import Costos from "../components/Costos";
import BotonFinal from "../components/BotonFinal";


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
        path: "*",
        element: <h1>ERROR, NO EXISTE LA PAGINA</h1>

    }
])