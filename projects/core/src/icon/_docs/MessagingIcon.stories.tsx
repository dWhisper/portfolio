import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { messagingIconNames } from "./icon-args";
import { MessagingIcon } from "../messaging/MessagingIcon";

const meta: Meta<typeof MessagingIcon> = {
  title: "Components/Icon/Messaging",
  component: MessagingIcon,
  tags: ["icons"],
  argTypes: {
    name: {
      options: messagingIconNames,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallMessagingIcon: Story = {
  args: {
    name: "ChatBubble",
    size: 40,
    color: "red",
  },
};

export const AllMessagingIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {messagingIconNames.map((name, index) => (
          <MessagingIcon
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
