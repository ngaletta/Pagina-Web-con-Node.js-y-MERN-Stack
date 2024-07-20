import { useEffect, useState } from "react";
import { useGetAllTragosQuery } from "../store/service/tragos";
import TragosContainer from "../components/tragos/TragosContainer";

const MenuTragos = () => {
    const {data, isError, isLoading} = useGetAllTragosQuery();

    if (isLoading) {
        return <h1>Cargando Tragos...</h1>
    }

    if (isError) {
        return <h1>Error al cargar los Tragos</h1>
    }

    return (
        <>
        <h1>MENÚ DE TRAGOS</h1>
        <div className="trago">
           <TragosContainer/>
        </div>
        </>
    )
}

export default MenuTragos
