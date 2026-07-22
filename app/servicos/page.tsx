"use client";

/**
 * Service page — INAPI: benefits of a modern postal code system.
 *
 * Place at: app/servicos/page.tsx (Next.js App Router)
 * Built entirely with Chakra UI components (Box, Flex, SimpleGrid, Heading,
 * Text, Link, etc). Uses next/font for typography and a small amount of
 * scroll-tied CSS (no animation library) for the reveal-on-scroll effect,
 * consistent with the rest of the site.
 */

import { useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"] });

/* ------------------------------------------------------------------ */
/* Scroll-tied reveal (progress follows the scrollbar, reversible)     */
/* ------------------------------------------------------------------ */

function useScrollReveal<T extends HTMLElement>(startVh = 0.85, endVh = 0.55) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (reduceMotion) {
        el.style.setProperty("--p", rect.top < vh && rect.bottom > 0 ? "1" : "0");
        return;
      }
      const startPx = vh * startVh;
      const endPx = vh * endVh;
      const raw = (startPx - rect.top) / (startPx - endPx);
      el.style.setProperty("--p", Math.min(1, Math.max(0, raw)).toFixed(3));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [startVh, endVh]);

  return ref;
}

/* ------------------------------------------------------------------ */
/* Content                                                              */
/* ------------------------------------------------------------------ */

type Benefit = {
  code: string;
  title: string;
  text: string;
  accent: string;
  icon: (props: { color: string }) => React.ReactElement;
};

