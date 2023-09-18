import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TechnologyIcon } from "../technology";
import { technologyIconNames } from "./icon-args";

const meta: Meta<typeof TechnologyIcon> = {
  title: "Components/Icon/Technology",
  component: TechnologyIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: technologyIconNames,
    },
    color: {
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallTechnologyIcon: Story = {
  args: {
    name: "Yarn",
    size: 40,
  },
};

export const AllTechnologyIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {technologyIconNames.map((name, index) => (
          <TechnologyIcon
            key={`${name}--${index}`}
            name={name}
            size={40}
            color={"red"}
          />
        ))}
      </div>
    );
  },
};
