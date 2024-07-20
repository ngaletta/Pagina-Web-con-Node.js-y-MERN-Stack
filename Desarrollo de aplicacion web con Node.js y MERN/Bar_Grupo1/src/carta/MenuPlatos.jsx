import { useEffect, useState } from "react";
import { useGetAllPlatosQuery } from "../store/service/platos";

const MenuPlatos = () => {
    const {data, isError, isLoading} = useGetAllPlatosQuery();

    if (isLoading) {
        return <h1>Cargando Platos...</h1>
    }

    if (isError) {
        return <h1>Error al cargar los platos</h1>
    }

    return (
        <>
        <h1>MENÚ DE PLATOS</h1>
        <div className="plato">
           //TODO: ACA HAY QUE AGREGAR LOS PLATOS
        </div>
        </>
    )
}

export default MenuPlatos
