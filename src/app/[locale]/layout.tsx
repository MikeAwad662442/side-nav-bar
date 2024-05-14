import clsx from "clsx";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
// import Navigation from "@/components/Navigation";
import { locales } from "@/config";
// import { ThemeProvider } from "next-themes";
import { ThemeProvider } from "@/components/theme-provider";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="Dark"
            // enableSystem
            // disableTransitionOnChange
          >
            <SideBar locale={locale} />
            <div
              className={
                locale === "ar"
                  ? "ml-2 flex min-h-screen flex-col space-y-2 px-4 pb-4 pt-2 sm:border-r sm:border-zinc-700 md:mr-60"
                  : "ml-2 flex min-h-screen flex-col space-y-2 px-4 pb-4 pt-2 sm:border-r sm:border-zinc-700 md:ml-60"
              }
            >
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
/************************
 * Notes
 * suppressHydrationWarning
 * it's important to use with next-them to make react understand and not render the server components
 * next-theme mode
 * light | dark | system
 *
 ************************/
