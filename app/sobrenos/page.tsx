"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Button,
} from "@chakra-ui/react";

// Small reusable divider replacement — a 1px line, since the Divider
// component is intentionally not used anywhere in this project.
function Rule() {
  return <Box height="1px" bg="gray.200" width="full" />;
}

const values = [
  {
    title: "Feito para o mercado angolano",
    text: "Preços em Kwanzas, catálogo em português e lojas organizadas por província, para que comprar e vender seja simples desde o primeiro dia.",
  },
  {
    title: "Lojistas em primeiro lugar",
    text: "Qualquer pequeno ou médio negócio pode abrir a sua loja na Inta Business em minutos, sem taxas escondidas.",
  },
  {
    title: "Confiança em cada compra",
    text: "Avaliações verificadas, suporte próximo e pagamentos protegidos dão segurança tanto a quem compra como a quem vende.",
  },
];

const stats = [
  { label: "Lojas ativas", value: "1.200+" },
  { label: "Produtos publicados", value: "18.000+" },
  { label: "Províncias alcançadas", value: "18" },
];

export default function SobrePage() {
  return (
    <Box bg="white">
      {/* Hero */}
      <Box bg="red.600" color="white">
        <Container maxW="4xl" py={20}>
          <VStack align="start" gap={5}>
            <Badge
              bg="whiteAlpha.300"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              textTransform="none"
              fontWeight="medium"
            >
              Sobre nós
            </Badge>
            <Heading as="h1" size="2xl" lineHeight="1.15">
              Um mercado digital feito para Angola crescer
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
              A Inta Business liga lojistas angolanos a compradores em todo o
              país, num único lugar simples, rápido e de confiança.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Mission */}
      <Container maxW="4xl" py={16}>
        <VStack align="start" gap={4}>
          <Heading as="h2" size="lg">
            A nossa missão
          </Heading>
          <Text color="gray.700" fontSize="md" lineHeight="1.8">
            Acreditamos que qualquer comerciante angolano, de uma pequena loja
            de bairro a uma marca em crescimento, merece uma vitrine digital
            à altura do seu negócio. A Inta Business nasceu para remover as
            barreiras técnicas e financeiras que normalmente impedem isso:
            basta criar uma conta, publicar os produtos e começar a vender.
          </Text>
        </VStack>
      </Container>

      <Rule />

      {/* Values */}
      <Container maxW="4xl" py={16}>
        <VStack align="start" gap={10}>
          <VStack align="start" gap={2}>
            <Heading as="h2" size="lg">
              Como pensamos o produto
            </Heading>
            <Text color="gray.600">
              Três ideias guiam cada decisão que tomamos.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} width="full">
            {values.map((item) => (
              <VStack
                key={item.title}
                align="start"
                gap={3}
                borderWidth="1px"
                borderColor="gray.200"
                borderRadius="lg"
                p={6}
                height="full"
              >
                <Box
                  width="8"
                  height="8"
                  borderRadius="full"
                  bg="red.50"
                  border="1px solid"
                  borderColor="red.200"
                />
                <Heading as="h3" size="sm">
                  {item.title}
                </Heading>
                <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                  {item.text}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Rule />

      {/* Stats */}
      <Container maxW="4xl" py={16}>
        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={8}>
          {stats.map((stat) => (
            <VStack key={stat.label} align="start" gap={1}>
              <Heading as="p" size="xl" color="red.600">
                {stat.value}
              </Heading>
              <Text color="gray.600">{stat.label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bg="gray.50">
        <Container maxW="4xl" py={16}>
          <VStack align="start" gap={5}>
            <Heading as="h2" size="lg">
              Pronto para começar?
            </Heading>
            <Text color="gray.700" maxW="xl">
              Crie a sua conta gratuita e junte-se aos lojistas que já vendem
              na Inta Business, ou explore o guia de utilização na nossa
              documentação.
            </Text>
            <HStack gap={4}>
              <Button   colorScheme="red" size="lg">
                Criar conta
              </Button>
              <Button
               
               
                variant="outline"
                colorScheme="red"
                size="lg"
              >
                Ver documentação
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
