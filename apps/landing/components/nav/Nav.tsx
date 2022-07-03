import { Button, SplashsaverLink as Link } from "@splashsaver/ui";
import { useRouter } from "next/router";
import { NavLink as Props } from "@splashsaver/types/NavLink";
import { WEB_URL } from "@splashsaver/lib/constants";
import { NavLink } from "./NavLink";

export const Nav = () => {
  const LINKS: Props[] = [
    { id: 1, text: "About", href: "/about", target: undefined },
    { id: 2, text: "Changelog", href: "/changelog", target: undefined },
    { id: 3, text: "Company", href: "/company", target: undefined },
  ];

  const router = useRouter();
  const r = LINKS.map((link) => link.href === router.route);
  console.log(r);

  return (
    <nav className="flex items-center border-b border-gray-900 justify-between w-screen px-28 fixed top-0 h-14">
      <Link href="/">
        <h1 className="font-semibold text-white text-lg">splashsaver.com</h1>
      </Link>
      <div className="space-x-4 m-auto">
        {LINKS.map((link) => (
          <NavLink
            key={link.id}
            text={link.text}
            href={link.href}
            active={router.route === link.href}
            target={link.target}
          />
        ))}
      </div>
      <Link href={`${WEB_URL}/auth/login`} target="_blank">
        Log in
      </Link>
      <Link href={`${WEB_URL}/auth/signup`} target="_blank">
        <Button className="ml-4">Sign up</Button>
      </Link>
    </nav>
  );
};
