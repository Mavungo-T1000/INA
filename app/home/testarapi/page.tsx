"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  Input,
  Textarea,
  Button,
  Code,
  Badge,
} from "@chakra-ui/react";

const BASE_URL = "https://api.inta-business.com/v1";

const rotasSugeridas = [
  "/produtos",
  "/produtos/{id}",
  "/lojas",
  "/pedidos",
  "/pedidos/{id}",
];

type Resposta = {
  status: number;
  duracaoMs: number;
  corpo: string;
};

export default function TestarApiPage() {
  const [metodo, setMetodo] = useState("GET");
  const [rota, setRota] = useState("/produtos");
  const [autorizacao, setAutorizacao] = useState(
    "Bearer inta_live_9f3ac72b0e21c8d4f6a1"
  );
  const [corpo, setCorpo] = useState(
    '{\n  "nome": "Camisa de algodão",\n  "preco_aoa": 8500,\n  "quantidade": 20\n}'
  );
  const [aEnviar, setAEnviar] = useState(false);
  const [resposta, setResposta] = useState<Resposta | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const precisaCorpo = metodo === "POST" || metodo === "PUT";

  async function enviarPedido() {
    setAEnviar(true);
    setErro(null);
    setResposta(null);
    const inicio = performance.now();

    try {
      const opcoes: RequestInit = {
        method: metodo,
        headers: {
          Authorization: autorizacao,
          "Content-Type": "application/json",
        },
      };
      if (precisaCorpo) {
        opcoes.body = corpo;
      }

      const res = await fetch(`${BASE_URL}${rota}`, opcoes);
      const texto = await res.text();
      let corpoFormatado = texto;
      try {
        corpoFormatado = JSON.stringify(JSON.parse(texto), null, 2);
      } catch {
        // resposta não é JSON, mostrar tal como veio
      }

      setResposta({
        status: res.status,
        duracaoMs: Math.round(performance.now() - inicio),
        corpo: corpoFormatado,
      });
    } catch (e) {
      setErro(
        "Não foi possível contactar a API. Verifique a rota e a sua ligação."
      );
    } finally {
      setAEnviar(false);
    }
  }

  const statusColor = (status: number) => {
    if (status >= 200 && status < 300) return "green";
    if (status >= 400 && status < 500) return "orange";
    if (status >= 500) return "red";
    return "gray";
  };

  return (
    <Box bg="white" minH="100vh">
      <Container maxW="4xl" py={10}>
        <VStack align="start" gap={6}>
          <VStack align="start" gap={1}>
            <Heading as="h1" size="lg">
              Testar rotas da API
            </Heading>
            <Text color="gray.600">
              Envie pedidos reais à API da Inta Business e veja a resposta.
            </Text>
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
            <HStack width="full" gap={3}>
              <HStack flex="1" gap={0}>
                <Box
                  bg="gray.100"
                  color="gray.500"
                  px={3}
                  py={2}
                  borderLeftRadius="md"
                  fontSize="sm"
                  whiteSpace="nowrap"
                  borderWidth="1px"
                  borderRight="none"
                  borderColor="gray.200"
                >
                  {BASE_URL}
                </Box>
                <Input
                  value={rota}
                  onChange={(e) => setRota(e.target.value)}
                  borderLeftRadius="0"
                  fontFamily="mono"
                  fontSize="sm"
                />
              </HStack>
            </HStack>

            <HStack gap={2} flexWrap="wrap">
              {rotasSugeridas.map((sugestao) => (
                <Button
                  key={sugestao}
                  size="xs"
                  variant="outline"
                  fontFamily="mono"
                  onClick={() => setRota(sugestao)}
                >
                  {sugestao}
                </Button>
              ))}
            </HStack>

            <VStack align="start" gap={1} width="full">
              <Text fontSize="sm" fontWeight="medium" color="gray.700">
                Cabeçalho de autorização
              </Text>
              <Input
                value={autorizacao}
                onChange={(e) => setAutorizacao(e.target.value)}
                fontFamily="mono"
                fontSize="sm"
              />
            </VStack>

            {precisaCorpo && (
              <VStack align="start" gap={1} width="full">
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  Corpo do pedido (JSON)
                </Text>
                <Textarea
                  value={corpo}
                  onChange={(e) => setCorpo(e.target.value)}
                  fontFamily="mono"
                  fontSize="sm"
                  rows={6}
                />
              </VStack>
            )}

            <Button
              colorScheme="red"
              onClick={enviarPedido}
              loadingText="A enviar"
            >
              Enviar pedido
            </Button>
          </VStack>

          {erro && (
            <Box
              width="full"
              bg="red.50"
              borderWidth="1px"
              borderColor="red.200"
              borderRadius="md"
              p={4}
              color="red.700"
              fontSize="sm"
            >
              {erro}
            </Box>
          )}

          {resposta && (
            <VStack
              align="start"
              gap={3}
              width="full"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="lg"
              p={6}
            >
              <HStack gap={3}>
                <Badge colorScheme={statusColor(resposta.status)}>
                  {resposta.status}
                </Badge>
                <Text fontSize="sm" color="gray.500">
                  {resposta.duracaoMs} ms
                </Text>
              </HStack>
              <Box
                bg="gray.900"
                color="gray.100"
                borderRadius="md"
                p={4}
                width="full"
                overflowX="auto"
              >
                <Code
                  bg="transparent"
                  color="inherit"
                  fontSize="sm"
                  whiteSpace="pre"
                >
                  {resposta.corpo}
                </Code>
              </Box>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
