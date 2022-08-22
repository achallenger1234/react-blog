import { useState } from "react";

import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const login = (email: string, password: string) => {
        setLoading(true);
        navigate('blog')
        setLoading(false)
    }
    
    
    return { login, loading } 
}