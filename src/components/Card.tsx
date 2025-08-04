import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string
}

export default function Card(prop : CardProps) {

    return (

        <div className="w-90 h-fit bg-[#9ac254] rounded-[15px] text-white shadow-lg shadow-black/50">     

            <div className="flex justify-center items-center py-4 bg-[#81a249] rounded-t-[15px]">
                <p className="font-bold text-[18px] break-words">{prop.title}</p>
            </div>

            <div className="flex justify-start items-center px-5 mt-2 ">

                <p className="break-words"> {prop.description} </p>
                
            </div>

            <div className="flex justify-center items-center py-4">
                <div className="w-[90%] h-50 relative">
                    <Image

                        src={prop.imageUrl}
                        alt="Alguma imagem"
                        fill
                        className="object-cover rounded-2xl justify-center"
                    />
                </div>
            </div>

        </div>

    )

}