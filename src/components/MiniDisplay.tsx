'use client'
import { FaTrash } from 'react-icons/fa';


import { useState } from "react"

export default function MiniDisplay() {

    const [display, setDisplay] = useState<string>("")

    const operationSearch = () => {

        if (display.includes("+")) {

            if (display.includes("-") || display.includes("x") || display.includes("/")) {
                return
            }

            sum()

        } else if (display.includes("-")) {

            if (display.includes("+") || display.includes("x") || display.includes("/")) {
                return
            }

            minos()

        } else if (display.includes("x")) {

            if (display.includes("-") || display.includes("+") || display.includes("/")) {
                return
            }

            multi()

        } else if (display.includes("/")) {

            if (display.includes("-") || display.includes("x") || display.includes("+")) {
                return
            }

            div()
        }
    }

    const deleteNumber = () => {

        setDisplay(display.slice(0, -1))        

    }

    const sum = () => {

        const values = display.split("+")
        
        const result = values.reduce((acumulation, currentValue) =>  acumulation + parseFloat(currentValue), parseFloat(values[0]) )

        setDisplay(`${result}`)

    }

    const minos = () => {

        const values = display.split("-")
        const numberValues = values.map((value) => parseFloat(value))

        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation - currentValue)


        setDisplay(`${result}`)

    }

    const multi = () => {

        const values = display.split("x")
        const numberValues = values.map((value) => parseFloat(value))

        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation * currentValue)

        setDisplay(`${result}`)

    }

    const div = () => {

        const values = display.split("/")
        const numberValues = values.map((value) => parseFloat(value))

        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation / currentValue)

        setDisplay(`${result}`)

    }

    return (

        <div className="flex flex-col justify-center items-center mt-5 bg-[#eddfc8] p-3 rounded">

            {/* Display */}
            <div className="border-1 bg-[#bbd681] border-gray-400 rounded p-2  w-40 h-12 text-center text-xl flex justify-start items-center overflow-x-auto overflow-y-hidden">

                {display}

            </div>

            {/* Teclado númerico */}
            <div className="grid grid-cols-4 gap-2 mt-2 w-40 h-fit ">

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "0")}>
                    0
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "1")}>
                    1
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "2")}>
                    2
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "+")}>
                    +
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

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "-")}>
                    -
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

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "x")}>
                    x
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "9")}>
                    9
                </button>


                <button className="bg-[#434336] text-white p-2 rounded col-span-2" onClick={() => operationSearch()}>
                    =
                </button>

                <button className="bg-[#434336] text-white p-2 rounded " onClick={() => setDisplay(display + "/")}>
                    /
                </button>

                <button className="bg-[#da4949] text-white p-2 rounded col-span-2 flex justify-center items-center" onClick={() => deleteNumber()}>
                    <FaTrash color='white' />
                </button>


                <button className="bg-[#da4949] text-white p-2 rounded col-span-2 " onClick={() => setDisplay("")}>
                    C
                </button>

            </div>

        </div>
        

    )

}