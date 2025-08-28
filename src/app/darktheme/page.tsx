"use client"

import Toggle from "@/components/Toggle"
import { useState } from "react"

export default function DarkTheme() {

    const [isDark, setIsDark] = useState(false)

    const handleToggleTheme = () => {

        setIsDark(!isDark)

    }

    return (

        <div className={`flex justify-center items-center h-screen w-full transition-all duration-600 flex-col gap-3
                        ${isDark ?  "bg-black text-white" : " bg-white text-black" }`}>

            <h1> {isDark ? "DarkTheme" : "LightTheme"} </h1>

            <Toggle isDark={isDark} onToggle={handleToggleTheme} />

        </div>

    )

}