import * as React from "react";
import Link from "next/link";
import { NavLink as Props } from "@splashsaver/types/NavLink";

export const NavLink = ({ target, text, href, active }: Props) => {
  // Probs a better way to do this
  let baseClassName = "text-gray-400 p-5 text-sm duration-300 hover:text-white";

  let activeClassName = "text-white p-5 text-sm duration-300";

  return (
    <Link href={href}>
      <a className={active ? activeClassName : baseClassName} target={target}>
        {text}
      </a>
    </Link>
  );
};
