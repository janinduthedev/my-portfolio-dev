import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "Janindu Tharinda | Portfolio",
  description: "Software Engineer portfolio build with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}