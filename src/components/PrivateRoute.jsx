import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    // проверка, авторизован/аутентифицирован ли пользователь
    const userAuthenticated = useSelector(state => state.auth.user)
    // const userAuthenticated = true

    if (userAuthenticated) {
        return <Outlet />
    }

    return <Navigate to="/login" />
}
export default PrivateRoute