'use client'

import BotaoReproducao from "@/components/BotaoReproducao"
import ButtonLike from "@/components/ButtonLike"


export default function ListarProdutos() {

    return (
        <div className="flex justify-center items-center w-full h-screen flex-col gap-8">
            
            <ButtonLike/>

            <BotaoReproducao/>

        </div>

    )

}