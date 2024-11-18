const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      backbone: path.resolve(__dirname, "libs/backbone.js"),
    };
    return config;
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
