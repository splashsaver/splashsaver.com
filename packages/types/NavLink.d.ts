export interface NavLink {
  id?: number;
  target?: React.HTMLAttributeAnchorTarget | undefined;
  text: string;
  href: string;
  active?: boolean;
}
