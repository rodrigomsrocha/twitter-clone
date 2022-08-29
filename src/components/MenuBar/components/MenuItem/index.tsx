import { ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
  label: string;
}

export function MenuItem({ children: icon, label }: MenuItemProps) {
  return (
    <a className="text-white flex items-center lg:gap-5 lg:text-xl p-3 lg:pr-8 lg:rounded-full lg:hover:bg-twitter-dark-hover lg:cursor-pointer">
      {icon}
      <span className="hidden lg:block">{label}</span>
    </a>
  );
}
