import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavBar, INavBar } from "./navbar";

describe("NavBar", () => {
  const defaultProps: INavBar = {
    navLinks: [
      {
        label: "Home",
        href: "/",
        subMenu: [
          {
            label: "Sub Home 1",
            href: "/subhome1",
          },
          {
            label: "Sub Home 2",
            href: "/subhome2",
          },
        ],
      },
      {
        label: "About",
        href: "/about",
      },
    ],
    direction: "row",
  };

  it("renders without crashing", () => {
    const { getByText } = render(<NavBar {...defaultProps} />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
  });

  it("shows submenu when hovering over nav item", () => {
    const { getByText, queryByText } = render(<NavBar {...defaultProps} />);
    fireEvent.mouseOver(getByText("Home"));
    expect(queryByText("Sub Home 1")).toBeInTheDocument();
    expect(queryByText("Sub Home 2")).toBeInTheDocument();
  });
});
