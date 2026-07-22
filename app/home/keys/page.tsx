"use client";

import { useState, useRef } from "react";
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

// Placeholder generator — replace with a real call to
// POST /api/chaves in your backend.
function gerarChaveFalsa() {
  const bloco = () =>
    Math.random().toString(36).slice(2, 10).padEnd(8, "0");
  return `inta_live_${bloco()}${bloco()}`;
}

function mascarar(chave: string) {
  return `${chave.slice(0, 12)}${"•".repeat(20)}${chave.slice(-4)}`;
}

export default function ChaveApiPage() {
  const [apiKey, setApiKey] = useState<string | null>(
    "inta_live_9f3ac72b0e21c8d4f6a1"
  );
  const [criadaEm] = useState("14 Jul 2026");
  const [ultimoUso] = useState("Há 2 horas");
  const [revelada, setRevelada] = useState(false);
  const { copy, copied } = useClipboard();

  const [dialogAberto, setDialogAberto] = useState<"gerar" | "eliminar" | null>(
    null
  );
  const cancelRef = useRef<HTMLButtonElement>(null);

  function confirmarGerarNovaChave() {
    // Placeholder — replace with a real call to
    // POST /api/chaves/gerar in your backend.
    const nova = gerarChaveFalsa();
    setApiKey(nova);
    setRevelada(true);
    setDialogAberto(null);
    toaster.create({
      title: "Nova chave gerada",
      description: "A chave anterior deixou de ser válida.",
      duration: 4000,
    });
  }

  function confirmarEliminarChave() {
    // Placeholder — replace with a real call to
    // DELETE /api/chaves in your backend.
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
              Chave de API sdsd
            </Heading>
            <Text color="gray.600">
              Use esta chave para autenticar pedidos à API da Inta Business.
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
                  onClick={() => setDialogAberto("gerar")}
                >
                  Gerar nova chave
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="red"
                  size="sm"
                  onClick={() => setDialogAberto("eliminar")}
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
                onClick={() => setDialogAberto("gerar")}
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
