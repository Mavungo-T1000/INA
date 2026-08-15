"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  IconButton,
  Code,
  Badge,
  Link,
  useClipboard,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { toaster } from "@/components/ui/toaster";
import { useAuth } from "@/context/useAuthContext";

// Placeholder generator — replace with a real call to
// POST /api/chaves in your backend.
async function gerarChaveFalsa(token:string, email:string) {
  const fetching = await fetch("https://ina.up.railway.app/Finder/api/usuarios/createApiKey", {
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({token , email})
  })
  if(!fetching.ok) {
    return false
  }
  const chave = await fetching.json()
  return chave.api_key
}
async function getChaves(token:string, email:string) {
  const fetching = await fetch("https://ina.up.railway.app/Finder/api/usuarios/apikey", {
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({token , email})
  })
  if(!fetching.ok) {
    return false
  }
  const chave = await fetching.json()
  return chave.api_key
}
async function deletarChave(token:string, email:string) {
  const fetching = await fetch("https://ina.up.railway.app/Finder/api/usuarios/deleteApiKey", {
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({token , email})
  })
  if(!fetching.ok) {
    return false
  }
  const chave = await fetching.json()
  return chave.success
}
function mascarar(chave: string) {
  return `${chave.slice(0, 12)}${"•".repeat(20)}${chave.slice(-4)}`;
}

export default function ChaveApiPage() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [criadaEm] = useState("");
  const [ultimoUso] = useState("");
  const [revelada, setRevelada] = useState(false);
  const { copy, copied } = useClipboard();

  const [dialogAberto, setDialogAberto] = useState<"gerar" | "eliminar" | null>(
    null
  );
  const cancelRef = useRef<HTMLButtonElement>(null);
const {user}:any = useAuth()
useEffect(()=>{
    async function update(){
      if(!user?.token || !user?.email) return
      const chave = await getChaves(user.token , user.email)
      setApiKey(chave)
    }
    update()
}, [])
 async function confirmarGerarNovaChave() {
    // Placeholder — replace with a real call to
    // POST /api/chaves/gerar in your backend.

    const nova : any= await gerarChaveFalsa(user.token, user.email);
    setApiKey(nova);
    setRevelada(true);
    setDialogAberto(null);
    toaster.create({
      title: "Nova chave gerada",
      description: "A chave anterior deixou de ser válida.",
      duration: 4000,
    });
  }

 async function confirmarEliminarChave() {
    // Placeholder — replace with a real call to
    // DELETE /api/chaves in your backend.
    const deletar = await deletarChave(user.token , user.email)
    setApiKey(null);
    setDialogAberto(null);
    toaster.create({
      title: "Chave eliminada",
      duration: 4000,
    });
  }

  return (
    <Box bg="white" minH="100vh">
      <Container maxW="4xl" py={10}>
        <VStack align="start" gap={6}>
          <VStack align="start" gap={1}>
            <Heading as="h1" size="lg">
              Chave de API INAPI
            </Heading>
            <Text color="gray.600">
              Use esta chave para autenticar pedidos à API da INAPI.
            </Text>
          </VStack>

          {apiKey ? (
            <VStack
              align="start"
              gap={5}
              width="full"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={6}
            >
              <HStack justify="space-between" width="full">
                <Badge colorScheme="green" fontWeight="medium">
                  Ativa
                </Badge>
                <HStack gap={4} fontSize="sm" color="gray.500">
                  <Text>Criada em {criadaEm}</Text>
                  <Text>Último uso: {ultimoUso}</Text>
                </HStack>
              </HStack>

              <HStack
                width="full"
                bg="gray.50"
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="md"
                px={4}
                py={3}
                justify="space-between"
              >
                <Code bg="transparent" fontSize="sm">
                  {revelada ? apiKey : mascarar(apiKey)}
                </Code>
                <HStack gap={1}>
                  <IconButton
                    aria-label={revelada ? "Ocultar chave" : "Mostrar chave"}
                    size="sm"
                    variant="ghost"
                    onClick={() => setRevelada((v) => !v)}
                  />
                  <IconButton
                    aria-label="Copiar chave"
                    size="sm"
                    variant="ghost"
                    onClick={copy}
                  />
                </HStack>
              </HStack>

              <HStack gap={3}>
                <Button
                  variant="outline"
                  colorScheme="red"
                  size="sm"
                  onClick={() => confirmarGerarNovaChave()}
                >
                  Gerar nova chave
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="red"
                  size="sm"
                  onClick={() => confirmarEliminarChave()}
                >
                  Eliminar chave
                </Button>
              </HStack>
            </VStack>
          ) : (
            <VStack
              align="center"
              justify="center"
              gap={4}
              width="full"
              borderWidth="1px"
              borderStyle="dashed"
              borderColor="gray.300"
              borderRadius="lg"
              py={14}
            >
              <Text color="gray.600">Ainda não tem nenhuma chave de API.</Text>
              <Button
                colorScheme="red"
                onClick={() =>confirmarGerarNovaChave()}
              >
                Gerar chave
              </Button>
            </VStack>
          )}

          <HStack
            gap={6}
            fontSize="sm"
            pt={2}
            borderTop="1px solid"
            borderColor="gray.100"
            width="full"
          >
            <Link as={NextLink} href="/documentacao#integracao" color="red.600">
              Ver documentação da API
            </Link>
            <Link as={NextLink} href="/painel/api/testar" color="red.600">
              Testar rotas da API
            </Link>
          </HStack>
        </VStack>
      </Container>

    </Box>
  );
}
