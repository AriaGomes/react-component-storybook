// Textbox.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Textbox } from "./textbox";

export default {
  title: "Components/Inputs/Textbox",
  component: Textbox,
} as Meta;

const Template: Story = (args) => <Textbox {...args} />;

export const Default = Template.bind({});
