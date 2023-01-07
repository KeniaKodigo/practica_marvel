import React from 'react'

export default function ListSeries({listado}) {
    //hacemos referencia al estado (result) para obtener la informacion de las series
    const {result} = listado;

    return (
        //iteramos la informacion de la url, ya que la informacion la manejamos como arreglo en el estado
        result.map((serie, index) => {
            return (
                <div className="col-md-4 mt-4" key={index}>
                    <div className="card">
                        <h5 className="card-header">{serie.title}</h5>
                        <div className="card-body">
                            <img className="card-img-top" src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`} alt="Series Marvel" />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
