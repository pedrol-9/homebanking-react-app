import { useSelector } from "react-redux";
import { Route } from "react-router-dom";


const AuthorizedRoutes = (route) => {

    // route sería cada elemento del array en App.jsx que contiene las rutas
    const loggedIn = useSelector((state) => state.authReducer.loggedIn);

    return loggedIn && <Route path={route.path} key={route.key} element={route.element} /> 
}

export default AuthorizedRoutes