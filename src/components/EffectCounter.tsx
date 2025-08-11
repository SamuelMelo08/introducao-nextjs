'use client'

import { useEffect, useState } from "react"

export default function EffectCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
 
    }, [count])

    return (

        <div className="box bg-gray-200 w-100 h-50 rounded-[10px] shadow-md shadow-black/20 p-2">

            {/* Title */}
            <div className="-full h-1/4 flex justify-center items-center relative">

                <h1 className="font-bold text-[20px]">
                    Contador Effect
                </h1>

                <button 
                    className="bg-[#e35b5b] px-4 py-1 rounded-[10px]  text-white text-[12px] absolute right-1 hover:bg-red-400 "
                    onClick={() => setCount(0)}
                    >
                        Resetar

                </button>

            </div>

            {/* Number */}
            <div className="w-full h-2/4  bg-gray-100 flex justify-center items-center" >

                <h1 className="font-bold text-[45px]"> {count} </h1>

            </div>

            {/* Button */}
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

    )

}