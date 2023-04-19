/** @type { import('@storybook/react').Preview } */
import storybookTheme from "./storybookTheme.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: storybookTheme,
    },
    options: {
      storySort: {
        order: [
          "Getting Started",
          [
            "Introduction",
            "Installing Biome Component Library",
            "Using Biome Component Library",
            "Component Status",
          ],
          "Styling Guide",
          ["Colours", "Typography"],
          "Components",
          [
            "Alignment",
            "Data Display",
            "Feedback",
            "Input",
            "Navigation",
            "Surface",
          ],
        ],
      },
    },
  },
};

export default preview;
