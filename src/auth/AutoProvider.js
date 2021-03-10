import React, {createContext, useState} from 'react'

export const AuthContext = createContext();


export const AutoProvider = ({children}) => {
    const [user, setUser] = useState(null); 

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
