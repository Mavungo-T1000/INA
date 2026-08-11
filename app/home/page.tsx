"use client"
import { useAuth } from '@/context/useAuthContext'
import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  async function getKey(){
    const fetching = await fetch("", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({})
    })
  }
  return (
    <VStack padding={10} background={'white'}>
        <Box >

        </Box>
    </VStack>
  )
}
