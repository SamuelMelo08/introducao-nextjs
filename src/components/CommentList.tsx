
import { date } from "zod/v4-mini"
import Comment from "./Comment"

type ListProps = {
    comments: {nameUser: string, messageUser: string, date: string}[]
}

export default function CommentList({comments} : ListProps) {

    return(
        <div className="flex flex-col gap-5">
            {comments.map((comment, index) => (
                <Comment key={index} name={comment.nameUser} message={comment.messageUser} date={comment.date} />
            ))}
        </div>

    )

}