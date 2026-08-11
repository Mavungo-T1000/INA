"use client"
import { auth, db } from "@/config/firebase";
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
        const unsubscribe = ()=>{
            onAuthStateChanged(auth,  async(u)=>{
                if(!u?.uid){
                    setUser({name:u?.displayName || null , photo:u?.photoURL || null , email:u?.email || null , api_key:  null})
                    setAuthenticated(false)
                    router.push('/')
                    return
                }
                if(u.uid){
                    const docref = doc(db, "profile", u.uid);
                    const data = await getDoc(docref);
                    const user = data.exists() ? data.data() : {}
                    setUser({name:user?.name || null , photo:user?.photo || null , email:user?.email || null , api_key:user?.api_key})
                    setAuthenticated(true)
                    router.push('/home')
                    return
                }
            })
        }

        return unsubscribe()
    }, [])
    return(
        <AuthContext.Provider value={{isAuthenticated , setAuthenticated , user , setUser}}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = ()=> useContext(AuthContext)