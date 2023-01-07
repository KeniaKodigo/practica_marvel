import React from 'react'
import useFetch from '../hooks/useFetch'
import ListSeries from '../Components/ListSeries';

export default function Series() {
    /**
     * Para utilizar variables de entorno, accedemos a travez de process.env.NOMBRE_DE_LA_VARIABLE
     * 
     * Llamamos la funcion useFetch() y le asignamos la url para acceder a la informacion de series
     */
    const listSeries = useFetch(`${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_MARVEL}`);

    return (
        <div className='container'>
            <h1 className='titulo'>Series Marvel</h1>
            <div className='row'>
                <ListSeries listado={listSeries} />
            </div>
        </div>
    )
}
