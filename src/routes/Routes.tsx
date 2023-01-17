import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/AboutPage/AboutPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProtectedRoute from "./ProtectedRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<ProtectedRoute Component={HomePage} />} />
            <Route path="/about" element={<ProtectedRoute Component={AboutPage} />} />
        </Routes>
    )
}

export default AppRoutes
