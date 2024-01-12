import { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import { TrashIcon } from "@radix-ui/react-icons";

const meta = {
    title: "Button",
    component: Button,
} as Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: <TrashIcon />,
    },
};

export const VariantPrimary: Story = {
    args: {
        variant: "primary",
        ...Default.args,
    },
};
export const VariantSuccess: Story = {
    args: {
        variant: "success",
        ...Default.args,
    },
};
export const VariantError: Story = {
    args: {
        variant: "error",
        ...Default.args,
    },
};
