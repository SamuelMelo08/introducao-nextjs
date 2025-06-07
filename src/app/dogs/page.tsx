'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

type dogImage = {
    image: string;
}

export default function DogPage() {

    const [dogImage, setDogImage] = useState<dogImage>({image:""})

    const fetchImages = async () => {

        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        setDogImage({image: data.message})

    }

    useEffect(() => {
       
        fetchImages();

    }, [])

    
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="text-center">
            
                <h1 className="mb-5 text-2xl font-bold" >Random Dog 🐶</h1>
                
                <Image
                    src={dogImage.image}
                    alt="dog random"
                    width={250}
                    height={250}
                    className="rounded"
                    
                />
                <button onClick={fetchImages} className="bg-blue-400 text-white p-2 rounded mt-10" >Buscar outro cachorro</button>

            </div>

        </div>
    )

}