"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Device from "../public/icons/device.svg"
import ButtonLink from "@/components/structures/ButtonLink";

/**
 * Observes an element and flips `inView` to true the first time it crosses
 * the given threshold, then stops watching. Pure IntersectionObserver, no
 * animation library involved — the actual motion lives in the CSS below.
 */
function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  // Hero plays on mount instead of on scroll, since it's visible immediately.
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setHeroIn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const bg = useReveal<HTMLDivElement>();

  const geoHeading = useReveal<HTMLHeadingElement>();
  const geoText = useReveal<HTMLParagraphElement>();
  const geoDevice = useReveal<HTMLDivElement>();
  const geoCardLeft = useReveal<HTMLDivElement>();
  const geoCardRight = useReveal<HTMLDivElement>();

  const empHeading = useReveal<HTMLHeadingElement>();
  const empText = useReveal<HTMLParagraphElement>();
  const empImage = useReveal<HTMLDivElement>();
  const empCardLeft = useReveal<HTMLDivElement>();
  const empCardRight = useReveal<HTMLDivElement>();
  const empDecor = useReveal<HTMLDivElement>();

  const delHeading = useReveal<HTMLHeadingElement>();
  const delText = useReveal<HTMLParagraphElement>();
  const delImage = useReveal<HTMLDivElement>();
  const delCardLeft = useReveal<HTMLDivElement>();
  const delCardRight = useReveal<HTMLDivElement>();
  const delDecor = useReveal<HTMLDivElement>();

  const cls = (...names: Array<string | false | undefined>) =>
    names.filter(Boolean).join(" ");

  return (
    <VStack width={'100%'} gap={0}>
      {/* Global keyframes / reveal utility classes, scoped to this page. */}
      <style jsx global>{`
        .reveal-up,
        .reveal-left,
        .reveal-right,
        .reveal-scale,
        .reveal-fade,
        .bg-zoom {
          opacity: 0;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .reveal-up { transform: translateY(40px); }
        .reveal-left { transform: translateX(-40px); }
        .reveal-right { transform: translateX(40px); transition-delay: 0.15s; }
        .reveal-scale { transform: scale(0.92); transition-duration: 0.7s; }
        .reveal-fade { transition-duration: 0.9s; }
        .bg-zoom { transform: scale(1.08); transition-duration: 1.4s; }

        .reveal-up.is-visible,
        .reveal-left.is-visible,
        .reveal-right.is-visible,
        .reveal-scale.is-visible,
        .reveal-fade.is-visible,
        .bg-zoom.is-visible {
          opacity: 1;
          transform: none;
        }

        .stagger-1 { transition-delay: 0s; }
        .stagger-2 { transition-delay: 0.15s; }
        .stagger-3 { transition-delay: 0.3s; }

        .float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-up,
          .reveal-left,
          .reveal-right,
          .reveal-scale,
          .reveal-fade,
          .bg-zoom {
            transform: none !important;
            transition: opacity 0.3s ease-out !important;
            transition-delay: 0s !important;
          }
          .float {
            animation: none !important;
          }
        }
      `}</style>

      <VStack overflowX={'hidden'} position={'relative'} width={'100%'} background={'black'} height={'75vh'}>
        <Box ref={bg.ref} position="absolute" inset={0} className={cls("bg-zoom", bg.inView && "is-visible")}>
          <Image fill style={{height:"100%", objectFit:"cover", opacity:.5, background:"black"}} src={'https://images.pexels.com/photos/14436285/pexels-photo-14436285.jpeg'} alt="geolocation"/>
        </Box>
        <VStack justifyContent={'center'} width={'100%'} zIndex={100} height={'100%'} position={'absolute'}>
            <VStack padding={10} marginTop={10}>
              <Heading className={cls("reveal-up", "stagger-1", heroIn && "is-visible")} fontSize={"1.7rem"} color={'white'}>Bem-vindo a INAPI</Heading>
              <Text className={cls("reveal-up", "stagger-2", heroIn && "is-visible")} color={'#f6f6f6'} maxWidth={300} textAlign={'center'} fontSize={12}>Api de Geolocalizacao, Fornecemos servicos de
                organizacao e criacao de codigos postais para facilitancao de importacao de mercadorias
              </Text>
              <Box className={cls("reveal-up", "stagger-3", heroIn && "is-visible")}>
                <ButtonLink link="/auth/entrar" text="Comercar agora"/>
              </Box>
            </VStack>
        </VStack>
      </VStack>

      <VStack position={'relative'} width={'100%'} padding={10} gap={17}>
        <Heading
          ref={geoHeading.ref}
          className={cls("reveal-up", geoHeading.inView && "is-visible")}
          borderRadius={50} lineClamp={1.0} fontSize={14} padding={2} paddingRight={4} paddingLeft={4} background={'blue'} color={'white'} borderWidth={1}
        >Geolocation</Heading>
        <Text
          ref={geoText.ref}
          className={cls("reveal-up", geoText.inView && "is-visible")}
          color={'gray'} marginBottom={10} fontSize={12}
        >encontre qualque endereco em angola</Text>
        <Box
          ref={geoDevice.ref}
          className={cls("reveal-scale", geoDevice.inView && "is-visible", geoDevice.inView && "float")}
          width="100%"
        >
          <Device width="100%" height="400px" style={{zIndex:500}}/>
        </Box>
        <Box
          ref={geoCardLeft.ref}
          className={cls("Card-left", "reveal-left", geoCardLeft.inView && "is-visible")}
          borderRadius={10} padding={10} background={'white'} left={"120px"} position={'absolute'} width={"100%"} maxWidth={300}
        >
          <Heading fontSize={20}>O que fazemos</Heading>
          <Text color={'gray'} fontSize={12}>Oferecemos um repertorio completo das localizacoes de 
            enderecos postais de todo o pais, para desenvolvedores,
            e empresas de entrega de modo a facilitar suas operacoes
            ao redor do pais.
          </Text>
          <Button _hover={{background:"blue", color:"white"}} marginTop={4} fontSize={12} color={'blue'} borderColor={"blue"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
        <Box
          ref={geoCardRight.ref}
          className={cls("Card-right", "reveal-right", geoCardRight.inView && "is-visible")}
          borderRadius={10} padding={10} background={'white'} bottom={"150px"} right={"90px"} position={'absolute'} width={'100%'} maxWidth={300}
        >
          <Heading fontSize={20}>Urbanização</Heading>
          <Text color={'gray'} fontSize={12}>{"Os códigos postais contribuem diretamente para uma urbanização mais organizada e eficiente. Através da identificação estruturada de ruas, bairros e localidades, torna-se mais fácil planear o crescimento urbano, organizar serviços, como o saneamento básico, e melhorar a gestão do território. Um sistema postal moderno ajuda a reduzir a desorganização espacial, facilita a localização de infraestruturas e apoia o desenvolvimento sustentável das cidades. Com dados territoriais bem estruturados, é possível criar comunidades mais acessíveis, funcionais e preparadas para o futuro.".slice(0, 180)} ...
          </Text>
          <Button _hover={{background:"blue", color:"white"}} marginTop={4} fontSize={12} color={'blue'} borderColor={"blue"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
      </VStack>

      <VStack position={'relative'} width={'100%'} overflow={'hidden'} background={'#f6f6f6'} padding={10} gap={17} paddingBottom={0}>
        <Heading
          ref={empHeading.ref}
          className={cls("reveal-up", empHeading.inView && "is-visible")}
          borderRadius={50} lineClamp={1.0} fontSize={14} padding={2} paddingRight={4} paddingLeft={4} background={'white'} color={'blue'} borderWidth={1}
        >Empresas</Heading>
        <Text
          ref={empText.ref}
          className={cls("reveal-up", empText.inView && "is-visible")}
          color={'gray'} marginBottom={10} fontSize={12}
        >encontre qualque endereco em angola</Text>
        <Box
          ref={empImage.ref}
          className={cls("reveal-scale", empImage.inView && "is-visible")}
          position={'relative'} height={400} width={550}
        >
            <Image alt="empresa" fill src={'/images/empresa.png'}/>
        </Box>
        <Box
          ref={empCardLeft.ref}
          className={cls("Card-left", "reveal-left", empCardLeft.inView && "is-visible")}
          zIndex={200} borderRadius={30} padding={10} background={"white"} top={"150px"} left={"170px"} position={'absolute'}
        >
          <Heading fontSize={20}>Logística e E-commerce</Heading>
          <Text  color={'gray'} fontSize={12}>
            {`A logística moderna depende de uma localização precisa. Os códigos postais permitem otimizar rotas, reduzir erros de entrega e aumentar a eficiência operacional. No e-commerce, melhoram a validação de endereços, aceleram o processo de distribuição e aumentam a confiança dos clientes nas compras online. As empresas conseguem expandir os seus serviços para novas regiões com maior segurança, reduzindo custos e melhorando a experiência do consumidor. Uma infraestrutura postal eficiente é um dos pilares do crescimento do comércio digital.`.slice(0, 180)}
          </Text>
          <Button _hover={{background:"blue", color:"white"}} marginTop={4} fontSize={12} color={'blue'} borderColor={"blue"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
        <Box
          ref={empCardRight.ref}
          className={cls("Card-right", "reveal-right", empCardRight.inView && "is-visible")}
          borderRadius={30} padding={10} background={"white"} bottom={"110px"} right={"100px"} position={'absolute'} maxWidth={300}
        >
          <Heading fontSize={20}>Segurança Pública</Heading>
          <Text color={'gray'} fontSize={12}>{`A localização precisa é essencial para salvar vidas. Com sistemas postais estruturados, bombeiros, ambulâncias e forças de segurança conseguem identificar ocorrências com maior rapidez, reduzindo o tempo de resposta em situações críticas. A organização territorial melhora a coordenação operacional, facilita o acesso às áreas urbanas e apoia o planeamento de ações preventivas. Mais do que facilitar a identificação de endereços, os códigos postais fortalecem a capacidade de resposta e aumentam a segurança das comunidades.`.slice(0 , 180)}
          </Text>
          <Button _hover={{background:"blue", color:"white"}} marginTop={4} fontSize={12} color={'blue'} borderColor={"blue"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
        <Box
          ref={empDecor.ref}
          className={cls("desktop", "reveal-fade", empDecor.inView && "is-visible", empDecor.inView && "float")}
          position={'absolute'} left={0} bottom={0}
        >
            <Image  height={110} width={250} style={{ objectFit:"cover"}}  src={'/images/shop2.png'} alt="image"/>
        </Box>
      </VStack>
      <VStack position={'relative'} width={'100%'} overflow={'hidden'} background={'red'} padding={10} gap={17} paddingBottom={0}>
        <Heading
          ref={delHeading.ref}
          className={cls("reveal-up", delHeading.inView && "is-visible")}
          borderRadius={50} lineClamp={1.0} fontSize={14} padding={2} paddingRight={4} paddingLeft={4} background={'white'} color={'red'} borderWidth={1}
        >Entregas</Heading>
        <Text
          ref={delText.ref}
          className={cls("reveal-up", delText.inView && "is-visible")}
          color={'white'} marginBottom={10} fontSize={12}
        >encontre qualquer endereco em angola</Text>
        <Box
          ref={delImage.ref}
          className={cls("reveal-scale", delImage.inView && "is-visible")}
          position={'relative'} height={400} width={550}
        >
            <Image alt="empresa" fill src={'/images/delivery2.png'}/>
        </Box>
        <Box
          ref={delCardLeft.ref}
          className={cls("Card-left", "reveal-left", delCardLeft.inView && "is-visible")}
          borderRadius={30} zIndex={200} padding={10} background={"white"} top={"150px"} left={"170px"} position={'absolute'} maxWidth={300}
        >
          <Heading fontSize={20}>Turismo</Heading>
          <Text color={'gray'} fontSize={12}>
            {`Os códigos postais facilitam a mobilidade e melhoram a experiência dos visitantes. Os turistas conseguem localizar hotéis, restaurantes, atrações e serviços com maior facilidade, utilizando aplicações digitais e sistemas de navegação. Isso reduz as barreiras de deslocação, aumenta a sensação de segurança e incentiva estadias mais longas. Um território bem organizado torna-se mais acessível e atrativo, contribuindo para o fortalecimento do setor turístico e para a valorização dos destinos locais.`.slice(0,180)}
          </Text>
          <Button _hover={{background:"red", color:"white"}} marginTop={4} fontSize={12} color={'red'} borderColor={"red"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
        <Box
          ref={delCardRight.ref}
          className={cls("Card-right", "reveal-right", delCardRight.inView && "is-visible")}
          bottom={"110px"} zIndex={100} borderRadius={30} padding={10} background={"white"} right={"100px"} position={'absolute'} maxWidth={300}
        >
          <Heading fontSize={20}>Economia</Heading>
          <Text color={'gray'} fontSize={12}>
            {`A organização territorial gera um impacto direto na economia. Os códigos postais estruturados promovem maior eficiência nos negócios, facilitam investimentos, reduzem custos operacionais e impulsionam novos mercados. As empresas conseguem tomar decisões com base em dados geográficos mais confiáveis, identificar oportunidades de expansão e melhorar a distribuição dos seus produtos e serviços. Uma economia apoiada em informação territorial organizada torna-se mais competitiva, moderna e preparada para crescer.`.slice(0,180)}
          </Text>
          <Button _hover={{background:"red", color:"white"}} marginTop={4} fontSize={12} color={'red'} borderColor={"red"} borderRadius={50} variant={'outline'}>Saber mais</Button>
        </Box>
        <Box
          ref={delDecor.ref}
          className={cls("imageZindex", "reveal-fade", delDecor.inView && "is-visible", delDecor.inView && "float")}
          position={'absolute'} left={10} top={20}
        >
            <Image  height={100} width={200} style={{ objectFit:"cover"}}  src={'/images/truck.png'} alt="image"/>
        </Box>
      </VStack>
    </VStack>
  );
}
