"use client";

import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <Button variant="ghost" size="icon" disabled={true}></Button>;
  }
  const dark = theme === "dark";
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? <Sun /> : <MoonStar />}
    </Button>
  );
}
/**********************
 * Note:
 * we use this component to implement theme mode light | dark
 * The structure should be as it is here. I tried to change it more than once, but the icon always appears like the theme and not the other way around, so copy this content as it is.
 **********************/
