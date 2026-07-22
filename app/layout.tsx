import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/structures/Navbar";
import Footer from "@/components/structures/Footer";
import NextTopLoader from "nextjs-toploader"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INAPI - API de Geolocalizacao angolana",
  description: `ina API de geolocazacao focada na criacao de codigo postais, mapas actualizados, digital twins
   para paises em desenvolvimento. inapi, ina api `,
   verification:{
    google:"vxEvyqZ62CDJMrff__BCnRNvQ16iVT8JKjgGzA0x8R4"
   },
  openGraph:{
    images:["https://njinga-worker.njinga.workers.dev/inacard1.jpg"],
    title:"inapi - API de Geolocalizacao angolana",
    description: `API de geolocazacao focada na criacao de codigo postais, mapas actualizados, digital twins
   para paises em desenvolvimento `,
  },

  publisher:"INAPI",
  authors:[{
    name:"inta inc",
  } , {name:"INAPI"}]
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning suppressContentEditableWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <Provider>
        <NextTopLoader color="blue"/>
        <Navbar/>
        {children}
        <Footer/>
      </Provider>
      </body>
    </html>
  );
}
