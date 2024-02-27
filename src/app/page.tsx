"use client";

import React, { useEffect } from "react";
import { Button } from "../components/inputs/button/Button";
import { NavBar } from "../components/navbar/navbar";
import "../index.css";
import { useTheme } from "next-themes";

const Sandbox = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <>
      <NavBar />
      <Button
        label={"test"}
        backgroundColor="white"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </>
  );
};

export default Sandbox;
