import styles from './NewPostForm.module.scss'
import { useForm } from "react-hook-form";

const NewPostForm = ({ onFormSubmit }) => {
    const {register,
        handleSubmit, formState: {errors} } = useForm()
    const onSubmit = data => {
        onFormSubmit(data)
    };
    return <div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="User ID" {...register("userId", { required: 'User ID is required', maxLength: 5, pattern: {value: /^\d+$/, message: "Use only digits!"} })}/>
            {errors.userId && <p>{errors.userId.message}</p>}
            <input placeholder="Title" {...register("title", { required: "Title is required", maxLength: 300 })}/>
            {errors.title && <p>{errors.title.message}</p>}
            <input placeholder="Body" {...register("body", { required: "Body text is required", maxLength: 2000 })}/>
            {errors.body && <p>{errors.body.message}</p>}
            <button>Submit</button>
        </form>
        <hr/>
    </div>
}

export default NewPostForm