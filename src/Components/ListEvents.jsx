import React from 'react'

export default function ListEvents({listadoEventos}) {
    //hacemos referencia al estado (result) para obtener la informacion de los eventos
    const {result} = listadoEventos;

    return (
        //iteramos la informacion de la url, ya que la informacion la manejamos como arreglo en el estado
        result.map((evento, index) => {
            return (
                <div className="col-md-4 mt-4" key={index}>
                    <div className="card">
                        <h5 className="card-header">{evento.title}</h5>
                        <div className="card-body">
                            <img className="card-img-top" src={`${evento.thumbnail.path}.${evento.thumbnail.extension}`} alt="Comics Marvel" />
                            <a href={evento.urls[0].url} className="btn btn-success">Ir al Evento</a>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
