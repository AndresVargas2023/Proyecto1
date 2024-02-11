import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/navs/TopNav";
import { Box, CssBaseline } from "@mui/material";
import ChatsDrawer from "@/components/chat/ChatsDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Uno",
  description: "App básica para aprendizaje de herramientas para proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
          {children}
      </body>
    </html>
  );
}