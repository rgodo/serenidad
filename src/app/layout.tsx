// /src/app/layout.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Navbar from "@/components/Navbar";
import theme from "../theme/theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head title="Serenidad | Donde la paz se convierte en memoria">
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700;900&family=Assistant:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
