import './Post.css'

const Post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.selectedPost.title}</h1>
        <p>{props.selectedPost.body}</p>
        <div className="Info">
            <div className="Author">{props.selectedPost.author}</div>
        </div>
    </article>
)

export default Post