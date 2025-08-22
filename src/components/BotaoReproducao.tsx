import { useState } from "react"
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

export default function BotaoReproducao() {
    const [isPlaed, setIsPlaed] = useState(false)

    const handleClick = () => {

        if (!isPlaed) {

            setIsPlaed(true)
        } else {

            setIsPlaed(false)
        }

    }

    return (

        <button
            className={`flex items-center px-6 py-2 gap-3
                      text-gray-50 text-[30px] rounded-[16px] hover:scale-104 
                        transition-all ease-in-out duration-200 shadow-md shadow-black/40
                        ${isPlaed ?"text-white bg-blue-950" : "text-gray-50 bg-amber-400" }`}
            
            onClick={() => handleClick()}
        >

            <span>{isPlaed ? "Pause" : "Play"}</span>

            <span> {isPlaed ? (<FaPause/>) : (<FaPlay/>)} </span>
            
             

        </button>

    )

}