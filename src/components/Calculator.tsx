'use client'
import { FaTrash } from 'react-icons/fa';
import { useState } from "react"


export default function Calculator() {

    const [display, setDisplay] = useState<string>("")

    const handleOperatorClick = (operator: string) => {

        const operators = ["+", "-", "x", "/"]

        const disableoperators = operators.filter((op) => op !== operator)
        const hasAnotherOperator = disableoperators.some( (op) => display.includes(op) )

        if (hasAnotherOperator) return

        setDisplay(display + operator)


    }

    const operationSearch = () => {

         if (display.includes("+")) {
            sum()

        } else if (display.includes("-")) {
            minos()

        } else if (display.includes("x")) {
            multi()

        } else if (display.includes("/")) {
            div()

        }
       
    }

    const deleteNumber = () => {

        setDisplay(display.slice(0, -1))        

    }

    const sum = () => {

        const values = display.split("+")

        const result = values.reduce((acumulation, currentValue) =>  acumulation + Number(currentValue), 0)

        setDisplay(String(result))

    }

    const minos = () => {

        const values = display.split("-")
        const numberValues = values.map((value) => parseFloat(value))

        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation - currentValue)


        setDisplay(String(result))

    }

    const multi = () => {

        const values = display.split("x")
        const numberValues = values.map((value) => parseFloat(value))

        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation * currentValue)

        setDisplay(String(result))

    }

    const div = () => {

        const values = display.split("/")
        const numberValues = values.map((value) => parseFloat(value))

        if (numberValues[0] === 0) {
            setDisplay("0")
            return
        }
        

        if (numberValues.includes(0)) {
            setDisplay("Divisão por 0")
            return
        }


        const result = numberValues.reduce((acumulation, currentValue) =>  acumulation / currentValue)

        setDisplay(String(result))

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

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => handleOperatorClick("+")}>
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

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => handleOperatorClick("-")}>
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

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => handleOperatorClick("x")}>
                    x
                </button>

                <button className="bg-[#434336] text-white p-2 rounded" onClick={() => setDisplay(display + "9")}>
                    9
                </button>

                <button className="bg-[#434336] text-white p-2 rounded col-span-2" onClick={() => operationSearch()}>
                    =
                </button>

                <button className="bg-[#434336] text-white p-2 rounded " onClick={() => handleOperatorClick("/")}>
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