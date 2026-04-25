import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../shared/ui/dropdown";
import ravenLogo from "../shared/assets/icon/ravenLogo.webp";
import { useTranslation } from "react-i18next";
export const Header = () => {
  const { i18n, t } = useTranslation();
  const navLinkClass =
    "text-amber-50 flex  items-center justify-center hover:bg-zinc-500/50 transition-all duration-300 ease-in-out h-[48px] w-[139px] rounded-xl";

  const currentLanguage = (i18n.language || "ua").substring(0, 2).toUpperCase();

  return (
    <header className=" absolute flex justify-center content-center items-center  mt-9 gap-16  ">
      <NavLink to="/" className=" bg-red-900  py-[8px] px-[8px] rounded-xl">
        <img src={ravenLogo} alt="Raven Logo" className="w-15 h-15" />
      </NavLink>
      <nav className="  w-[1000px] rounded-xl text-lg bg-zinc-900/50 flex font-raven  gap-5 content-center py-[12px] px-[25px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-red-900 bg-zinc-500/50 `
              : navLinkClass
          }
        >
          {t("HOME")}
        </NavLink>

        <NavLink
          to="/media"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-red-900 bg-zinc-500/50 `
              : navLinkClass
          }
        >
          {t("MEDIA")}
        </NavLink>

        <NavLink
          to="/the_game"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-red-900 bg-zinc-500/50 `
              : navLinkClass
          }
        >
          {t("GAME")}
        </NavLink>

        <NavLink
          to="/community"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-red-900 bg-zinc-500/50 `
              : navLinkClass
          }
        >
          {t("COMMUNITY")}
        </NavLink>

        <NavLink
          to="/download"
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-red-900 bg-zinc-500/50 `
              : navLinkClass
          }
        >
          {t("DOWNLOAD")}
        </NavLink>
        <Dropdown>
          <DropdownButton>
            {currentLanguage}
            <ChevronDownIcon className="size-4" />
          </DropdownButton>

          <DropdownMenu>
            <DropdownItem onClick={() => i18n.changeLanguage("en")}>
              EN
            </DropdownItem>
            <DropdownItem onClick={() => i18n.changeLanguage("ua")}>
              UA
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
};
