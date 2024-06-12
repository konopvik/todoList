import axios from "axios";
import {useState} from "react";
import ModifyPostForm from "../../ModifyPostForm/ModifyPostForm.jsx";


const PostEditButton = ( {indexFromButton, posts, onEditFormSubmit} ) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const onPostEditButtonClick = () => {
        axios.put(`http://localhost:3001/api/posts/${indexFromButton}`, {
            title: postData.title,
            body: postData.body,
        }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => {
            console.log(response.data);
        })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <>
            <button onClick={() => setIsButtonClicked(!isButtonClicked)}>Modify</button>
            {isButtonClicked ? <ModifyPostForm posts={posts} indexFromButton={indexFromButton} /> : ""}
        </>
    )
}

export default PostEditButton