// Importar React y el componente Card
import React from "react";
import Card from "./Card";

// Componente Home
const Home = ({ location }) => {
    // Obtener el nombre de usuario del estado de la ubicación
    const { state } = location;
    const UserName = state ? state.UserName : '';

    return (
        <div className="min-h-screen">
            <Card UserName={UserName} />
        </div>
    );
};

// Exportar el componente Home
export default Home;
