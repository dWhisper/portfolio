import type { Meta, StoryObj } from "@storybook/react";
import { GenericIcon } from "../generic";
import { genericIconNames } from "./icon-args";
import React from "react";

const meta: Meta<typeof GenericIcon> = {
  title: "Components/Icon/Generic",
  component: GenericIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: genericIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallGenericIcon: Story = {
  args: {
    name: "Air",
    size: 40,
  },
};

export const AllGenericIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {genericIconNames.map((name, index) => (
          <GenericIcon
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
