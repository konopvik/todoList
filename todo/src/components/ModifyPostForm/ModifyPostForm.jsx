import {useForm} from "react-hook-form";
import styles from "../NewPostForm/NewPostForm.module.scss";
import axios from "axios";
import {useState} from "react";

const ModifyPostForm = ({ posts, indexFromButton }) => {

    const [postData, setPostData] = useState({
        title: "1",
        body: "1"
    })

    const {register,
        handleSubmit, formState: {errors}, reset } = useForm({
        defaultValues: {
            title: posts[indexFromButton].title,
            body: posts[indexFromButton].body,
        }
    })
    const onSubmit = data => {
        axios.put(`http://localhost:3001/api/posts/${indexFromButton + 1}`, {
            title: data.title,
            body: data.body,
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
    };

    const onPostEditButtonClick = () => {
        axios.put(`http://localhost:3001/api/posts/${indexFromButton + 1}`, {
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


    const handleReset = () => {
        reset();
    };

    return <div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Title" {...register("title", {required: "Title is required", maxLength: 300})}/>
            {errors.title && <p>{errors.title.message}</p>}
            <input placeholder="Body" {...register("body", {required: "Body text is required", maxLength: 2000})}/>
            {errors.body && <p>{errors.body.message}</p>}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
        <hr/>
    </div>
}

export default ModifyPostForm