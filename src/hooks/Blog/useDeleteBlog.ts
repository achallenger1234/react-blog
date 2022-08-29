import { useState, useCallback } from 'react';


import axios from "axios";

import { SelectBlog, useSelectBlog } from "../Providers/useSelectBlogProvider"


export const useDeleteBlog = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    
    const SelectBlog: SelectBlog = useSelectBlog().selectBlog
    
    
    // api叩いてinsert
    const deleteBlog = useCallback((id: number) => {
        
        console.log('delete')
        console.log(id);
        
        

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
    return { deleteBlog, loading, error }
}