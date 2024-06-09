import {useEffect, useState} from "react";

const onChangeInput = (e) => {
    return e.target.value
}

const Search = ({ posts, inputValue, setInputValue, results, setResults }) => {


    useEffect(() => {
        setResults(posts.filter((post) => post.id.toString() === inputValue));
    }, [inputValue, posts]);


    console.log("Results",results)
    return (
        <input placeholder="Write post id"
               value={inputValue}
               onChange={(e) => (setInputValue(onChangeInput(e)))} />
    )
}

export default Search