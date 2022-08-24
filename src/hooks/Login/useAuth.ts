import { useState, useCallback } from "react";

import { useNavigate } from "react-router-dom"

import axios from "axios";

import { useLoginUser, LoginUser } from "../../hooks/Providers/useLoginUserProvider";

import { LoginAuthUser } from "../../types/user";

export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();
    const login = useCallback((email: string, password: string) => {
        setLoading(true);
        axios.get<LoginAuthUser>(`//jsonplaceholder.typicode.com/users/${email}`)
        .then( async res  => { 
            if (res.data && password === '1') {
                
                
                
                
                
                //api叩いて認証
                
                
                //userId取得
            
                const userId = Number(email);
                
                
                navigate('blog');
                const loginUser: LoginUser = {
                    userId,
                    email
                }
                setLoginUser(loginUser);          
            } else { 
                console.log("missing");
                

            }

        })
        .catch( () => {console.log("missing");
            
        } )
        .finally( () => setLoading(false) )
        
    }, [])
    
    
    return { login, loading } 
}