import * as React from "react";
import Link from "next/link";
import { NavLink as Props } from "@splashsaver/types/NavLink";

export const NavLink = ({ target, text, href }: Props) => {
  return (
    <Link href={href}>
      <a
        className="text-gray-400 p-5 text-sm duration-300 hover:text-white"
        target={target}
      >
        {text}
      </a>
    </Link>
  );
};
