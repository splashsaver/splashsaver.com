import Link from "next/link";

interface SplashsaverLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string | undefined;
}

export const SplashsaverLink = ({
  href,
  children,
  className,
}: SplashsaverLinkProps) => {
  return (
    <Link href={href}>
      <a className={`text-sm text-[#BB86FC] ${className}`}>{children}</a>
    </Link>
  );
};
