import { useState, useCallback } from 'react';


export const useCreateBlog = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    
    // api叩いてinsert
    const insertBlog = useCallback((userId: number, title: string, text: string) => {
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
    return { insertBlog, loading, error }
}