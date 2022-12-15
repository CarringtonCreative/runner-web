// module.exports = {
//   stories: [
//     "../app/components/**/*.stories.mdx",
//     "../app/components/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     "storybook-addon-sass-postcss",
//   ],
//   framework: "@storybook/react",
//   core: {
//     builder: "@storybook/builder-webpack5",
//   },
// };

const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: [
    path.resolve(__dirname, "../app/**/*.stories.mdx"),
    path.resolve(__dirname, "../app/**/*.stories.@(js|jsx|ts|tsx)"),
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

    //{ <--- Notice how I'm bypassing @storybook/addon-postcss.
    // I'm commenting it out as I'm waiting for this thing to catch up and work properly with normal Tailwind project setup as described in their documentation.

    //  name: '@storybook/addon-postcss',
    //  options: {
    //    cssLoaderOptions: {
    //      // When you have splitted your css over multiple files
    //      // and use @import('./other-styles.css')
    //      importLoaders: 1,
    //    },
    //    postcssLoaderOptions: {
    //      implementation: require('postcss'),
    //    },
    //  },
    //},
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  // <--- This is the important bit. It's where I use a different postprocessing method using the latest version of 'postcss-loader'.

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
