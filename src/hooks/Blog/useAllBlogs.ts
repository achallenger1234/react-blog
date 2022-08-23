import { useState } from 'react';



import axios from "axios";


import { Blog } from "../../types/blog";

export const useAllBlogs = () => {
    const [blogs, setBlogs] = useState<Array<Blog>>([]);
    const getAllBlogs = () => {
        axios.get('//jsonplaceholder.typicode.com/posts')
        .then( async res => {
            console.log(res.data)
            setBlogs(res.data)
        })
        .catch()
        .finally()
    }
    
    return { blogs, getAllBlogs }
}