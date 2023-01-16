import { Route, Routes } from "react-router-dom"
import AboutPage from "../pages/AboutPage/AboutPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProtectedRoute from "./ProtectedRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/about" element={<ProtectedRoute Component={AboutPage}/>} />
            <Route path="/home" element={<ProtectedRoute Component={HomePage}/>} />
        </Routes>
    )
}

export default AppRoutes
