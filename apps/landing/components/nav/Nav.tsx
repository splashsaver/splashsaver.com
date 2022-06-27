import { NavLink as Props } from "@splashsaver/types/NavLink";
import { Button, SplashsaverLink as Link } from "@splashsaver/ui";
import { NavLink } from "./NavLink";

export const Nav = () => {
  const LINKS: Props[] = [
    { id: 1, text: "About", href: "/about", target: undefined },
    { id: 2, text: "Changelog", href: "/community", target: undefined },
    { id: 3, text: "Company", href: "/company", target: undefined },
  ];

  return (
    <nav className="flex items-center border-b border-stone-800 justify-between w-screen px-40 fixed top-0 h-14">
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
      <Link href="/">Log in</Link>
      <Link href="/signup">
        <Button className="ml-4">Sign up</Button>
      </Link>
    </nav>
  );
};
