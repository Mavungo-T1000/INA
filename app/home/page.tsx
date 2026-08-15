"use client"
import { SelectCustom } from '@/components/structures/SelectCustom'
import { useAuth } from '@/context/useAuthContext'
import Icon from '@/utils/exportIcons'
import { Box, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  const {user}:any = useAuth()
  async function getKey(){
    
  }
  return (
    <VStack flex={1} alignItems={'flex-start'} padding={10} background={'white'} height={'100vh'}>
        <Box width={'100%'}>
          <Heading fontSize={15} lineHeight={1.2}>Bem-vindo a INAPI, Senhor {user?.name}</Heading>
          <Text color={'gray'} fontSize={12}>Comece ja usando a nossa api</Text>
          <hr style={{width:'100%', marginTop:5}}/>
        </Box>
        <HStack justifyContent={'flex-start'}>
          <Box gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
              <Icon.Activity color='black'/>
              <Text color={'#1d1d1d'} fontSize={12}>Playground</Text>
          </Box>
          <Box gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
              <Icon.File color='black'/>
              <Text color={'#1d1d1d'} fontSize={12}>Documentacao</Text>
          </Box>
          <Box gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} display={'flex'} borderWidth={1} height={100} width={100}>
            <Icon.Key color='black'/>
            <Text color={'#1d1d1d'} fontSize={12}>Chaves</Text>
          </Box>
        </HStack>
        <hr/>
        <VStack marginTop={10}>
          
          <SelectCustom title='Rotas INAPI' placeholder='teste as nossas rotas' items={[{label:"Provincia", value:"/Finder/api/provincia"},
            {label:"Comuna", value:"/Finder/api/comunaa"},
            {label:"Municipio", value:"/Finder/api/municipios"},
            {label:"Distrito", value:"/Finder/api/distritos"},
            {label:"Rua", value:"/Finder/api/ruas"},
            {label:"Bairro", value:"/Finder/api/bairros"}
          ]}/>

          <HStack>
            <VStack>

            </VStack>
            <VStack>

            </VStack>
          </HStack>
        </VStack>
    </VStack>
  )
}
