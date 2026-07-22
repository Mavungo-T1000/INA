import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Logo from "../../public/icons/coollogo.svg"
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <VStack padding={10} background={'#161616'} >
        <HStack display={'grid'}  gridTemplateColumns={'repeat(auto-fit, minmax(min(300px, 100%), 1fr))'} alignItems={'flex-start'} gap={10} width={'100%'}>
            <VStack alignItems={'flex-start'}>
                <HStack alignItems={'center'} gap={0}>
                    <Logo style={{scale:1.5}} width="40px" height="40px"/>
                <Heading color={'white'} marginLeft={-2} marginTop={-3}>INAPI</Heading> 
                </HStack>
                <Text fontSize={12} color={'gray'}>INAPI sua api de geolocalizacao nacional</Text>
                <HStack>
                    <Button background={'white'} color={'gray'} borderRadius={50}>F</Button>
                    <Button background={'white'} color={'gray'} borderRadius={50}>I</Button>
                    <Button background={'white'} color={'gray'} borderRadius={50}>Y</Button>
                </HStack>
            </VStack>
            <VStack alignItems={'flex-start'}>
                <HStack alignItems={'center'} justifyContent={'flex-start'}  gap={0}>
                <Heading color={'white'} marginLeft={0} >Servicos</Heading> 
                </HStack>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Geolocalizacao</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Lista de Codigo Postal</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Reverse Geocode</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Mapas & Digital Twins</Text></Link>
            </VStack>
            <VStack alignItems={'flex-start'} gap={2}>
                <HStack alignItems={'center'} justifyContent={'flex-start'} gap={0}>
                <Heading color={'white'} marginLeft={0} >API</Heading> 
                </HStack>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>API Codigo Postal</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Provincia</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Bairro</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Rua</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Comuna</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Destrito</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Localizacao por Municipio</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Mapa Angola</Text></Link>
                <Link href={'#'}><Text _hover={{textDecoration:"underline"}} fontSize={12} color={'gray'}>Digital twin</Text></Link>
            </VStack>
        </HStack>
        
        <hr style={{ height:.5, width:"100%", color:"gray",borderColor:"gray", marginTop:10}}/>
        <Text color={'gray'} fontSize={12}>&copy; Copyright inta inc & INA {new Date().getFullYear()}</Text>
    </VStack>
  )
}
