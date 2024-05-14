"use client";
import React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import ar from "@/assets/ar.webp";
import en from "@/assets/en.webp";
import fr from "@/assets/fr.webp";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTranslations } from "next-intl";
interface LanguageProps {}
const LanguageToggle = () => {
  const t = useTranslations("LangInfo");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem onClick={() => setTheme("light")}> */}
        <DropdownMenuItem className="gap-2">
          <Image src={ar} alt={t("AR")} width={25} height={25} />
          <span>{t("AR")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Image src={en} alt={t("EN")} width={25} height={25} />
          <span>{t("EN")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Image src={fr} alt={t("FR")} width={25} height={25} />
          <span>{t("FR")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
