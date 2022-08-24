import { useState } from 'react';

import axios from "axios";

import { Blog } from "../../types/blog";

import { LoginUser, useLoginUser } from "../../hooks/Providers/useLoginUserProvider"

export const useMyBlogs = () => {
    
    const arrayLoginUser: LoginUser = useLoginUser().loginUser
    const loginUser = arrayLoginUser.userId
    console.log(loginUser);
    
    const [blogs, setBlogs] = useState<Array<Blog>>([]);
    const getAllBlogs = () => {
        axios.get(`//jsonplaceholder.typicode.com/posts/?userId=${loginUser}`)
        .then( async res => {
            console.log(res.data)
            setBlogs(res.data)
        })
        .catch(
            //[].length=0だったらメッセージ
            )
        .finally()
    }
    
    return { blogs, getAllBlogs }
}