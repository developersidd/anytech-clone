import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monstserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monstserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
