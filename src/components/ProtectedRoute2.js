import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute2 = ({ children }) => {
    const location = useLocation();
    const login = localStorage.getItem('isLoggedIn')
    if (login) {
        return <Navigate to="/home" state={{ path: location.pathname }} />;
    }
    return children;
};