const BENEFITS: Benefit[] = [
  {
    code: "UR",
    title: "Urbanização",
    accent: "#2F855A",
    text: "Os códigos postais contribuem diretamente para uma urbanização mais organizada e eficiente. Através da identificação estruturada de ruas, bairros e localidades, torna-se mais fácil planear o crescimento urbano, organizar serviços, como o saneamento básico, e melhorar a gestão do território. Um sistema postal moderno ajuda a reduzir a desorganização espacial, facilita a localização de infraestruturas e apoia o desenvolvimento sustentável das cidades. Com dados territoriais bem estruturados, é possível criar comunidades mais acessíveis, funcionais e preparadas para o futuro.",
    icon: ({ color }) => (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M6 34V14l7-5 7 5v20M20 34V9l7-5 7 5v25" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 34h28" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 20h3M10 26h3M24 16h3M24 22h3M24 28h3" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: "LE",
    title: "Logística e E-commerce",
    accent: "#2450FF",
    text: "A logística moderna depende de uma localização precisa. Os códigos postais permitem otimizar rotas, reduzir erros de entrega e aumentar a eficiência operacional. No e-commerce, melhoram a validação de endereços, aceleram o processo de distribuição e aumentam a confiança dos clientes nas compras online. As empresas conseguem expandir os seus serviços para novas regiões com maior segurança, reduzindo custos e melhorando a experiência do consumidor. Uma infraestrutura postal eficiente é um dos pilares do crescimento do comércio digital.",
    icon: ({ color }) => (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <rect x="7" y="16" width="14" height="14" rx="1" stroke={color} strokeWidth="1.6" />
        <path d="M7 21h14M14 16v14" stroke={color} strokeWidth="1.4" />
        <path d="M23 26l6-6 5 5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2.5 3" />
        <circle cx="34" cy="25" r="1.6" fill={color} />
      </svg>
    ),
  },
  {
    code: "SP",
    title: "Segurança Pública",
    accent: "#C1272D",
    text: "A localização precisa é essencial para salvar vidas. Com sistemas postais estruturados, bombeiros, ambulâncias e forças de segurança conseguem identificar ocorrências com maior rapidez, reduzindo o tempo de resposta em situações críticas. A organização territorial melhora a coordenação operacional, facilita o acesso às áreas urbanas e apoia o planeamento de ações preventivas. Mais do que facilitar a identificação de endereços, os códigos postais fortalecem a capacidade de resposta e aumentam a segurança das comunidades.",
    icon: ({ color }) => (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M20 6l12 4v9c0 8-5.2 13.6-12 16-6.8-2.4-12-8-12-16v-9l12-4z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M20 15v11M14.5 20.5H25.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: "TU",
    title: "Turismo",
    accent: "#D69E2E",
    text: "Os códigos postais facilitam a mobilidade e melhoram a experiência dos visitantes. Os turistas conseguem localizar hotéis, restaurantes, atrações e serviços com maior facilidade, utilizando aplicações digitais e sistemas de navegação. Isso reduz as barreiras de deslocação, aumenta a sensação de segurança e incentiva estadias mais longas. Um território bem organizado torna-se mais acessível e atrativo, contribuindo para o fortalecimento do setor turístico e para a valorização dos destinos locais.",
    icon: ({ color }) => (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1.6" />
        <path d="M25 15l-6.5 3.5L15 25l6.5-3.5L25 15z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="1.4" fill={color} />
      </svg>
    ),
  },
  {
    code: "EC",
    title: "Economia",
    accent: "#0F766E",
    text: "A organização territorial gera um impacto direto na economia. Os códigos postais estruturados promovem maior eficiência nos negócios, facilitam investimentos, reduzem custos operacionais e impulsionam novos mercados. As empresas conseguem tomar decisões com base em dados geográficos mais confiáveis, identificar oportunidades de expansão e melhorar a distribuição dos seus produtos e serviços. Uma economia apoiada em informação territorial organizada torna-se mais competitiva, moderna e preparada para crescer.",
    icon: ({ color }) => (
      <svg viewBox="0 0 40 40" fill="none" width="28" height="28">
        <path d="M6 30h28M6 30V10" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 26l6-8 5 4 8-11" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 11h4v4" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const EMAIL = "plataformaina@gmail.com";
const INK = "#0F172A";
const PAPER = "#F6F5F0";

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

function Postmark({ color = INK, size = 44 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} fill="none">
      <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="1.4" />
      <circle cx="60" cy="60" r="44" stroke={color} strokeWidth="1" strokeDasharray="1 5" />
      <path d="M60 12 A48 48 0 0 1 108 60" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <HStack
      as="span"
      display="inline-flex"
      border="1px solid"
      borderColor="blackAlpha.300"
      borderRadius="full"
      px={3}
      py={1}
      fontFamily={mono.style.fontFamily}
      fontSize="11px"
      letterSpacing="0.16em"
      textTransform="uppercase"
     
    >
      {children}
    </HStack>
  );
}

/** A single benefit row: icon badge + title/code on one side, paragraph on the other. */
function BenefitRow({ benefit, index }: { benefit: Benefit; index: number }) {
  const reversed = index % 2 === 1;
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      id={benefit.code}
      className="reveal-row"
      style={{ ["--dir" as any]: reversed ? -1 : 1 }}
      py={{ base: 10, md: 14 }}
      borderBottom="1px solid"
      borderColor="blackAlpha.100"
    >
      <Flex
        direction={{ base: "column", md: reversed ? "row-reverse" : "row" }}
        align={{ md: "center" }}
        gap={{ base: 6, md: 14 }}
      >
        {/* Badge / label side */}
        <VStack align={{ base: "flex-start", md: reversed ? "flex-end" : "flex-start" }}  flex="0 0 260px">
          <Flex
            align="center"
            justify="center"
            boxSize="64px"
            borderRadius="full"
            border="1.5px solid"
            borderColor={benefit.accent}
            bg={`${benefit.accent}14`}
          >
            <benefit.icon color={benefit.accent} />
          </Flex>
          <Heading
            fontFamily={display.style.fontFamily}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="600"
            color={INK}
            textAlign={{ base: "left", md: reversed ? "right" : "left" }}
          >
            {benefit.title}
          </Heading>
          <Text
            fontFamily={mono.style.fontFamily}
            fontSize="11px"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="blackAlpha.500"
          >
            INAPI · {benefit.code}
          </Text>
        </VStack>

        {/* Text side */}
        <Box flex="1" borderLeft={{ md: reversed ? "none" : "1px solid" }} borderRight={{ md: reversed ? "1px solid" : "none" }} borderColor="blackAlpha.150" pl={{ md: reversed ? 0 : 8 }} pr={{ md: reversed ? 8 : 0 }}>
          <Text fontFamily={body.style.fontFamily} fontSize={{ base: "sm", md: "md" }} color="blackAlpha.800" lineHeight="1.8">
            {benefit.text}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function ServicosPage() {
  const bgRef = useScrollReveal<HTMLDivElement>(1, 0.4);

  return (
    <Box bg={PAPER} color={INK} fontFamily={body.style.fontFamily}>
      <style jsx global>{`
        .reveal-row {
          --p: 0;
          opacity: var(--p);
          transform: translateX(calc((1 - var(--p)) * var(--dir, 1) * -32px));
        }
        .bg-zoom {
          --p: 0;
          opacity: var(--p);
          transform: scale(calc(1.08 - var(--p) * 0.08));
        }
        .pill:hover { background: rgba(0,0,0,0.06); }
        @media (prefers-reduced-motion: reduce) {
          .reveal-row, .bg-zoom { transform: none !important; }
        }
      `}</style>

      {/* ---------------------------------------------------- HERO */}
      <Box position="relative" overflow="hidden" bg={INK} color="white" minH={{ base: "60vh", md: "70vh" }}>
        <Box
          ref={bgRef}
          className="bg-zoom"
          position="absolute"
          inset={0}
          bgImage="radial-gradient(circle at 20% 20%, rgba(36,80,255,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(193,39,45,0.25), transparent 40%)"
        />
        <Box
          position="absolute"
          inset={0}
          opacity={0.15}
          bgImage="linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)"
          bgSize="48px 48px"
        />
        <Flex position="relative" direction="column" justify="center" minH={{ base: "60vh", md: "70vh" }} maxW="900px" mx="auto" px={{ base: 6, md: 10 }} py={20}>
          <Eyebrow>
            <Box as="span" boxSize="6px" borderRadius="full" bg="#2450FF" />
            Benefícios do código postal
          </Eyebrow>
          <Heading
            fontFamily={display.style.fontFamily}
            mt={7}
            fontSize={{ base: "2.4rem", md: "4.2rem" }}
            fontWeight="700"
            lineHeight="1.05"
            letterSpacing="-0.02em"
          >
            Um código pequeno.
            <br />
            Um impacto enorme.
          </Heading>
          <Text mt={6} maxW="560px" fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
            Da rua ao país, um sistema de códigos postais bem construído
            transforma como cidades crescem, negócios entregam, socorristas
            chegam e visitantes se orientam. Estes são os cinco lugares onde
            esse impacto é mais visível.
          </Text>

          <HStack mt={10}  flexWrap="wrap">
            {BENEFITS.map((b) => (
              <ChakraLink
                key={b.code}
                href={`#${b.code}`}
                className="pill"
                display="inline-flex"
                alignItems="center"
                gap={2}
                px={4}
                py={2}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.300"
                fontFamily={mono.style.fontFamily}
                fontSize="12px"
                letterSpacing="0.08em"
                _hover={{ textDecoration: "none", borderColor: "whiteAlpha.600" }}
                transition="border-color .2s ease"
              >
                <Box as="span" boxSize="6px" borderRadius="full" bg={b.accent} />
                {b.title}
              </ChakraLink>
            ))}
          </HStack>
        </Flex>
      </Box>

      {/* ---------------------------------------------------- BENEFITS */}
      <Box maxW="1000px" mx="auto" px={{ base: 6, md: 10 }} py={{ base: 12, md: 20 }}>
        <VStack align="flex-start" mb={{ base: 6, md: 4 }}>
          <Eyebrow>Índice · 5 categorias</Eyebrow>
          <Heading fontFamily={display.style.fontFamily} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600" maxW="600px">
            Cinco áreas, um só sistema de localização por trás de todas.
          </Heading>
        </VStack>

        {BENEFITS.map((benefit, i) => (
          <BenefitRow key={benefit.code} benefit={benefit} index={i} />
        ))}
      </Box>

      {/* ---------------------------------------------------- CONTACT */}
      <Box position="relative" overflow="hidden" bg={INK} color="white" mt={0}>
        <Box
          position="absolute"
          inset={0}
          opacity={0.12}
          bgImage="linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)"
          bgSize="48px 48px"
        />
        <VStack position="relative" maxW="900px" mx="auto" px={{ base: 6, md: 10 }} py={{ base: 16, md: 24 }} align="flex-start">
          <Eyebrow>Contacto</Eyebrow>
          <Heading fontFamily={display.style.fontFamily} fontSize={{ base: "2xl", md: "4xl" }} fontWeight="600" maxW="560px" lineHeight="1.15">
            Vamos dar o endereço certo ao que você constrói.
          </Heading>
          <ChakraLink
            href={`mailto:${EMAIL}`}
            display="inline-flex"
            alignItems="center"
            gap={4}
            pl={2}
            pr={6}
            py={2}
            borderRadius="full"
            borderColor="whiteAlpha.300"
            _hover={{ textDecoration: "none", borderColor: "#2450FF" }}
            transition="border-color .2s ease"
          >
            <Button width={200} color={'blue'} borderRadius={50} background={'white'}>Contacte-nos</Button>
          </ChakraLink>
        </VStack>
      </Box>
    </Box>
  );
}
