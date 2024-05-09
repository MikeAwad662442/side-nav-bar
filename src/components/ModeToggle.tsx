"use client";

import * as React from "react";
import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? <Sun /> : <MoonStar />}
    </Button>
  );
  //       <DropdownMenuContent align="end">
  //         <DropdownMenuItem onClick={() => setTheme("light")}>
  //           Light
  //         </DropdownMenuItem>
  //         <DropdownMenuItem onClick={() => setTheme("dark")}>
  //           Dark
  //         </DropdownMenuItem>
  //         <DropdownMenuItem onClick={() => setTheme("system")}>
  //           System
  //         </DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
}
