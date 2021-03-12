import React, {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext();


export const AutoProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    ); 

    useEffect(() => {
        try{
            localStorage.setItem("user", JSON.stringify(user))
        }catch(error ){
            localStorage.removeItem("user");
        }      
    }, [user])

    const contextValue = {
        user,
        login(){
            setUser({id: 1, username: 'james12'})
        },
        logout(){
            setUser(null);
        },
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}


export default AutoProvider;
