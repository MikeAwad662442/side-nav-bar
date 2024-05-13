import { ReactNode } from "react";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
/************************
 * Notes
 * because all are included on [locale]/layout.tsx the original layout.tsx just has children
 *
 ************************/
