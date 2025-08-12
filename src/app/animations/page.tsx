'use client'

import { gsap } from "gsap"
import { useEffect } from "react"

export default function AnimationsPage() {

    useEffect(() => {

        

    }, [])
    
    
    return (

        <div className="w-full h-screen flex justify-start items-center px-20 flex-col gap-10 py-10">

            <div className="flex justify-start items-center flex-col gap-15">

                <div className="box1 h-50 w-100 bg-green-500 rounded-[15px]"></div>

                <div className="box2 h-50 w-100 bg-blue-300 rounded-[15px]"></div>

                <div className="box3 h-50 w-100 bg-red-500 rounded-[15px]"></div>

            </div>

            <div className="flex justify-start items-center flex-col gap-15">

                <div className="box4 h-50 w-100 bg-green-500 rounded-[15px]"></div>

                <div className="box5 h-50 w-100 bg-blue-300 rounded-[15px]"></div>

                <div className="box6 h-50 w-100 bg-red-500 rounded-[15px]"></div>

            </div>

            <div className="flex justify-start items-center flex-col gap-15">

                <div className="box7 h-50 w-100 bg-green-500 rounded-[15px]"></div>

                <div className="box8 h-50 w-100 bg-blue-300 rounded-[15px]"></div>

                <div className="box9 h-50 w-100 bg-red-500 rounded-[15px]"></div>

            </div>

        </div>

    )

}