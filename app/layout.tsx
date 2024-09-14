import { Inter, JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css"

const jetbrain = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrain",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "IntelliQ",
  description: "An AI-powered learning platform for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrain.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
