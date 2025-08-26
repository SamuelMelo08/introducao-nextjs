'use client'

import { FaMinus } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

type Item = {

    name: string;
    purchased: boolean;

}

type Items = {

    items: Item[]

}


export default function ListaDeCompras({items}: Items) {
    const [list, setList] = useState(items)
    const [add, setAdd] = useState(false)
    const [addValue, setAddValue] = useState("")

    const handleMark = (index: number) => {

        const newlist = [...list]

        newlist[index].purchased = !newlist[index].purchased

        setList(newlist)

    }

    const handleDelete = (index: number) => {

        const newlist = [...list]

        newlist.splice(index, 1)

        setList(newlist)

    }

    const handleAddInput = (e: ChangeEvent<HTMLInputElement>) => {
            setAddValue(e.target.value)
        }

    const handleAdd = () => {

        const item = {name: addValue, purchased: false}

        setList([...list, item])
        setAddValue("")
        setAdd(false)
    }

    return (

        <div className="h-120 w-80 shadow-md shadow-black/40 bg-yellow-200 flex flex-col justify-center overflow-y-auto p-2">

            <div className="flex justify-between w-full h-1/10  p-2">

                <h1 className="text-[20px] font-bold">Lista de Compras</h1>

                <button onClick={() => setAdd(!add)}>{add ? (<FaMinus color="black" size={18} />) : (<FaPlus size={15}/>) }</button>

            </div>

            <ul className="w-full h-9/10 justify-center p-2">

                <li className={`flex justify-between px-2 py-1 border-b-2 border-red-500 ${add ? "block" : "hidden"}`}>
                    <input 
                        id="addInput" 
                        placeholder="Adiconar item" 
                        className="focus:outline-none" 
                        type="text" onChange={handleAddInput} 
                        value={addValue}/>

                    <button onClick={() => handleAdd()} > <FaPlus size={15}/> </button>
                </li>

                {items ? 
                (
                    
                    list.map((item, index) => (

                        <li key={index} className={`flex justify-between text-[18px] px-2 py-1 border-b-2 border-red-500 relative
                                                    ${item.purchased ? "line-through" : ""}
                                                `}>

                            {item.name}

                            <button onClick={() => handleMark(index)} ><FaPencilAlt color="black" size={18} /></button>
                            <button className="absolute right-10 top-2" onClick={() => handleDelete(index)} ><FaMinus color="black" size={18} /></button>

                        </li>

                    ))

                ) : 
                (
                    <li>Não há nenhum item na lista.</li>
                )}

            </ul>

        </div>

    )

}