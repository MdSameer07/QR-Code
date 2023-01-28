import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute1 = ({ children }) => {
  const location = useLocation();
  const login = localStorage.getItem('isLoggedIn')
  if (!login) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};