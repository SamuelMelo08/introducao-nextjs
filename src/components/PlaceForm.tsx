'use client'

import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import axios from "axios"

const placeValidationSchema = z.object({
    name: z.string().min(3, "O nome é muito curto!"),
    type: z.enum(["restaurante", "bar", "hotel"]),
    phone: z.string().min(8, "Telefone inválido" ),
    lat: z.number(),
    lng: z.number(),
})


type PlaceFormData = z.infer<typeof placeValidationSchema>

type Props = {
    lat: number;
    lng: number;
}

export default function PlaceForm({lat, lng} : Props) {

    const {
            register,
            handleSubmit,
            formState: {errors, isSubmitSuccessful}

    } = useForm<PlaceFormData>({
        resolver: zodResolver(placeValidationSchema),
        defaultValues: {
            lat,
            lng
        }
    })

    const onSubmit = async (data: PlaceFormData) => {
        
        if(!images || images.length === 0 ) {
            setSubmitError("Pelo menos um imagem deve ser enviada")
            return
        }

        if (images.length > 3) {
            setSubmitError("Você pode enviar no máximo 3 fotos")
            return
        }

        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("type", data.type)
        formData.append("phone", data.phone)
        formData.append("latitude", String(data.lat))
        formData.append("longitude", String(data.lng))

        Array.from(images).forEach((file) => {
            formData.append("images", file)
        })

        try {
            setLoading(true)

            const response = await axios.post("", formData, 
                {
                    headers: {"Content-Type": "multipart/formData"}
                })
        } catch {

        }
    

    }

    const [images, setImages] = useState<FileList | null>(null)
    const [submitError, setSubmitError] = useState<String | null>(null)
    const [loading, setLoading] = useState(false)

    return (


        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            {/*  Nome */}
            <div>

                <label>Nome</label>
                <input 
                {...register("name")}
                className="w-full border rounded  px-2 py-1"
                />
                {errors.name && <p className="text-red-400" >
                    {errors.name.message}
                </p>}

            </div>

            {/* Tipo */}
                <select
                {...register("type")}
                >
                    <option>Selecione</option>
                    <option value="restaurante" >Restaurante</option>
                    <option value="bar" >Bar</option>
                    <option value="hotel" >Hotel</option>
                </select>
                {errors.type && <p className="text-red-400" >
                    {errors.type.message}
                </p>}


            {/* Telefone */}
            <div>

                <label>Telefone</label>
                <input 
                {...register("phone")}
                className="w-full border rounded  px-2 py-1"
                />
                {errors.phone && <p className="text-red-400" >
                    {errors.phone.message}
                </p>}

            </div>

            {/* Latitude e Longitiude */}
            <div>

                <label>Latitude</label>
                <input 
                    value={lat}
                    readOnly 
                    className="border rounded px-2 py-1 bg-gray-100"
                />

            </div>

            <div>

                <label>Longitude</label>
                <input 
                    value={lng}
                    readOnly 
                    className="border rounded px-2 py-1 bg-gray-100"
                />

            </div>

            <div>
                <label>Imagens:</label>
                <input 
                multiple
                type="file" 
                accept="image/*"
                onChange={(event) => setImages(event.target.files)}
                />
            </div>

            <button className="bg-amber-200 px-4 py-1 rounded  cursor-pointer hover:bg-amber-100" >
                Registrar local
            </button>

        </form>

    )

}