'use client'

import { useState } from "react"

interface Props {

    initial: number;

}

export default function Counter(props: Props) {

    const [count, setCount] = useState(props.initial);

    return (

        <>

            <div className="bg-gray-200 w-100 h-50 rounded-[10px] shadow-md shadow-black/20 p-2">

                <div className="w-full h-1/4 flex justify-center items-center relative">

                    <h1 className="font-bold text-[20px]"> Contador State </h1>

                    <button 
                    className="bg-[#e35b5b] px-4 py-1 rounded-[10px]  text-white text-[12px] absolute right-1 hover:bg-red-400 "
                    onClick={() => setCount(0)}
                    >
                        Resetar

                    </button>

                </div>

                <div className="w-full h-2/4  bg-gray-100 flex justify-center items-center">

                    <h1 className="font-bold text-[45px]"> {count} </h1>

                </div>

                <div className="w-full h-1/4 flex justify-center items-center gap-2">

                    <button 
                    className="bg-[#3e4162] px-4 py-1 rounded-[10px]  text-white text-[12px] hover:scale-104 duration-300 "
                    onClick={() => setCount(count + 1)}
                    >
                        Incrementar

                    </button>

                    <button 
                    className="bg-[#3e4162] px-4 py-1 rounded-[10px]  text-white text-[12px] hover:scale-104 duration-300"
                    onClick={() => setCount(count - 1)}
                    >
                        Decrementar

                    </button>

                </div>

            </div>

        </>

    )

}