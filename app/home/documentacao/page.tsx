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
  Input,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";


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
  const [pesquisar, setPesquisar] = useState()
  async function Check(){

  }
  return (
    <Box  bg="white" overflowY={'auto'} height={'100%'}>
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
              Guia da INA
            </Heading>
            <Text color="gray.600" maxW="2xl">
              Tudo o que precisa de saber para localizar-se em angola
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
                Para começar a usar a INA, crie uma conta com o seu
                e-mail.pode comecar a verificar os nossos codigos postais
              </Text>
              
            </Section>

            <Rule />

            <Section id="compradores" title="Para compradores">
              <Text color="gray.700" lineHeight="1.8">
                Pode pesquisar provincias, bairros, distritos com a nossa api
              </Text>
              <Text color="gray.700" lineHeight="1.8">
                Após realizar a pesquisa por nome tambem pode ver o codigo postal
              </Text>
            </Section>

            <Rule />

            <Section id="lojistas" title="Para lojistas">
              <Text color="gray.700" lineHeight="1.8">
                A INA facilita a entrega de artigos com maior eficiencia
                garantindo localizacoes exactas adquiridas pela nossa equipe
              </Text>
              
            </Section>

            <Rule />

            <Section id="integracao" title="Integração via API">
              <Text color="gray.700" lineHeight="1.8">
                Lojistas podem usar os nossos servicos para poder
                fazer entregas nos quatro cantos do pais
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
{`curl -X POST https://ina.api.app.render// \\
  -H "api_key: 784bn....20924023" \\
  -H "Content-Type: application/json" \\
  -d '{
    "id_rua: "1",
    "nome": "25 de abril",
    "code": 125007
  }'`}
                </Code>
              </Box>
              <Text color="gray.600" fontSize="sm">
                Pode gerar sua api key fazendo login no nosso web app
              </Text>
            </Section>

            <Rule />

            <Section id="faq" title="Perguntas frequentes">
              <VStack align="start" gap={5}>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    Quanto custa o rpm da INA?
                  </Text>
                  <Text color="gray.600">
                    De momento a INA se encontra em fase de desenvolvimento,
                    apos, a aquisicao de mais dados definiremos esses valores
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    Como fazer login na INA
                  </Text>
                  <Text color="gray.600">
                    O login no nosso web app e totalmente gratuito e simples de se fazer,
                    apenas dirija-se ao nosso web app em : https://ina-ten.vercel.app/ e 
                    cliquar na opcao comecar agora
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="semibold" color="gray.800">
                    A Ina esta a contractar?
                  </Text>
                  <Text color="gray.600">
                    Por agora a INTA ainda nao esta contratando, mais em breve poderemos,
                    para mais informacoes contacte-nos em: 
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
