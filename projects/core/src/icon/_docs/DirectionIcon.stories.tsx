import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DirectionIcon } from "../direction";
import { directionIconNames } from "./icon-args";

const meta: Meta<typeof DirectionIcon> = {
  title: "Components/Icon/Direction",
  component: DirectionIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: directionIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionIcon40: Story = {
  args: {
    name: "Ascending",
    size: 40,
    color: "tomato",
  },
};

export const AllDirectionIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {directionIconNames.map((name, index) => (
          <DirectionIcon
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
