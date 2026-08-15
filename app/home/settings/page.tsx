"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Select,
  Button,
  Badge,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useAuth } from "@/context/useAuthContext";

const provincias = [
  "Luanda",
  "Benguela",
  "Huambo",
  "Huíla",
  "Cabinda",
  "Bié",
  "Malanje",
];

export default function DefinicoesPage() {

  // Placeholder initial values — replace with data loaded from
  // GET /api/utilizador/perfil in your backend.
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [provincia, setProvincia] = useState("Luanda");
  const email = "isidoro@example.com";
  const {user}:any = useAuth()
  const [aGuardar, setAGuardar] = useState(false);

  async function guardarAlteracoes() {
    setAGuardar(true);
    // Placeholder — replace with a real call to
    // PUT /api/utilizador/perfil in your backend.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setAGuardar(false);
    toaster.create({
      title: "Definições guardadas",
      duration: 3000,
    });
  }

  return (
    <Box bg="white" minH="100vh">
      <Container maxW="4xl" py={10}>
        <VStack align="start" gap={6}>
          <VStack align="start" gap={1}>
            <Heading as="h1" size="lg">
              Definições da conta
            </Heading>
            <Text color="gray.600">
              Consulte e atualize os seus dados pessoais.
            </Text>
          </VStack>

          

          <VStack
            align="start"
            gap={5}
            width="full"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={6}
          >
            <Heading as="h2" size="sm">
              Informação pessoal
            </Heading>

            <VStack>
              <Heading fontSize="sm">Nome completo</Heading>
              <Text fontSize={12}> {user?.name} </Text>
            </VStack>

            <VStack>
              <Heading fontSize="sm">email</Heading>
              <Text fontSize={12}> {user?.email} </Text>
            </VStack>

          </VStack>

        </VStack>
      </Container>
    </Box>
  );
}
