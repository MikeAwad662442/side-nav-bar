import { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return { children };
}
/************************
 * Notes
 * because all are included on [locale]/layout.tsx the original layout.tsx just has children
 *
 ************************/
