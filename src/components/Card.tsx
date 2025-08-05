import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string
    category: string
}

export default function Card(prop : CardProps) {

    return (

        <div className="w-90 h-fit bg-[#9ac254] rounded-[15px] text-white shadow-lg shadow-black/50">     

            <div className="flex justify-center items-center py-4 bg-[#81a249] rounded-t-[15px]">
                <p className="font-bold text-[18px] break-words leading-5">{prop.title}</p>
            </div>

            <div className="flex justify-start items-center px-5 mt-2 ">

                <p className="break-words leading-5"> <strong> Descrição:  </strong> {prop.description} </p>
                
            </div>

            <div className="flex justify-start items-center px-5">

                <p>  <strong> Categoria:  </strong> {prop.category} </p>

            </div>
            
            <div className="flex  flex-col justify-center items-center mb-4 mt-2">
                <span className="mb-2"> <strong> Imagem:  </strong> </span>
                <div className="w-[70%] h-70 relative">
                    <Image

                        src={prop.imageUrl}
                        alt="Alguma imagem"
                        fill
                        className="object-cover object-center rounded-2xl justify-center"
                    />
                </div>
            </div>

        </div>

    )

}