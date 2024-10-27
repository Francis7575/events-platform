import type { Metadata } from "next";
import "./globals.css";
import { UserContextProvider } from "@/context/userContext";

export const metadata: Metadata = {
  title: "Cornerstone Events",
  description: "Application for managing events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
