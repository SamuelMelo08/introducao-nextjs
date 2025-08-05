import CommentForm from "@/components/CommentForm";

export default function FeedBacks() {

    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">

            <div className="w-full h-1/3 flex justify-center items-center">

                <h1 className="text-2xl font-semibold "> Deixe o seu feedBack aqui: </h1>

            </div>


            <div className="flex flex-col w-full h-2/3 justify-top items-center">

                <div className="flex justify-center items-center">

                    <CommentForm />

                </div>


            </div>
        </div>
    )

}