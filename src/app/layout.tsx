import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { RESTAURANT_CONFIG } from "@/data/menuData";

export const metadata: Metadata = {
  title: `${RESTAURANT_CONFIG.name} | ${RESTAURANT_CONFIG.tagline}`,
  description: RESTAURANT_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
