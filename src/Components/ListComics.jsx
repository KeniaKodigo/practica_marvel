import React from "react";

export default function ListComics({listComics}) {
    //hacemos referencia al estado (result) para obtener la informacion de los comics
    const {result} = listComics;

    return (
        //iteramos la informacion de la url, ya que la informacion la manejamos como arreglo en el estado
        result.map((comic, index) => {
            return (
                <div className="col-md-4 mt-4" key={index}>
                    <div className="card">
                        <h5 className="card-header">{comic.title}</h5>
                        <div className="card-body">
                            <img className="card-img-top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Comics Marvel" />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
