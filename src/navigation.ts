import {
  createLocalizedPathnamesNavigation,
  createSharedPathnamesNavigation,
} from "next-intl/navigation";
// import { locales, pathnames, localePrefix } from "./config";
import { locales } from "./config";
// export const { Link, getPathname, redirect, usePathname, useRouter } =
//   createLocalizedPathnamesNavigation({
//     locales,
//     pathnames,
//     localePrefix,
//   });
// export const { Link, redirect, usePathname, useRouter } =
//   createSharedPathnamesNavigation({ locales, localePrefix });
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
