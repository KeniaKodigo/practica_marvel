import React from 'react'
/** importando una imagen, el nombre de marvel es lo que se utiliza para la ruta de la imagen */
import marvel from '../img/marvel.png'

export default function Principal() {
    /**
     * Creando el diseño para la pagina principal del sitio web
     */
    return (
        <div className='principal'>
            <div className='container contenido'>
                <section>
                    <h1 className='texto1'>Los mejores personajes de marvel de los que todo el mundo habla!</h1>
                    <h3 className='texto2'>¡Disfruta del mejor contenido!</h3>
                    <button className='btn btn-primary'>Ver todos los Personajes</button>
                </section>
                <section>
                    <img className='img-fluid' src={marvel} alt="Marvel APP" />
                </section>
            </div>
        </div>
    )
}
