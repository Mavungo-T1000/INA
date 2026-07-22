import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function InfoAuth() {
  return (
    <VStack width={'100%'} background={'white'} gap={0}>
        <Box width={'100%'} height={'50vh'}  background={'#f6f6f6'}>

        </Box>
        <VStack background={'white'} borderRadius={10} padding={10} alignItems={'flex-start'}>
            <Heading fontSize={34}>INAPI Admin Suporte</Heading>
            <HStack>

            </HStack>
            <HStack  alignItems={'center'} marginTop={4}>
                <Text>Apenas usuarios admin podem requer servicos de suporte para a pagina admin,
                caso o senhor nao seja um usuario admin, o senhor pode accessar ao centro de ajuda
                para usuarios clicando no link a seguir 
            </Text>
            </HStack>
            
        </VStack>

        <VStack width={'100%'} padding={10} paddingTop={2} alignItems={'flex-start'}>
            <Heading>Perguntas mais frequentes</Heading>
            <Box borderTopWidth={1} width={'100%'}>
                <Link href={'#'}><Heading  fontSize={12}>Como fazer login na pagina admin?</Heading></Link>
            </Box>
         </VStack>
    </VStack>
  )
}
