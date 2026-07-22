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
  const [nome, setNome] = useState("Isidoro Neto");
  const [telefone, setTelefone] = useState("+244 923 000 000");
  const [provincia, setProvincia] = useState("Luanda");
  const email = "isidoro@example.com";

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
              <Input value={nome} onChange={(e) => setNome(e.target.value)} />
            </VStack>

            <VStack>
              <Heading fontSize="sm">Telefone</Heading>
              <Input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </VStack>

            <VStack>
              <Heading fontSize="sm">Província</Heading>
              
            </VStack>

            <Button
              colorScheme="red"
              onClick={guardarAlteracoes}
              loadingText="A guardar"
            >
              Guardar alterações
            </Button>
          </VStack>

          <VStack
            align="start"
            gap={4}
            width="full"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="lg"
            p={6}
          >
            <Heading as="h2" size="sm">
              E-mail
            </Heading>

            <VStack>
              <HStack gap={2} mb={1}>
                <Heading fontSize="sm" mb={0}>
                  Endereço de e-mail
                </Heading>
                <Badge colorScheme="green" fontSize="xs">
                  Verificado
                </Badge>
              </HStack>
              <Input value={email}  bg="gray.50" color="gray.600" />
              <Text>
                Para alterar o e-mail associado à conta, contacte o suporte.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
