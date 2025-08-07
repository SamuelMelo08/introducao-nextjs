'use client'

import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function LikeButton() {

    const [likeCount, setLikeCount] = useState(0)
    const [heart, setHeart] = useState(60)
    const [color, setColor] = useState("red")
    const [colorCount, setColorCount] = useState("white")

    const handleHeart = () => {

        setHeart(70)
        setColor("White")
        setColorCount("red")

        setTimeout(() => {

            setHeart(60)
            setColor("red")
            setColorCount("white")

        }, 1000)
        
    }


    return (
        
        <div className="bg-red-300 w-100 h-60 rounded-[20px] shadow-md shadow-black/20 px-2">

            <div className="w-full h-1/4 flex justify-center items-center">

                <h1 className="font-semibold text-[30px] text-white" > Dê like! </h1>
                
            </div>

            <div className="w-full h-2/4 flex justify-center items-center relative bg-white rounded-[20px]">

                <FaHeart color={color} size={heart} className="transition-all duration-200"/>

                <p  className={`absolute ${colorCount === "red" ? "text-red-500" : "text-white"} text-[20px] font-bold`} >
                    {likeCount}
                </p>

            </div>

            <div className="w-full h-1/4 flex justify-center items-center">

                <button
                    className="bg-red-500 px-6 py-1 text-white rounded-[10px]"
                    onClick={() => {setLikeCount(likeCount + 1); handleHeart()}}
                >
                    Like
                </button>

            </div>


        </div>

    )

}