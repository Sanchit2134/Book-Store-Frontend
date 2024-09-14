import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("User");
    const [authUser, setAuthUser] = useState(         //State management if user is login their information we store in 
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext)  //useAUtth is  a custom hook, now we can access our "user" globally
