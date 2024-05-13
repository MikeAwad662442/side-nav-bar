"use client";

import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (theme === "dark") {
    return <MoonStar onClick={() => setTheme("light")} />;
  } else {
    return <Sun onClick={() => setTheme("dark")} />;
  }
  // const dark = theme;
}
/**********************
 * Note:
 * we use this component to implement theme mode light | dark
 **********************/
