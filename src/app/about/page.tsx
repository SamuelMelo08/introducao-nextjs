'use client'

import Counter from "@/components/Counter"
import EffectCounter from "@/components/EffectCounter"
import MiniDisplay from "@/components/MiniDisplay"
import { gsap } from "gsap"
import { useEffect } from "react"


export default function About() {

    useEffect(() => {
        gsap.from(".box1", {opacity:0, y: -400, x: -400 , duration:2})
        gsap.from(".box2", {opacity:0, y: -400, x: 400, duration:2})
        gsap.from(".calc", {opacity:0, y: 400, duration:2})
    }, [])

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col overflow-hidden">
        
            <div className="flex justify-center items-center m-10 gap-10">

                <div className="box1">

				    <Counter initial={0}/>

                </div>

                <div className="box2">

				    <EffectCounter/>

                </div>
                
			</div>

            <div className="calc" > 

                <MiniDisplay/>

            </div>

        </div>
    )
}