import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { shapeIconNames } from "./icon-args";
import { ShapeIcon } from "../shapes";

const meta: Meta<typeof ShapeIcon> = {
  title: "Components/Icon/Media",
  component: ShapeIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: shapeIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallShapeIcon: Story = {
  args: {
    name: "PlusCircle",
    size: 40,
    color: "blue",
  },
};

export const AllShapeIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {shapeIconNames.map((name, index) => (
          <ShapeIcon
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
