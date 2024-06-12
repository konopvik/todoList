import styles from './Post.module.scss'
import PostEditButton from "../Buttons/PostEditButton/PostEditButton.jsx";
import ModifyPostForm from "../ModifyPostForm/ModifyPostForm.jsx";
import {useState} from "react";

const Post = ({ userId, id, title, body, indexFromButton, posts }) => {

    return <div className={styles.root}>
        <h1>Post from user with id: {userId}</h1>
        <h2>Post id: {id}</h2>
        <p>{title}</p>
        <p>{body}</p>
        <br/>
        <div className={styles.buttons}>
            <PostEditButton indexFromButton={indexFromButton} posts={posts} />
            <button>Delete</button>
        </div>
        {id === indexFromButton ? <ModifyPostForm indexFromButton={indexFromButton}
                                                  posts={posts}
                                                   /> : ""}
    </div>
}

export default Post