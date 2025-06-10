import Image from "next/image";

interface CardContent {
    content:{
        icon: string;
        title: string;
        subTitle: string
    }[]
}

export default function CardSection({content}:CardContent){

    return (
        <div className="flex justify-center">
            {content.map((name, index) => (

                    <div key={index} className="bg-gray-300 rounded-2xl w-1/4 h-40 flex items-center justify-center m-10">
                        <div>
                            <Image
                                src={name.icon} 
                                alt="icon" 
                                width={30} 
                                height={30}
                                className="mb-5"
                            />

                            <h2>{name.title}</h2>
                            <h3>{name.subTitle}</h3>
                        </div>
                    </div>

            ))}
        </div>
    )
}