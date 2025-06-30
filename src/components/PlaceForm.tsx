'use client'

import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const placeValidationSchema = z.object({
    name: z.string().min(3, "O nome é muito curto!"),
    type: z.enum(["restaurante", "bar", "hotel"]),
    phone: z.string().min(8, "Telefone inválido" ),
    lat: z.number(),
    lbg: z.number(),
})


type placeFormData = z.infer<typeof placeValidationSchema>

export default function PlaceForm() {

    const {
            register,
            handleSubmit,
            formState: {errors, isSubmitSuccessful}

    } = useForm<placeFormData>({
        resolver: zodResolver(placeValidationSchema)
    })

    const onSubmit = (data: placeFormData) => {
        alert("Dados do local enviados!")
    }

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

            <button className="bg-amber-200 px-4 py-1 rounded  cursor-pointer hover:bg-amber-100" >
                Registrar local
            </button>

        </form>

    )

}