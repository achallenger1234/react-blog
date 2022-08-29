import { useState, useCallback } from 'react';


import axios from "axios";


import { SelectBlog, useSelectBlog } from "../Providers/useSelectBlogProvider"


export const useChangeUser = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    
    // api叩いてinsert
    const changeUser = useCallback((newName: string, oldPassword: string, newPassword: string) => {
        
        setLoading(true)
        
        console.log('changeUser')
        console.log(newName)
        console.log(oldPassword)
        console.log(newPassword)
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
    return { changeUser, loading, error }
}