/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    // Same behavior as the "src" example above:
    src: { url: "/dist" },
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: { url: "/", static: true, resolve: false },
  },

  plugins: [
    [
      "@snowpack/plugin-typescript",
      {
        tsc: "tsc",
      },
    ],
  ],
};
