'use client'

import PostCard from "@/components/PostCard"
import { useEffect, useState } from "react"
import { CgMail } from "react-icons/cg";
import { CiBatteryFull } from "react-icons/ci";
import { MdNetworkWifi3Bar } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSquareRounded } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";


const posts = [

        {
            title: "Post",
            content: "Alguma coisa que pode postar",
            counter: 1
        },

        {
            title: "Post",
            content: "Alguma coisa que pode postar",
            counter: 1
        },
    ]

export default function Feed() {

    const [listPost, setListPost] = useState(posts)
    const [time, setTime] = useState(new Date())

    const handlelike = (index: number) => {

        const newListPost = [...listPost]

        newListPost[index].counter = newListPost[index].counter + 1

        setListPost(newListPost)

    }

    useEffect(() => {

        const timer = setInterval(() => {
            
            setTime(new Date())

        }, 1000)

        return () => clearInterval(timer)
    })

    return (
        
        <div className="flex h-screen w-full justify-center items-center">

            <div className="flex justify-center items-center bg-white w-70 h-140
                           border-gray-800 border-5 rounded-[20px] flex-col">
                
                <div className="bg-black/40 w-full h-[5%] rounded-t-[14px] flex items-center justify-between">

                    <span className="flex gap-2 text-white px-2 text-[14px]">

                        {time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}
                   
                    
                        <CgMail size={20} color="white" />

                    </span>

                    <span className="flex px-2 gap-1">

                        <MdNetworkWifi3Bar size={18} color="white" />

                        <MdOutlineSignalCellularAlt size={18} color="white" />

                        <CiBatteryFull size={20} color="white" />

                    </span>
                    

                </div>

                <div className=" w-full h-[9%] p-4 
                                flex justify-start items-center">

                    <h1 className="font-semibold w-full text-[20px] border-b-2 border-gray-400 "> Comentários: </h1>

                </div>

                <div className="w-full h-[80%] flex justify-start items-center p-4 flex-col overflow-y-auto gap-6">

                    {listPost.map((post, index) => (

                        <PostCard 
                            key={index} 
                            title={post.title} 
                            content={post.content} 
                            counter={post.counter} 
                            like={handlelike} 
                            index={index} />

                    ))}

                </div>
                
                <div className="bg-amber w-full h-[6%] bg-black/30 flex justify-center items-center">

                    <span className="flex items-center justify-around gap-20">

                        <IoMdMenu size={20} color="white" />

                        <BiSquareRounded color="white" />

                        <MdOutlineArrowBackIos color="white" />

                    </span>

                </div>

            </div>

        </div>

    )

}