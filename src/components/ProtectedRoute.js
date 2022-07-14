import UserContext from "../context/UserContext"
import {useContext} from "react"
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {

    const {getUser, isLogged, logout, getRole} = useContext(UserContext);

    let user = getUser();
   

    if (!user) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute;
