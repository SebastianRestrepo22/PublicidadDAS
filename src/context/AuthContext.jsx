import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setUser(null);
            return;
        }

        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            setUser(null);
        }
    }, [localStorage.getItem("token")]);


    const logout = () => {
        localStorage.removeItem("token");
        setUser(null); // RESET del estado del usuario
    };


    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
