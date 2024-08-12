import { Inter } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Wmsas autogeneradores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-900`}>
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
