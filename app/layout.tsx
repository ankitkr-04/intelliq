import React from "react";
import "@/styles/globals.css";
import { inter, pacifico, jetbrain } from "@/lib/fonts";

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
        className={`${inter.variable} ${pacifico.variable} ${jetbrain.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
