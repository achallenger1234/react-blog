import { useState, useCallback } from 'react';



import axios from "axios";


import { Blog } from "../../types/blog";


import { SerchtBlog, useSerchBlog } from "../Providers/useSerchBlogProvider"




export const useAllBlogs = () => {
    
    const selectBlogObj: SerchtBlog = useSerchBlog().serchText
    console.log(selectBlogObj);
    
    
    const [blogs, setBlogs] = useState<Array<Blog>>([]);
    const getAllBlogs = useCallback(() => {
        if (selectBlogObj == null) {
            console.log('null')
            axios.get('//jsonplaceholder.typicode.com/posts')
            .then( async res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch()
            .finally()
        } else {
            const selectBlog: string = selectBlogObj.serchText
            console.log(selectBlog)
            axios.get(`//jsonplaceholder.typicode.com/posts/?userId=1`)
            .then( async res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch()
            .finally()
        }

            
    }, [selectBlogObj])
    
    return { blogs, getAllBlogs }
}