"use client";

import React, { useEffect } from "react";
import { Button } from "../components/inputs/button/Button";
import { NavBar } from "../components/navbar/navbar";
import "../index.css";
import { useTheme } from "next-themes";
import { Textbox } from "@/components/inputs/textbox/textbox";

const Sandbox = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className="w-full">
      <NavBar
        navLinks={[
          { label: "Home", href: "/" },
          {
            label: "About",
            href: "/about",
            subMenu: [
              { label: "test", href: "/test" },
              { label: "test", href: "/test" },
            ],
          },
          {
            label: "Contact",
            href: "/contact",
            subMenu: [{ label: "test", href: "/test" }],
          },
          {
            label: "Services",
            href: "/services",
            subMenu: [
              { label: "test", href: "/test" },
              { label: "test", href: "/test" },
            ],
          },
        ]}
        direction="column"
        gap={8}
      />
      <Button
        label={"test"}
        backgroundColor="white"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
      <Textbox />
    </div>
  );
};

export default Sandbox;
