import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MediaIcon } from "../media";
import { mediaIconNames } from "./icon-args";

const meta: Meta<typeof MediaIcon> = {
  title: "Components/Icon/Media",
  component: MediaIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: mediaIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallMediaIcon: Story = {
  args: {
    name: "Airpods",
    size: 40,
    color: "red",
  },
};

export const AllMediaIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {mediaIconNames.map((name, index) => (
          <MediaIcon
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
