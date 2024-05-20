import React from "react";
import { Story, Meta } from "@storybook/react";
import { NavBar, INavBar } from "./navbar";
import "./navbar.css";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as Meta;

const Template: Story<INavBar> = (args: INavBar) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
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
