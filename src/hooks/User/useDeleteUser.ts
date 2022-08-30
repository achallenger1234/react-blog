import { useState, useCallback } from 'react';


import axios from "axios";


import { LoginUser, useLoginUser } from "../Providers/useLoginUserProvider";



export const useDeleteUser = () => {
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    
    const loginUser: LoginUser = useLoginUser().loginUser
    console.log(loginUser);//email get ok
    
    
    // api叩いてinsert
    const deleteUser = useCallback(() => {
        
        console.log('delete')
        
        

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
    return { deleteUser, loading, error }
}