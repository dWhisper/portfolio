import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { EcomIcon } from "../ecom";
import { ecomIconNames } from "./icon-args";

const meta: Meta<typeof EcomIcon> = {
  title: "Components/Icon/ECom",
  component: EcomIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: ecomIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallEcomIcon: Story = {
  args: {
    name: "Basket",
    size: 40,
    color: "orange",
  },
};

export const AllBrandIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {ecomIconNames.map((name, index) => (
          <EcomIcon
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
