"use client"
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";



interface User{
    name : string | null,
    photo: string | null,
    email: string |  null,
    api_key : string |  null
}
interface ContextTypes {
    isAuthenticated: boolean | undefined,
    setAuthenticated: Function,
    user: User | null,
    setUser: Function
}
const AuthContext = createContext<ContextTypes | null>({
    setUser: ()=>{},
    setAuthenticated: ()=>{},
    user: null,
    isAuthenticated:false,
})


export default function AuthProvider({children}:{children:React.ReactNode}){
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()
    useEffect(()=>{

    }, [])
    return(
        <AuthContext.Provider value={{isAuthenticated , setAuthenticated , user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = ()=> useContext(AuthContext)