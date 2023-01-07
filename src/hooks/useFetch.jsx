import { useState, useEffect } from "react";

//esta funcion obtendra las url de la informacion que saquemos de la api de MARVEL, por lo tanto
//asignamos un parametro url, para reutilizar la misma funcion para todas las url que saquemos de la api
export default function useFetch(url){

    //creando el estado para la informacion de la api de marvel
    const [result, setResult] = useState([]);

    useEffect(() => {
        (async () => {
            //validamos la informacion de la url y hacemos la peticion mediante fetch
            try{
                const respuesta = await fetch(url);
                const datos = await respuesta.json();
                setResult(datos.data.results);
            }catch(error){
                console.log(error);
            }
        })();
    }, [url])

    return {result}
}