import styles from './Post.module.scss'

const Post = ({ userId, id, title, body }) => {
    return <div className={styles.root}>
        <h1>Post from user with id: {userId}</h1>
        <h2>Post id: {id}</h2>
        <p>{title}</p>
        <p>{body}</p>
        <br/>
    </div>
}

export default Post