import { ChevronDownIcon } from "@heroicons/react/16/solid";
// Вказуємо шлях до файлу, який ми щойно створили в Кроці 2
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "../shared/ui/dropdown";
import ravenLogo from "../shared/assets/icon/ravenLogo.webp";
export const Header = () => {
  const navLinkClass =
    "text-amber-50 content-center hover:bg-zinc-500/50 transition-all duration-300 ease-in-out py-[6px] px-[25px] rounded-xl";
  return (
    <header className=' box-border flex justify-center content-center items-center  mt-9 gap-16 fixed '>
      <a href='#' className=' bg-red-900  py-[8px] px-[8px] rounded-xl'>
        <img src={ravenLogo} alt='Raven Logo' className='w-15 h-15' />
      </a>
      <nav className=' rounded-xl text-lg bg-zinc-900/50 flex font-raven  gap-5 content-center py-[12px] px-[25px]'>
        <a className={navLinkClass} href='#'>
          HOME
        </a>
        <a className={navLinkClass} href='#'>
          MEDIA
        </a>
        <a className={navLinkClass} href='#'>
          THE GAME
        </a>
        <a className={navLinkClass} href='#'>
          COMMUNITY
        </a>
        <a className={navLinkClass} href='#'>
          DOWNLOAD
        </a>
        <Dropdown>
          <DropdownButton>
            EN
            <ChevronDownIcon className='size-4' />
          </DropdownButton>

          <DropdownMenu>
            <DropdownItem onClick={() => console.log("EN")}>En</DropdownItem>
            <DropdownItem onClick={() => console.log("UA")}>UA</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
};
