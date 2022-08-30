import { useState, useCallback } from 'react';



import axios from "axios";


import { Blog } from "../../types/blog";

export const useSerchMyBlogs = () => {
    const [serchMyBlogs, setSerchMyBlogs] = useState<Array<Blog>>([]);
    const getSerchMyBlogs = useCallback(() => {
        // axios.get('//jsonplaceholder.typicode.com/posts')
        axios.get('//jsonplaceholder.typicode.com/posts')
        .then( async res => {
            console.log(res.data)
            setSerchMyBlogs(res.data)
        })
        .catch()
        .finally()
    }, [])
    
    return { serchMyBlogs, getSerchMyBlogs }
}