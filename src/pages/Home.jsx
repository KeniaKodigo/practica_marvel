import React from 'react'
import Events from '../Components/Events'
import Principal from '../Components/Principal'

export default function Home() {
    /** en este componente llamamos los componentes Principal y Events, para que sea la pagina 
     * principal del sitio web
     */
    return (
        <div>
            <Principal />
            <Events />
        </div>
    )
}
