import SingleComment from "./SingleComment"

export default function CommentList({allComment, getAllComment}) {
    
    return (
        <>
                {allComment.map((comment, i) => (
                    <SingleComment getAllComment={getAllComment} commmentText={comment.comment} commentRate={comment.rate} key={i} commentId={comment._id} />
                ))}
          </>  
    )
}