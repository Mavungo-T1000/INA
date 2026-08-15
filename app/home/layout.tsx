import SideBar from '@/components/structures/SideBar';
import { HStack, VStack } from '@chakra-ui/react';
import React from 'react'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <HStack className='no-scroll' overflow={'hidden'} padding={2} height={'100vh'} alignItems={'flex-start'}>
      <SideBar/>
      {children}
    </HStack>
  )
}
