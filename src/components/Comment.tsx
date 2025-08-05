
type Comment = {

    name: string;
    message: string;
    date: string;

}

export default function Comment({name, message, date} : Comment) {

    return (
        
        <div className="flex flex-col ">

            <div className="flex flex-col w-[300px] h-fit bg-gray-100 p-2 gap-2 shadow-md shadow-black/15 ">

                <div className="flex justify-between">



                        <p className="break-words font-medium text-[18px]"> {name} </p>


                        <p className="break-words text-[12px]"> {date} </p>

                </div>

                <div className="flex flex-col gap-1 mt-2">

                   
                    <p className="break-words"> {message} </p>

                </div>

            </div>

        </div>

    )

}