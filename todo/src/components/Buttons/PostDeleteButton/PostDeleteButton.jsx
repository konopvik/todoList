import axios from "axios";

const PostDeleteButton = ({ indexFromPost }) => {

    const onPostDeleteButtonClick = () => {
        axios.delete(`http://localhost:3001/api/posts/${indexFromPost}`, {
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
        <button onClick={onPostDeleteButtonClick}>Delete</button>
    )
}

export default PostDeleteButton