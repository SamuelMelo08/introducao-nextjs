'use client'

import { gsap } from "gsap"
import { useEffect } from "react"

export default function AnimationsPage() {

    useEffect(() => {

        gsap.fromTo(".box1", {x: 100, opacity: 0.0}, {x: 300, opacity:1, duration: 1})
        gsap.to(".box2", {rotation: 360, x:200, duration: 2})
        gsap.from(".box3", {rotation: 360 , y: -200, duration: 2})

    }, [])
    
    
    return (

        <div className="w-full h-screen flex justify-start items-center px-20">

            <div className="flex justify-start items-center flex-col gap-15">

                <div className="box1 h-20 w-20 bg-green-500 rounded-[15px]"></div>

                <div className="box2 h-20 w-20 bg-blue-300 rounded-[15px]"></div>

                <div className="box3 h-20 w-20 bg-red-500 rounded-[15px]"></div>

            </div>

        </div>

    )

}