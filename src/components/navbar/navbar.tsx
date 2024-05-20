import Link from "next/link";
import React from "react";
import "./navbar.css";

type INavLinks = {
  label: string;
  href: string;
  subMenu?: INavLinks[];
};

export type INavBar = {
  navLinks: INavLinks[];
  direction?: "row" | "column";
  backgroundClassnames?: string;
  labelClassnames?: string;
  labelContainerClassnames?: string;
  subMenuClassnames?: string;
  gap?: number;
};

export const NavBar: React.FC<INavBar> = ({
  navLinks,
  direction = "row",
  backgroundClassnames,
  labelClassnames,
  labelContainerClassnames,
  subMenuClassnames,
  gap = 0,
}) => {
  const NavLink = ({
    navLink,
    direction,
  }: {
    navLink: INavLinks;
    direction: "row" | "column";
  }) => (
    <li className="nav-item">
      <Link href={navLink.href}>{navLink.label}</Link>
      {navLink.subMenu && navLink.subMenu.length > 0 && (
        <ul
          className="submenu"
          style={
            direction === "column"
              ? { top: "0", left: "100%" }
              : { top: "100%", right: "10%" }
          }
        >
          {navLink.subMenu.map((submenuItem, index) => (
            <li key={index}>
              <Link href={submenuItem.href}>{submenuItem.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
  return (
    <div
      className={`${backgroundClassnames} gap-${gap}`}
      style={{ display: "flex", flexDirection: direction, gap: gap }}
    >
      {navLinks.map((navLink, index) => (
        <div
          key={index}
          className={`flex flex-${direction} ${labelContainerClassnames}`}
        >
          <NavLink navLink={navLink} direction={direction} />
        </div>
      ))}
    </div>
  );
};
