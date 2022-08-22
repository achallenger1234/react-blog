import { useState } from "react";

import { useNavigate } from "react-router-dom"

import { useLoginUser, LoginUser } from "../../hooks/Providers/useLoginUserProvider";

export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { setLoginUser } = useLoginUser();
    const login = (email: string, password: string) => {
        setLoading(true);
        navigate('blog');
        setLoading(false);
        const loginUser: LoginUser = {
            email
        }
        setLoginUser(loginUser);
    }
    
    
    return { login, loading } 
}