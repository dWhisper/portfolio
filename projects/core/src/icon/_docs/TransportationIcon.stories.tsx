import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { transportationIconName } from "./icon-args";
import { TransportationIcon } from "../transportation";

const meta: Meta<typeof TransportationIcon> = {
  title: "Components/Icon/Transportation",
  component: TransportationIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: transportationIconName,
    },
    size: {
      type: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TransportationIcon40: Story = {
  args: {
    name: "Bicycle",
    size: 40,
    color: "blue",
  },
};

export const AllTransportationIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {transportationIconName.map((name, index) => (
          <TransportationIcon
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
