import React from "react";
import { useTranslations } from "next-intl";
// Logo Images
import FullLogo from "@/assets/FullLogo.png";
import Image from "next/image";
import { NavLinks } from "@/constants/NavBar";
import { NavBarItems } from "@/types";
import { Link } from "@/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LanguageToggle,
  ModeToggle,
  NavbarAccordion,
  NavbarButton,
} from "./NavbarComponents";

const SideBar = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  return (
    <nav
      className={
        locale === "ar"
          ? " fixed hidden h-screen flex-1 flex-col border-l border-zinc-600 pl-2 pr-4 md:flex md:w-60"
          : " fixed hidden h-screen flex-1 flex-col border-r border-zinc-600 pl-2 pr-4 md:flex md:w-60"
      }
    >
      <header className=" mt-1 flex flex-col gap-3 border-b border-primary pb-2">
        <Image
          src={FullLogo}
          alt="Logo"
          width={230}
          height={50}
          priority={true}
        />
        <section className="flex flex-row justify-between">
          <ModeToggle />
          <LanguageToggle />
        </section>
      </header>
      <section className="mt-2 flex flex-col gap-3">
        {NavLinks.map((items: NavBarItems, index) =>
          items.groupLinks ? (
            <NavbarAccordion key={1} />
          ) : (
            <Link key={index} href={items.href}>
              <NavbarButton icon={items.icon} className="w-full">
                {t(`NavBar.${items.label}`)}
              </NavbarButton>
            </Link>
          ),
        )}
      </section>
      <section>{t("NavBar.Settings")}</section>
      <section>{t("NavBar.ABOUT_US")}</section>
      <section>{t("NavBar.Contact_US")}</section>
    </nav>
  );
};

export default SideBar;

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It's animated by default, but you can disable it if you prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }
