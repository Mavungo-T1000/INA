"use client"
import { Box, Button, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from "../../../public/icons/coollogo.svg"
import {useRouter}  from "nextjs-toploader/app"
import Link from 'next/link'

export default function EntrarAdmin() {
    const router = useRouter()
    const [codigoacesso, setCodigoacesso] = useState(false)
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
            <Text fontSize={12} marginBottom={2}>Accesse sua conta admin abaixo</Text>
            <Box width={'100%'}>
                <Text color={'gray'} fontWeight={500} fontSize={12}>Email</Text>
                <Input color={'black'} background={'#f6f6f6'} borderRadius={20} outline={'none'} fontSize={12} placeholder='Digite seu email'/> 
            </Box>
            <Box width={'100%'}>
                <Text color={'gray'} fontWeight={500} fontSize={12}>Senha</Text>
                <Input color={'black'} background={'#f6f6f6'} borderRadius={20} outline={'none'} fontSize={12} placeholder='Digite sua Senha'/> 
            </Box>
            <Box width={'100%'} display={!codigoacesso ? 'flex' : 'none'}>
                <Button onClick={()=>{setCodigoacesso(true)}} _hover={{background:"blue", color:"white"}} color={'blue'} variant={'outline'} borderColor={'blue'} fontSize={12}>Receber Codigo de Acesso</Button>
            </Box>
            <HStack width={'100%'} display={codigoacesso ? 'flex' : 'none'}>
                <Box width={'100%'}>
                    <Text color={'gray'} fontWeight={500} fontSize={12}>Codigo de accesso</Text>
                    <Input color={'black'} background={'#f6f6f6'} borderRadius={20} outline={'none'} fontSize={12} placeholder='Digite seu codigo de acesso'/> 
                </Box>    
            </HStack>
            
        <Button width={'100%'} background={'blue'}>Entrar</Button>  
        <HStack gap={2} alignItems={'center'} marginTop={2}>
           <Text fontSize={12} >Alguma dificuldade entrando?</Text> 
           <Link href={'/admin/authinfo'} ><Text color={'blue'} fontSize={12}>clique aqui</Text></Link>
        </HStack>
        
        </VStack>
        
    </VStack>
  )
}
