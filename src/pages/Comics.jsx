import React from 'react'
import useFetch from '../hooks/useFetch'
import ListComics from '../Components/ListComics'

export default function Comics() {
    /**
     * Para utilizar variables de entorno, accedemos a travez de process.env.NOMBRE_DE_LA_VARIABLE
     * 
     * Llamamos la funcion useFetch() y le asignamos la url para acceder a la informacion de comics
     */
    const listComics = useFetch(`${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_MARVEL}`);

    return (
        <div className='container'>
            <h1 className='titulo'>Comics Marvel</h1>
            <div className='row'>
                <ListComics listComics={listComics} />
            </div>
        </div>
    )
}
