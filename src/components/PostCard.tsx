'use client'

import { useState } from "react";
import { FaHeart } from "react-icons/fa"

type props = {

    title: string;
    content: string;
    counter: number
    index: number
    like: (index: number) => void;

}

export default function PostCard({title, content, counter, like, index} : props) {
    const [isClick, setIsClick] = useState(false)

    const handleClick = () => {

        setIsClick(true)

        setTimeout(() => {

            setIsClick(false)

        }, 500)

    }

    return (

        <div className="h-fit w-full rounded shadow-md shadow-black/40 p-2 ">

            <h1 className="font-semibold text-[18px] break-words border-b-2 border-gray-300"> {title} </h1>

            <p className="py-4 break-words" > {content} </p>

            
            
            <button 
                className={`flex items-center gap-2 px-2 rounded-[10px] transition-all duration-300
                            ${isClick ? "scale-110 bg-red-500 text-white" : "bg-white"}`}
                onClick={() => {like(index), handleClick()}}    
            >
                
                <FaHeart className="transition-all duration-300" color={`${isClick ? "white" : "red"}`}/> {counter} 
            
            </button>


        </div>

    )

}