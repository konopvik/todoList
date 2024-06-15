import styles from './Post.module.scss'
import PostEditButton from "../Buttons/PostEditButton/PostEditButton.jsx";
import ModifyPostForm from "../ModifyPostForm/ModifyPostForm.jsx";
import {useState} from "react";
import PostDeleteButton from "../Buttons/PostDeleteButton/PostDeleteButton.jsx";

const Post = ({ userId, id, title, body, indexFromButton, posts }) => {


    return <div className={styles.root}>
        <h1>Post from user with id: {userId}</h1>
        <h2>Post id: {id}</h2>
        <p>{title}</p>
        <p>{body}</p>
        <br/>
        <div className={styles.buttons}>
            <PostEditButton indexFromButton={indexFromButton} posts={posts} />
            <PostDeleteButton indexFromPost={indexFromButton}/>
        </div>
    </div>
}

export default Post