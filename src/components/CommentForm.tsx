'use client'

import { ChangeEvent, useState } from "react";
import CommentList from "./CommentList";


export default function CommentForm () {
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [comments, setComments] = useState<{nameUser: string, messageUser: string, date: string}[]>([])

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const comment = 
            {
                nameUser: name,
                messageUser: message
            }
        

        setComments((prev) => [...prev, {
            nameUser: name,
            messageUser: message,
            date: new Date().toLocaleString()
        }])
        
        setName("")
        setMessage("")

    }

    return (
        <div className="flex flex-col rounded-2xl ">

            <form className="flex flex-col space-y-5 p-6 rounded-2xl shadow-md shadow-black/50" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="flex flex-col space-y-1">
                    <label htmlFor="name" > Nome: </label>
                    <input 
                        id="name" 
                        type="text" 
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                        className="w-60 px-2 py-1 rounded outline-none bg-gray-100" 
                        required
                        />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1" >
                    <label htmlFor="message" > FeedBack: </label>
                    <textarea 
                        id="message" 
                        placeholder="Digite seu feedback" 
                        value={message}
                        onChange={handleMessage}
                        className="w-60 px-2 py-1 rounded outline-none bg-gray-100"
                        required
                        />

                </div>

                <button className="bg-[#454d6d] px-2 py-1 text-white rounded"> Enviar </button>

            </form>
            
            <div className="flex flex-col gap-5 justify-center items-center px-4 py-6">
                <CommentList comments={comments}/>
            </div>

        </div>

    )

}