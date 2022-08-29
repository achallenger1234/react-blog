import { useState, useCallback } from 'react';


import axios from "axios";


import { SelectBlog, useSelectBlog } from "../Providers/useSelectBlogProvider"


export const useChangeBlog = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    
    const SelectBlog: SelectBlog = useSelectBlog().selectBlog
    
    // api叩いてinsert
    const changeBlog = useCallback((id: number, userId: number, title: string, text: string) => {
        
        console.log(SelectBlog)
        setLoading(true)
        // api
        // .post( *endpoint )
        // .then(
        //     //insert
            
        //     //success alert
        
            // setError('success')
            
        // )
        // .catch(
        //     //error
            // setError('error')
        // )
        // .finally(
        //     setLoading(false)
        // ) 
            
    }, [])
    return { changeBlog, loading, error }
}