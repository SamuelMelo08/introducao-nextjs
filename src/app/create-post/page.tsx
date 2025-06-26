'use client'

import { useState } from "react";
import axios from "axios";

type FormData = {
    title: string;
    body: string;
}

type ResponseData = {
    id: number;
    title: string;
    body: string;
}

export default function CreatePostPage(){

    const [formData, setFormData] = useState<FormData>({title: "", body: ""})

    const [responseData, setResponseData] = useState< ResponseData |  null >(
        null
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value            

        })

    }

    const handleSubmit = async (event: React.FormEvent) => {

        event.preventDefault();

        const {data} =  await axios.post(
            "https://jsonplaceholder.typicode.com/posts", 
            formData,
            {headers: {"Content-Type":"application/json"}}
        )
        setResponseData(data)
       
        
    }

    return (

        <div className="bg-gray-100 flex items-center min-h-screen justify-center p-6">

            <div className="bg-white shadow-xl p-6 rounded-xl">

                <h1 className="text-2xl font-bold text-center mb-4">Criar Novo Post</h1>

                <form onSubmit={handleSubmit}>
                    {/* Titulo */}
                    <div>
                        
                        <label className="block text-sm font-medium" >Titulo:</label>
                        <input
                            className="mt-1 border rounded px-3 py-2 w-full" 
                            type="text"
                            name="title"
                            value={formData.title}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    {/* Conteudo */}
                    <div>
                        <label className="block text-sm font-medium mt-2">
                            Conteúdo:
                        </label>
                        <textarea 
                            name="body" 
                            className="w-full mt-1 border rounded px-3 py-2"
                            rows={2}
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="bg-blue-400 text-white py-2 px-3 rounded hover:bg-blue-600 cursor-pointer">
                        Publicar
                    </button>

                </form>

                {responseData && (
                    <div className="mt-6 border-green-600 bg-green-300 ">
                    <p>Post Criado com sucesso!</p>
                    <p>Id: {responseData.id}</p>
                    <p>Titulo: {responseData.title}</p>
                    <p>Conteúdo: {responseData.body}</p>

                    </div>
                )}

            </div>

        </div>

    )

}