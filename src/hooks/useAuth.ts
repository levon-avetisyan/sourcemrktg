import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/login'); // Redirect to login page
    }, [navigate]);

    return { logout };
};

export default useAuth;