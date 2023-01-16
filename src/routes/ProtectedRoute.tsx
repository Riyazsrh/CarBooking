import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../services/browser/useLocalStorage";

interface ProtectedRouteProps {
  Component: React.ReactNode | any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ Component }) => {
  const navigate = useNavigate();
  const [token] = useLocalStorage('auth-token')

  useEffect(() => {
    if (token === true) {
      navigate('/home')
    } else {
      navigate('/')
    }
  }, [])
  return (
    <Component />
  )
}

export default ProtectedRoute
