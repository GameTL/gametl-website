/** @type {import('next').NextConfig} */
const { join } = require("path")

module.exports = {
  reactStrictMode: true,
  // pwa: {
  //   dest: "build",
  //   swSrc: "service-worker.js",
  // },
  images: {
    domains: ["via.placeholder.com"],
    unoptimized: true,
  },
  // assetPrefix: process.env.NODE_ENV === "production" ? "/eic-website/" : "/",
  // basePath: process.env.NODE_ENV === "production" ? "/eic-website" : "",
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "src"),
      // "@styles": join(__dirname, "src/styles"),
      // "@components": join(__dirname, "src/components"),
      // "@pages": join(__dirname, "src/pages"),
      // "@helpers": join(__dirname, "src/helpers"),
      // "@types": join(__dirname, "src/types"),
      // "@modules": join(__dirname, "src/modules"),
      // "@utils": join(__dirname, "src/utils"),
      // "@utilities": join(__dirname, "src/utilities"),
      // "@handlers": join(__dirname, "src/handlers"),
      // "@config": join(__dirname, "src/config"),
      // "@models": join(__dirname, "src/models"),
      // "@hooks": join(__dirname, "src/hooks"),
      // "@lib": join(__dirname, "src/lib"),
      // "@services": join(__dirname, "src/services"),
      // "@vectors": join(__dirname, "src/vectors"),
    }

    return config
  },
}
