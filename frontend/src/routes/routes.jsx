import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TiposTrabajos from "../pages/tiposTrabajos";
import Trabajos from "../pages/Trabajos";
import StatusTrabajo from "../pages/StatusTrabajo";
import Costos from "../components/Costos";
import BotonFinal from "../components/BotonFinal";
import Login from "../pages/login";
import Registrar from "../pages/registrar";
import TablaUsers from "../pages/admin/tablaUsers";
import TablaCategoriasMateriales from "../pages/admin/tablaCategorias_materiales";
import TablaTiposTrabajos from "../pages/admin/tablaTipos_trabajos";
import TablaMateriales from "../pages/admin/tablaMateriales";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/tipos_trabajos",
        element: <TiposTrabajos />
    },

    {
        path: "/trabajos/:tipoTrabajoId", // Utilizando un parámetro para el ID del tipo de trabajo
        element: <Trabajos />
    }
    ,
    {
        path: "/statusTrabajo/:id",
        element: <StatusTrabajo />
    },
    {
        path: "/boton",
        element: <BotonFinal />
    },

    {
        path: "/costo",
        element: <Costos />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registro",
        element: <Registrar />
    },
    {
        path: "/tablaUsuarios",
        element: <TablaUsers/>
    },
    {
        path: "/tablaCategoriasMateriales",
        element: <TablaCategoriasMateriales/>
    },
    {
        path: "/tablaTiposTrabajos",
        element: <TablaTiposTrabajos/>
    },
    {
        path: "/tablaMateriales",
        element: <TablaMateriales/>
    },
    {
        path: "*",
        element: <h1>ERROR, NO EXISTE LA PAGINA</h1>

    }
])