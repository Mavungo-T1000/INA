import { Button, CloseButton, Drawer, HStack, Portal, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import ArrowDown from "../../public/icons/arrow-down.svg"

const DrawerCustom = ({icon}:{icon:React.ReactNode}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
         {icon}
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
               <VStack  gap={4} flex={1} marginTop={4} alignItems={'center'} justifyContent={'center'}>
                          <Link href={'#'}><Text className='item-menu'>Pagina Inicial</Text></Link>
                      <Link href={'#'}><HStack gap={1} alignItems={'center'}>
                          <Text className='item-menu'>Sercicos</Text>
                          <ArrowDown height="20px" width="20px"/>
                          </HStack>
                          </Link>
                      <Link href={'#'}><Text className='item-menu'>Sobre nos</Text></Link>
                      <Link href={'#'}><Text className='item-menu'>Documentacao</Text></Link>
                      </VStack>
            </Drawer.Body>
            <Drawer.Footer>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}


export default DrawerCustom