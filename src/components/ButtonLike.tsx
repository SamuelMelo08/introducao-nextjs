import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

export default function ButtonLike() {

    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {

        if (!isLiked) {

            setIsLiked(true)
    
            setTimeout(() => {
                setIsLiked(false)
            }, 1000)

        }

    }

    return (

        <button 
            className={`flex items-center px-6 py-2 gap-3
                      text-gray-50 text-[30px] rounded-[16px] hover:scale-104 
                      transition-all ease-in-out duration-200 shadow-md shadow-black/40
                      ${isLiked ?"text-red-500 bg-white" : "text-gray-50 bg-red-500" }`}
                    
            onClick={() => handleLike()}
            >
            
            {isLiked ? (<span> +1 </span>) : (<span>Curtir</span>)}
            
            {isLiked ? (
                <span> <FaHeart color="red" size={28} /> </span>
            ) : (
                <span> <FaRegHeart color="white" size={28} /> </span>
            )}
            

        </button>

    )

}