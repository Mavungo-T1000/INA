"use client"
import Icon from '@/utils/exportIcons'
import { Avatar, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from "../../public/icons/coollogo.svg"
import { useAuth } from '@/context/useAuthContext'
import {useRouter}  from "nextjs-toploader/app"
import { usePathname } from 'next/navigation'
export default function SideBar() {
    const {user , setAuthenticated , setUser}:any = useAuth()
    const [activeMenu, setActiveMenu] = useState("/")
    const router = useRouter()
    async function logout(){
        localStorage.removeItem('access_token');
        localStorage.removeItem('email')
        setAuthenticated(false)
        setUser(null)
        router.push('/')
    }
  return (
    <VStack alignItems={'flex-start'} gap={5} width={270} borderRadius={10} padding={5} background={'#fafafa'} height={'100vh'}>
        <Box className='mobile-logo'  marginLeft={4}  gap={3} cursor={'pointer'} alignItems={'center'} display={'flex'}>
                    <Logo style={{scale:2}}  />
                    <VStack alignItems={'flex-start'} gap={0}>
                       <Heading lineHeight={1} marginTop={4} fontSize={28}>INAPI</Heading> 
                       <Text color={'gray'} fontSize={7}>API de geolocalizacao</Text>
                    </VStack>
                    
                </Box>
        <HStack _hover={{background:"#e6e6e6", borderRadius:10}} onClick={()=>{router.push('/home/testarapi'), setActiveMenu('testarapi')}} cursor={'pointer'} marginTop={5} padding={4} width={'100%'} borderRadius={10} 
        background={activeMenu == 'testarapi' ? '#ececef' : "transparent"}>
            <Icon.Activity color='gray' height={17} width={17}/>
            <Text fontSize={12} color={'#222222'}>Playground</Text>
        </HStack>
        <HStack background={activeMenu == 'keys' ? '#ececef' : "transparent"} onClick={()=>{router.push('/home/keys'), setActiveMenu('keys')}} cursor={'pointer'} _hover={{background:"#e6e6e6", borderRadius:10}} padding={4} width={'100%'}>
            <Icon.Key color='gray' height={17} width={17}/>
            <Text fontSize={12} color={'#222222'}>Chaves API</Text>
        </HStack>
        <HStack background={activeMenu == 'doc' ? '#ececef' : "transparent"} onClick={()=>{router.push('/home/documentacao'), setActiveMenu('doc')}} cursor={'pointer'} _hover={{background:"#e6e6e6", borderRadius:10}} padding={4} width={'100%'}>
            <Icon.File color='gray' height={17} width={17}/>
            <Text fontSize={12} color={'#222222'}>Documentacao</Text>
        </HStack>
        <HStack background={activeMenu == 'sett' ? '#ececef' : "transparent"} onClick={()=>{router.push('/home/settings'), setActiveMenu('sett')}} cursor={'pointer'} _hover={{background:"#e6e6e6", borderRadius:10}} padding={4} width={'100%'}>
            <Icon.Settings color='gray' height={17} width={17}/>
            <Text fontSize={12} color={'#222222'}>Definicoes</Text>
        </HStack>
         <HStack cursor={'pointer'} _hover={{background:"#e6e6e6", borderRadius:10}}  onClick={logout} padding={4} width={'100%'}>
            <Text fontSize={12} color={'red'}>Sair</Text>
        </HStack>
        <HStack cursor={'pointer'} _hover={{background:"#e6e6e6", borderRadius:10}} borderRadius={10} width={'100%'} borderWidth={1} padding={2} alignSelf={'flex-end'} gap={2} justifyContent={'flex-start'} alignItems={'center'}>
            <Avatar.Root>
                <Avatar.Fallback name={user?.name}/>
            </Avatar.Root>
            <Text color={'gray'} fontSize={12}>{user?.email}</Text>
        </HStack>
    </VStack>
  )
}
