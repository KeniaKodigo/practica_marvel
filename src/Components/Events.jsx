import React from 'react'
import useFetch from '../hooks/useFetch'
import ListEvents from './ListEvents';

export default function Events() {
    /**
     * Para utilizar variables de entorno, accedemos a travez de process.env.NOMBRE_DE_LA_VARIABLE
     * 
     * Llamamos la funcion useFetch() y le asignamos la url para acceder a la informacion de eventos
     */
    const listEvents = useFetch(`${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_MARVEL}`);

    return (
        <div className='principal'>
            <div className='container'>
                <h1 className='text-center text-white'>Ultimos Eventos</h1>
                <div className='row'>
                    <ListEvents listadoEventos={listEvents} />
                </div>
            </div>
        </div>
    )
}
