'use client'
import { FaTrash } from 'react-icons/fa';


import { useState } from "react"

export default function MiniDisplay() {

    const [display, setDisplay] = useState<string>("0")

    const deleteNumber = () => {

        setDisplay(display.slice(0, -1))        

    }

    return (

        <div className="flex flex-col justify-center items-center mt-5 bg-[#eddfc8] p-3 rounded">

            {/* Display */}
            <div className="border-1 bg-[#bbd681] border-gray-400 rounded px-2  w-40 h-12 text-center text-xl flex justify-start items-center overflow-x-auto ">

                {display}

            </div>

            {/* Teclado númerico */}
            <div className="grid grid-cols-3 gap-2 mt-2 w-40 h-fit ">

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "0")}>
                    0
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "1")}>
                    1
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "2")}>
                    2
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "3")}>
                    3
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "4")}>
                    4
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "5")}>
                    5
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display +  "6")}>
                    6
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "7")}>
                    7
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "8")}>
                    8
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "9")}>
                    9
                </button>

                <button className="bg-[#da4949] text-white p-2 rounded col-span-2 flex justify-center items-center" onClick={() => deleteNumber()}>
                    <FaTrash color='white' />
                </button>

            </div>

        </div>
        

    )

}