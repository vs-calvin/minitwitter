import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { YelloWorld as HelloWorld } from "./components/HelloWorld";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6z1c9EE4PkJC3guUbZvwff", // ID of a project you are using
      token:
        "v0E8rKes9ck3ooZgIRXyArZoYwfw6gazRORtWBL5Y5GmcBfa1JeZDJdcOzwmWQVzbz2IgxRgu67XqyVkkV9g", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(HelloWorld, {
  name: "HelloWorld",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
