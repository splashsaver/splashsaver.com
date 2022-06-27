import Link from "next/link";

interface SplashsaverLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string | undefined;
  target?: React.HTMLAttributeAnchorTarget | undefined;
}

export const SplashsaverLink = ({
  href,
  children,
  className,
  target,
}: SplashsaverLinkProps) => {
  return (
    <Link href={href}>
      <a className={`text-sm text-[#BB86FC] ${className}`} target={target}>
        {children}
      </a>
    </Link>
  );
};
