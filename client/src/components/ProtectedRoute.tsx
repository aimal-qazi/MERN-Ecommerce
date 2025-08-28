import type { ReactNode } from "react"
import { useAuthStore } from "../store/auth"
import { Navigate } from "react-router-dom";

interface ProtectedRouterProps {
    children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouterProps) => {
    const token = useAuthStore((state) => state.token);

    if (!token) {
        return <Navigate to="/login" replace />
    }

    return <>{children}</>
}   

export default ProtectedRoute