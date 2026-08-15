"use client"
import { SelectCustom } from '@/components/structures/SelectCustom'
import { useAuth } from '@/context/useAuthContext'
import Icon from '@/utils/exportIcons'
import { Box, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TestarApiPage from './testarapi/page'
import { useRouter } from 'nextjs-toploader/app'

export default function Home() {
  const {user}:any = useAuth()
  const router = useRouter()
  async function getKey(){
    
  }
  return (
    <VStack flex={1} overflowY={'auto'} alignItems={'flex-start'} padding={10} background={'white'} height={'100vh'}>
        <Box width={'100%'}>
          <Heading fontSize={15} lineHeight={1.2}>Bem-vindo a INAPI, Senhor {user?.name}</Heading>
          <Text color={'gray'} fontSize={12}>Comece ja usando a nossa api</Text>
          <hr style={{width:'100%', marginTop:5}}/>
        </Box>
        <HStack justifyContent={'flex-start'}>
          <Box onClick={()=>{router.push('/home/testarapi')}} cursor={'pointer'} gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
              <Icon.Activity color='black'/>
              <Text color={'#1d1d1d'} fontSize={12}>Playground</Text>
          </Box>
          <Box onClick={()=>{router.push('/home/documentacao')}} cursor={'pointer'} gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
              <Icon.File color='black'/>
              <Text color={'#1d1d1d'} fontSize={12}>Documentação</Text>
          </Box>
          <Box onClick={()=>{router.push('/home/keys')}} cursor={'pointer'} gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
            <Icon.Key color='black'/>
            <Text color={'#1d1d1d'} fontSize={12}>Chaves</Text>
          </Box>
        </HStack>
        <hr/>
        <VStack marginTop={2}>
         <TestarApiPage/>
        </VStack>
    </VStack>
  )
}
