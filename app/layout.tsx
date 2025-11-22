"use client";
import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/helpers/provider/reduxProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
