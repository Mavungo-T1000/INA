"use client"
import { Avatar, Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import ArrowDown from "../../public/icons/arrow-down.svg"
import Logo from "../../public/icons/coollogo.svg"
import React from 'react'
import Menu from "../../public/icons/menus.svg"
import {useRouter}  from "nextjs-toploader/app"
import DrawerCustom from './Drawer'

export default function Navbar() {
    const router = useRouter()
    const user = true
  return (
    <HStack padding={10}  alignItems={'center'} borderBottomWidth={1}>
        <Box className='mobile-logo'  marginLeft={4} onClick={()=>{router.push('/')}} gap={3} cursor={'pointer'} alignItems={'center'} display={'flex'}>
            <Logo style={{scale:2}}  />
            <VStack alignItems={'flex-start'} gap={0}>
               <Heading lineHeight={1} marginTop={4} fontSize={28}>INAPI</Heading> 
               <Text color={'gray'} fontSize={7}>API de geolocalizacao</Text>
            </VStack>
            
        </Box>
        <HStack className='desktop' gap={4} flex={1} display={user ? "none" : "flex"} marginTop={4} alignItems={'center'} justifyContent={'center'}>
            <Link href={'#'}><Text className='item-menu'>Pagina Inicial</Text></Link>
        <Link href={'/servicos'}><HStack gap={1} alignItems={'center'}>
            <Text className='item-menu'>Sercicos</Text>
            <ArrowDown height="20px" width="20px"/>
            </HStack>
            </Link>
        <Link href={'/sobrenos'}><Text className='item-menu'>Sobre nos</Text></Link>
        <Link href={'/documentacao'}><Text className='item-menu'>Documentacao</Text></Link>
        </HStack>
<HStack gap={4} alignItems={'center'}>
        <Box  className='mobileOnly' >
           <DrawerCustom
           icon={<Menu height="40px" width="40px"/>}
           /> 
        </Box>
        
        <Button  display={user ? "none" : "block"}  className='desktop' onClick={()=>{router.push('/auth')}}  marginLeft={4} background={'blue'} borderRadius={50}>
            Criar Conta
        </Button>
        <Avatar.Root display={!user ? "none" : "flex"}>
            <Avatar.Fallback name='name'/>

        </Avatar.Root>
</HStack>
        
    </HStack>
  )
}
