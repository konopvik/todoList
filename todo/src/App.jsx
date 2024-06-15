import './App.css'
import axios from 'axios';
import {useEffect, useState} from "react";
import Post from "./components/Post/Post.jsx";
import Search from "./components/Search/Search.jsx";
import NewPostForm from "./components/NewPostForm/NewPostForm.jsx";

function App() {
    const [posts, setPosts] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([])
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isRerenderRequired, setIsRerenderRequired] = useState(false)
    const [postData, setPostData] = useState(null)


    useEffect(() => {
        axios.get('http://localhost:3001/api/posts')
            .then((postsAxios) => {
                setPosts(postsAxios.data)
            }).catch((err) => {
            console.log("Error in axios posts: ", err)
        })
        setIsRerenderRequired(false)
    }, [isRerenderRequired])
    console.log(posts)
    const buttonClick = () => {
        setIsButtonClicked(!isButtonClicked)
    }
    const handleNewPostAddingData = (data) => {
        setPostData(data);
    };
    console.log("postData", postData)
    const newPostAdding = () => {
        axios.post('http://localhost:3001/api/posts', {
            title: postData.title,
            body: postData.body,
            userId: postData.userId
        }, {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        setIsRerenderRequired(true)
    }

    return (
        <>
            <Search posts={posts}
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setResults={setResults}
                    results={results}/>
            <hr />
            {results.length !== 0 ? results.map((item) => {
                return <Post body={item.body} title={item.title} id={item.id} userId={item.userId}/>
            }) : <h1>Posts not found</h1>}
            <hr />
            <button onClick={() => {newPostAdding()}}>Create new post</button>
            <hr />
            <NewPostForm onFormSubmit={handleNewPostAddingData}/>
            <button onClick={() => (buttonClick())}>{isButtonClicked ? "Hide all posts" : "Show all posts"}</button>
            <hr />

            {isButtonClicked ? posts.map((post, index) => {
                return <Post userId={post.userId}
                             id={post.id}
                             title={post.title}
                             body={post.body}
                             indexFromButton={post.id}
                             posts={posts}
                             isRerenderRequired={isRerenderRequired}
                             setIsRerenderRequired={setIsRerenderRequired}/>
            }) : ""}
        </>
    )
}

export default App
