import { useState } from 'react'
import Contexto from './Contexto'

const relacion=[{id:1,nombre:'pera',precio:23},
{id:2,nombre:'manzana',precio:14},{id:3,nombre:'naranja',precio:9},
{id:4,nombre:'fresa',precio:28},{id:5,nombre:'sandía',precio:7},
{id:6,nombre:'melon',precio:11},{numero:0}]

const Provider=function({children}){

    const [frutas,setFrutas]=useState(relacion)
    return(
        <Contexto.Provider value={{frutas,setFrutas}}>
            {children}
        </Contexto.Provider>
    )


}
export default Provider