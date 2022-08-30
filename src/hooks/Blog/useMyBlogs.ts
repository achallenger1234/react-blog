import { useState,useCallback } from 'react';

import axios from "axios";

import { Blog } from "../../types/blog";

import { LoginUser, useLoginUser } from "../../hooks/Providers/useLoginUserProvider"

import { SerchtBlog, useSerchBlog } from "../Providers/useSerchBlogProvider"

export const useMyBlogs = () => {
    
    const arrayLoginUser: LoginUser = useLoginUser().loginUser
    const loginUser = arrayLoginUser.userId
    console.log(loginUser);
    
    const selectBlogObj: SerchtBlog = useSerchBlog().serchText
    console.log(selectBlogObj);
    
    const [blogs, setBlogs] = useState<Array<Blog>>([]);
    const getAllBlogs = useCallback(() => {
    
        if (selectBlogObj == null) {
            axios.get(`//jsonplaceholder.typicode.com/posts/?userId=${loginUser}`)
            .then( async res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch(
                //[].length=0だったらメッセージ
                )
            .finally()
        } else {
            const selectBlog: string = selectBlogObj.serchText
            console.log(selectBlog)
            axios.get(`//jsonplaceholder.typicode.com/posts/?userId=${loginUser}`)
            .then( async res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch()
            .finally()
    }
    }, [])
    
    return { blogs, getAllBlogs }
}