import {createContext, useState} from "react";

const Context = createContext();

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState("");

    const getUserbyId = () => {

    }

    const isLogged = () => {
        if (user){ 
            return true
        } else {return false}

    }

    const getUser = () => {
        return user;
    }

    const getRole = () => {
        return user.role;
    }


    const logout = () => {
        setUser("");

    }

    const login = (user) => {
        console.log("el usuario logueado es"+user);
        console.log(user)
        setUser(user);
    }

    return (
        <Context.Provider value={{isLogged, getUser, login, logout, getRole}}>

            {children}

        </Context.Provider>
    )
}

export default Context;