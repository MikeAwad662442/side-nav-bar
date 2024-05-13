"use client";
import React from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem onClick={() => setTheme("light")}>
           Light
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => setTheme("dark")}>
           Dark
         </DropdownMenuItem>
         <DropdownMenuItem onClick={() => setTheme("system")}>
           System
         </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
