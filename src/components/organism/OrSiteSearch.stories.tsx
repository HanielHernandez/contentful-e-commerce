import type { Meta, StoryObj } from "@storybook/react";
import { OrSiteSearch } from "./OrSiteSearch";

const meta = {
  title: "Organism/SiteSearc",
  component: OrSiteSearch,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof OrSiteSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    results: (
      <ul>
        <li className="px-4 py-2">1</li>
        <li className="px-4 py-2">2</li>
        <li className="px-4 py-2">3</li>
      </ul>
    ),

    value: "Search",
  },
} satisfies Story;
