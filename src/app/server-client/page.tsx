'use client'

import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";


export default function ServerClient() {

    const [data, setData] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setData(new Date())
        }, 1000)

        return () => clearInterval(interval)
    })

    return (
        <div>
            <h1>Data e hora atuais: </h1>
            <p>{data.toLocaleString()}</p>
            <ThemeToggle/>
        </div>
    )

}