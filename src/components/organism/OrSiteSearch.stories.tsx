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
    results:  <ul> <li> 
      
      </li></ul>,
    placeholder: "My text field",
  },
} satisfies Story;

