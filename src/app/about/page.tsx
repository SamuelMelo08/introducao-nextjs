'use client'

import Counter from "@/components/Counter"
import EffectCounter from "@/components/EffectCounter"
import { gsap } from "gsap"
import { useEffect } from "react"


export default function About() {

    useEffect(() => {
        gsap.from(".box1", {y: -400, duration:2})
        gsap.from(".box2", {y: 400, duration:2})
    }, [])

    return (
        <div className="w-full h-screen flex justify-center items-center">
        
            <div className="flex justify-center items-center m-10 gap-10">

                <div className="box1">

				    <Counter initial={0}/>

                </div>

                <div className="box2">

				    <EffectCounter/>

                </div>
                
			</div>

        </div>
    )
}