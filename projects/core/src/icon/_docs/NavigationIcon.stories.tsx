import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NavigationIcon } from "../navigation";
import { navigationIconNames } from "./icon-args";

const meta: Meta<typeof NavigationIcon> = {
  title: "Components/Icon/Navigation",
  component: NavigationIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: navigationIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallNavigationIcon: Story = {
  args: {
    name: "ArrowForward",
    size: 40,
    color: "blue",
  },
};

export const AllNavigationIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {navigationIconNames.map((name, index) => (
          <NavigationIcon
            key={`${name}--${index}`}
            name={name}
            size={40}
            color={"black"}
          />
        ))}
      </div>
    );
  },
};
