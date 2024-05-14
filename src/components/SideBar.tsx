import React from "react";
import { ModeToggle } from "./ModeToggle";
import { useTranslations } from "next-intl";
// Logo Images
import FullLogo from "@/assets/FullLogo.png";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

const SideBar = ({ locale }: { locale: string }) => {
  const t = useTranslations();
  return (
    <nav
      className={
        locale === "ar"
          ? "bg-gray=950 fixed hidden h-screen flex-1 flex-col border-l border-zinc-600 pl-2 pr-4 md:flex md:w-60"
          : " bg-gray=950 fixed hidden h-screen flex-1 flex-col border-r border-zinc-600 pl-2 pr-4 md:flex md:w-60"
      }
    >
      <div className=" mt-1 flex flex-col gap-3 border-b border-primary pb-2">
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
      </div>
      <section>
        <p>{t("NavBar.Group1")}</p>
        <p>{t("NavBar.Group2")}</p>
        <p>{t("NavBar.Group3")}</p>
        <p>{t("NavBar.Blog")}</p>
      </section>
      <section>{t("NavBar.Settings")}</section>
      <section>{t("NavBar.ABOUT_US")}</section>
      <section>{t("NavBar.Contact_US")}</section>
    </nav>
  );
};

export default SideBar;
