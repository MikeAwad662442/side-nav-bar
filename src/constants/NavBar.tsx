/* Notes:
 * If You want to use React-Icons in any File it MUST to be .tsx NOt .ts 😄
 * and be Notes to add in TypeScript as "icon?: JSX.Element" 🔥
 */

import { NavBarItems } from "@/types";
import { Home, LibraryBig } from "lucide-react";

export const NavLinks: NavBarItems[] = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/",
    label: "Group1",
    icon: Home,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: Home,
      },
      {
        href: "/",
        label: "item2",
        icon: Home,
      },
      {
        href: "/",
        label: "item3",
        icon: Home,
      },
    ],
  },
  {
    href: "/",
    label: "Group2",
    icon: Home,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: Home,
      },
      {
        href: "/",
        label: "item2",
        icon: Home,
      },
      {
        href: "/",
        label: "item3",
        icon: Home,
      },
    ],
  },
  {
    href: "/",
    label: "Group3",
    icon: Home,
    groupLinks: [
      {
        href: "/",
        label: "item1",
        icon: Home,
      },
      {
        href: "/",
        label: "item2",
        icon: Home,
      },
      {
        href: "/",
        label: "item3",
        icon: Home,
      },
    ],
  },
  {
    href: "/about",
    label: "ABOUT_US",
    icon: LibraryBig,
  },
];
