import React, { useContext } from 'react'
import { usuarioContext } from '../App'


export default function Hijo() {
const usuario = useContext(usuarioContext);
  return (
    <div>
        <h1>Saludo desde un hijo context</h1>
        {usuario && <p>¿Que tal estas {usuario.nombre}?</p>}
    </div>
  )
}
