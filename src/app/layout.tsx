import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import {Nohemi} from "../styles/fonts";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "alex lee",
  description: "Graphics and Systems Programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Nohemi.variable}  ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
         <NavBar/>
         <div className={" mx-auto flex-grow max-w-[1350px] flex flex-col xl:p-20 lg:p-16 md:p-14 sm:p-10 p-5"}>
             {children}
             <Footer/>
         </div>
      </body>
    </html>
  );
}
