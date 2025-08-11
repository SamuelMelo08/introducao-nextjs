'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function() {
    const [lampImage, setLampImage] = useState<string>("/Lampada_ac.png")
    const [ InterImage, setInterImage] = useState<string>("/interOff.png")
    const [change, setChange] = useState(false)

    useEffect(() => {

        if (change === true) {
            setLampImage("/Lampada_ap.png")
            setInterImage("/interOn.png")
        } else {
            setLampImage("/Lampada_ac.png")
            setInterImage("/interOff.png")
        }

    }, [change])

    return (

        <div className="w-full h-screen flex justify-center items-center gap-10">

            <div className="w-[280px] h-[400px] relative">

                <Image
                    src={lampImage}
                    alt="Lampada"
                    fill

                />

            </div>

            <div className="w-[150px] h-[200px] relative">

                <button onClick={() => {
                    if (change === true) {
                        setChange(false)
                    } else {
                        setChange(true)
                    }
                }}>
                    <Image
                        src={InterImage}
                        alt="Interruptor"
                        fill
                        
                    />
                </button>
            </div>

        </div>

    )

}