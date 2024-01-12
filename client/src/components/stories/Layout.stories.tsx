import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";
import { Header } from "../Header";
import { Footer } from "../Footer";

const noop = () => {
    // do nothing
};

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;
export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    args: {
        children: [<Header handleAddItem={noop}>Header</Header>, <Footer />],
    },
};
