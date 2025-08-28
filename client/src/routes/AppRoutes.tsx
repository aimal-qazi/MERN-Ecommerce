import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../features/auth/Login"
import Register from "../features/auth/Register"
import CartPage from "../features/cart/CartPage"
import OrdersPage from "../features/orders/OrdersPage"
import ProtectedRoute from "../components/ProtectedRoute"
import HomePage from "../features/products/HomePage"
import NotFound from "../components/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes