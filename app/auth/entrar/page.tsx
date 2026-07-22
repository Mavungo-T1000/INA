"use client"
import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../../public/icons/coollogo.svg"
import {useRouter}  from "nextjs-toploader/app"
import Link from 'next/link'

export default function Entrar() {
    const router = useRouter()
  return (
    <VStack padding={10} width={'100%'} background={'#f6f6f6'}>
        <VStack gap={4} padding={10} background={'white'} borderRadius={20} width={'100%'} maxWidth={400}>
            <Box className='mobile-logo'  marginLeft={4}  gap={3} cursor={'pointer'} alignItems={'center'} display={'flex'}>
                        <Logo style={{scale:2}}  />
                        <VStack alignItems={'flex-start'} gap={0}>
                           <Heading lineHeight={1} marginTop={4} fontSize={28}>INAPI</Heading> 
                           <Text color={'gray'} fontSize={7}>API de geolocalizacao</Text>
                        </VStack>
                        
            </Box>
            <Text fontSize={12} marginBottom={2}>Comece agora sua conta na INAPI preenchedo abaixo</Text>
            <Box width={'100%'}>
                <Text color={'gray'} fontWeight={500} fontSize={12}>Email</Text>
                <Input color={'black'} background={'#f6f6f6'} borderRadius={20} outline={'none'} fontSize={12} placeholder='Digite seu email'/> 
            </Box>
            <Box width={'100%'}>
                <Text color={'gray'} fontWeight={500} fontSize={12}>Senha</Text>
                <Input color={'black'} background={'#f6f6f6'} borderRadius={20} outline={'none'} fontSize={12} placeholder='Digite sua Senha'/> 
            </Box>
        <Button width={'100%'} background={'blue'}>Criar conta</Button>  
        <HStack gap={2} alignItems={'center'} marginTop={2}>
           <Text fontSize={12} >Ainda nao tem conta?</Text> 
           <Link href={'/auth'} ><Text color={'blue'} fontSize={12}>clique aqui</Text></Link>
        </HStack>
        
        </VStack>
        
    </VStack>
  )
}
