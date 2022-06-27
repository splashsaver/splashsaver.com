import { NavLink as Props } from "@splashsaver/types/NavLink";
import { Button } from "@splashsaver/ui";
import { NavLink } from "./NavLink";

export const Nav = () => {
  const LINKS: Props[] = [
    { id: 1, text: "About", href: "/about", target: undefined },
    { id: 2, text: "Changelog", href: "/community", target: undefined },
    {
      id: 3,
      text: "Company",
      href: "/company",
      target: "_blank",
    },
  ];

  return (
    <nav className="flex items-center border-b border-stone-800 justify-between w-screen px-32 fixed top-0 h-14">
      <h1 className="font-semibold text-white text-lg">splashsaver.com</h1>
      <div className="space-x-4 m-auto">
        {LINKS.map((link) => (
          <NavLink
            key={link.id}
            text={link.text}
            href={link.href}
            target={link.target}
          />
        ))}
      </div>
      <Button className="ml-12">Sign up</Button>
    </nav>
  );
};
