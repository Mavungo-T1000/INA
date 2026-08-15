"use client"
import { Spinner, VStack } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";



interface User{
    name : string | null,
    email: string |  null,
    token : string |  null
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
        async function entrar(){
            try {
            const email = localStorage.getItem('email')
            const token = localStorage.getItem('access_token')
            if(!email || !token) {
               return router.push('/')
            }
            const fetching = await fetch("http://localhost:9000/Finder/api/usuarios/me", {
            method:"POST",
            headers:{
            'Content-Type':"application/json"
            },
            body:JSON.stringify({email:email , token:token})
        })
            const data = await fetching.json() 
            setUser({name:data?.data?.name, email:data?.data?.email , token:data?.token})
            setAuthenticated(true)
            router.push('/home')
            } catch (error) {
                 router.push('/')
                return false
            }
            
        }
       entrar()
    }, [])
    if(user?.name && !isAuthenticated){
         
        return (
            <VStack width={'100%'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
                <Spinner size={'md'} color={'gray'}/>
            </VStack>
      ) 
    }
    return(
        <AuthContext.Provider value={{isAuthenticated , setAuthenticated , user , setUser}}>
            {(user?.name && !isAuthenticated) ?
            <VStack width={'100%'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
                <Spinner size={'md'} color={'gray'}/>
            </VStack> :
            children
            }
        </AuthContext.Provider>
    )
}



export const useAuth = ()=> useContext(AuthContext)