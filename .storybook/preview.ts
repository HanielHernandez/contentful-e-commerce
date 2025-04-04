import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  tags: ["autodocs"],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
