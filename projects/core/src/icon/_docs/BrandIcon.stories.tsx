import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BrandIcon } from "../brand";
import { brandIconNames } from "./icon-args";

const meta: Meta<typeof BrandIcon> = {
  title: "Components/Icon/Brand",
  component: BrandIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: brandIconNames,
    },
    size: {
      control: {
        type: "range",
        min: 10,
        max: 100,
        step: 1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallBrandIcon: Story = {
  args: {
    name: "YouTube",
    size: 40,
    color: "red",
  },
};

export const AllBrandIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {brandIconNames.map((name, index) => (
          <BrandIcon
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
