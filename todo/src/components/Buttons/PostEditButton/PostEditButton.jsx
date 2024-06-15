import axios from "axios";
import {useState} from "react";
import ModifyPostForm from "../../ModifyPostForm/ModifyPostForm.jsx";


const PostEditButton = ( {indexFromButton, posts, onEditFormSubmit} ) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    return (
        <>
            <button onClick={() => setIsButtonClicked(!isButtonClicked)}>Modify</button>
            {isButtonClicked ? <ModifyPostForm posts={posts} indexFromButton={indexFromButton} /> : ""}
        </>
    )
}

export default PostEditButton