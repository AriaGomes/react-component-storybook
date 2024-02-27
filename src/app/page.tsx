"use client";

import { Button } from "../components/inputs/button/Button";
import { NavBar } from "../components/navbar/navbar";

const Sandbox = () => {
  const a = 1;

  return (
    <>
      <NavBar />
      <Button label={"test"} />
    </>
  );
};

export default Sandbox;
