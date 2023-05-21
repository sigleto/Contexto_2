import React,{useContext} from "react";
import Contexto from './Contexto/Contexto'
import Provider from './Contexto/Provider'
function Orden({}){
const {setFrutas}=useContext(Contexto)
const {frutas}=useContext(Contexto)

const primero=()=>{setFrutas(frutas.map((item,index)=>index==6 
    ? {...item,numero:1} :{...item}))}
const segundo=()=>{setFrutas(frutas.map((item,index)=>index==6 
? {...item,numero:2} :{...item}))};
const tercero=()=>{setFrutas(frutas.map((item,index)=>index==6 
? {...item,numero:3} :{...item}))};

return(
    <>
    <button onClick={primero}>PRIMERO</button>
    <button onClick={segundo}>SEGUNDO</button>
    <button onClick={tercero}>TERCERO</button>
    </>
)

}
export default Orden