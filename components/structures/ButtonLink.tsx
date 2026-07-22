"use client"
import { Button } from '@chakra-ui/react'
import { useRouter } from 'nextjs-toploader/app'
import React from 'react'

export default function ButtonLink({link, text}:{link:string, text:string}) {
    const router = useRouter()
  return (
    <Button background={"blue"} borderRadius={50} onClick={()=>{router.push(link)}}>{text}</Button>
  )
}
