"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Code,
  Badge,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";

// 1px line used in place of the Divider component throughout this file.
function Rule() {
  return <Box height="1px" bg="gray.200" width="full" />;
}

const sections = [
  { id: "primeiros-passos", label: "Primeiros passos" },
  { id: "compradores", label: "Para compradores" },
  { id: "lojistas", label: "Para lojistas" },
  { id: "integracao", label: "Integração via API" },
  { id: "faq", label: "Perguntas frequentes" },
];

function SideNav() {
  return (
    <VStack
      as="nav"
      align="start"
      gap={1}
      position="sticky"
      top="24"
      minW="56"
    >
      <Text fontSize="xs" fontWeight="bold" color="gray.500" mb={2}>
        NESTA PÁGINA
      </Text>
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          fontSize="sm"
          color="gray.600"
          _hover={{ color: "red.600" }}
          py={1}
        >
          {section.label}
        </Link>
      ))}
    </VStack>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box as="section" id={id} pt={4} pb={12}>
      <Heading as="h2" size="lg" mb={4} scrollMarginTop="24">
        {title}
      </Heading>
      <VStack align="start" gap={4}>
        {children}
      </VStack>
    </Box>
  );
}

export default function DocumentacaoPage() {
  return (
    <Box bg="white">
      <Box bg="gray.50" borderBottom="1px solid" borderColor="gray.200">
        <Container maxW="6xl" py={12}>
          <VStack align="start" gap={3}>
            <Badge
              colorScheme="red"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="none"
              fontWeight="medium"
            >
              Documentação
            </Badge>
            <Heading as="h1" size="xl">
              Guia da Inta Business
            </Heading>
            <Text color="gray.600" maxW="2xl">
              Tudo o que precisa de saber para comprar, vender e integrar a
              sua loja na plataforma.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="6xl" py={12}>
        <Flex gap={12} align="start" direction={{ base: "column", md: "row" }}>
          <Box display={{ base: "none", md: "block" }}>
            <SideNav />
          </Box>

          <Box flex="1" minW="0">
            <Section id="primeiros-passos" title="Primeiros passos">
              <Text color="gray.700" lineHeight="1.8">
                Para começar a usar a Inta Business, crie uma conta com o seu
                e-mail ou número de telefone. Depois de confirmar a conta,
                pode escolher se quer comprar, vender, ou ambos — a mesma
                conta serve para os dois casos.
              </Text>
              
            </Section>

            <Rule />

            <Section id="compradores" title="Para compradores">
              <Text color="gray.700" lineHeight="1.8">
                Pode pesquisar produtos por categoria, loja ou província.
                Cada anúncio mostra o preço em Kwanzas, o estado do produto e
                as avaliações da loja, para que decida com confiança antes de
                finalizar a compra.
              </Text>
              <Text color="gray.700" lineHeight="1.8">
                Após confirmar um pedido, pode acompanhar o estado da entrega
                diretamente na secção “Os meus pedidos” do seu perfil.
              </Text>
            </Section>

            <Rule />

            <Section id="lojistas" title="Para lojistas">
              <Text color="gray.700" lineHeight="1.8">
                Abrir uma loja é gratuito. Depois de criar a conta, escolha
                “Tornar-me lojista”, preencha os dados do seu negócio e
                comece a publicar produtos com fotografias, preço e
                quantidade em stock.
              </Text>
              
            </Section>

            <Rule />

            <Section id="integracao" title="Integração via API">
              <Text color="gray.700" lineHeight="1.8">
                Lojistas com um catálogo maior podem sincronizar produtos
                automaticamente através da nossa API REST, em vez de os
                publicar um a um.
              </Text>
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
{`curl -X POST https://api.inta-business.com/v1/produtos \\
  -H "Authorization: Bearer SEU_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "nome": "Camisa de algodão",
    "preco_aoa": 8500,
    "quantidade": 20
  }'`}
                </Code>
              </Box>
              <Text color="gray.600" fontSize="sm">
                Pode gerar um token de acesso na secção “Definições da loja →
                Chaves de API” do seu painel.
              </Text>
            </Section>

            <Rule />

            <Section id="faq" title="Perguntas frequentes">
              <VStack align="start" gap={5}>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    Quanto custa vender na Inta Business?
                  </Text>
                  <Text color="gray.600">
                    Abrir e manter uma loja é gratuito. Aplicamos apenas uma
                    pequena comissão sobre vendas concluídas.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    Em quanto tempo a minha loja fica visível?
                  </Text>
                  <Text color="gray.600">
                    Assim que preencher os dados da loja e publicar o
                    primeiro produto, a loja fica visível de imediato.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    Posso vender fora de Angola?
                  </Text>
                  <Text color="gray.600">
                    Por agora a Inta Business está focada exclusivamente no
                    mercado angolano.
                  </Text>
                </Box>
              </VStack>
            </Section>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
