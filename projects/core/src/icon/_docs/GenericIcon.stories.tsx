import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GenericIcon } from "../generic";
import { genericIconNames } from "./icon-args";

const meta: Meta<typeof GenericIcon> = {
  title: "Components/Icon/Generic",
  component: GenericIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: genericIconNames,
    },
    size: {
      control: {
        type: "range",
        min: 10,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: "presetColor",
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
  decorators: [
    (Story) => (
      <div className={"grid"}>
        <div className="grid__row">
          <Story />
        </div>
      </div>
    ),
  ],
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
