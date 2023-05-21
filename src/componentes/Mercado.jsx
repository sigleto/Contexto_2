import React,{useState,useContext} from "react";
import Contexto from '../Contexto/Contexto';


function Mercado(){

const {frutas}=useContext(Contexto)
const orden=frutas[6].numero
    return(
        <>
        <div>{frutas[orden].nombre}</div>
        <div>Pagas:{frutas[orden].precio}</div>
      
        </>
    )
}
export default Mercado