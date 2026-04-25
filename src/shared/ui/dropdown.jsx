import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Fragment } from "react";

export function Dropdown({ children }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      {children}
    </Menu>
  );
}

export function DropdownButton({ children, className = "" }) {
  return (
    <MenuButton
      className={`inline-flex items-center gap-2 rounded-xl bg-zinc-900/50 py-2 px-4 text-amber-50 border border-zinc-700/50 hover:bg-zinc-800 transition-all font-raven ${className}`}
    >
      {children}
    </MenuButton>
  );
}

export function DropdownMenu({ children }) {
  return (
    <MenuItems
      anchor='bottom end'
      className='w-40 origin-top-right rounded-xl border border-white/5 bg-zinc-900/90 backdrop-blur-md p-1 text-amber-50 shadow-xl focus:outline-none z-50 mt-2'
    >
      {children}
    </MenuItems>
  );
}

export function DropdownItem({ children, href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <MenuItem>
      <Tag
        href={href}
        onClick={onClick}
        className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10 transition-colors font-raven text-sm'
      >
        {children}
      </Tag>
    </MenuItem>
  );
}
