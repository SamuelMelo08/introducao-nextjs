'use client'

import { GoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { useRouter } from "next/navigation";

export default function LoginGooglePage() {
    const router = useRouter() 

    const handleSuccess = async (credentialResponse: any) => {
        console.log("Credencias do Google: ", credentialResponse)

        try {
            const response = await axios.post(`
                ${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
                {
                    idToken: credentialResponse.credential
                }
            );

            const jwt_token = response.data.accesToken

            localStorage.setItem("accesToken", jwt_token)
            
            router.push("/map")


        } catch(err) {
            console.error("Erro no login com o Google: ", err)
        }
    }

    return (
        <main className="flex h-screen items-center justify-center">

            <div className="p-4 rounded shadow bg-white">

                <h1 className="font-semibold">Login</h1>

                <GoogleLogin

                    onSuccess={handleSuccess}
                    onError={() => console.log("Erro ao autenticar com o Google")}
                    
                />

            </div>

        </main>
    )

}