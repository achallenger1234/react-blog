import { useState, useCallback } from 'react';



import axios from "axios";


import { Blog } from "../../types/blog";

export const useSerchAllBlogs = () => {
    const [serchAllBlogs, setSerchAllBlogs] = useState<Array<Blog>>([]);
    const getSerchAllBlogs = useCallback(() => {
        axios.get('//jsonplaceholder.typicode.com/posts')
        // axios.get('//jsonplaceholder.typicode.com/posts') //クエリ
        .then( async res => {
            console.log(res.data)
            setSerchAllBlogs(res.data)
        })
        .catch()
        .finally()
    }, [])
    
    return { serchAllBlogs, getSerchAllBlogs }
}