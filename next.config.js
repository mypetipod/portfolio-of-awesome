/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio-of-awesome",
  assetPrefix: "/portfolio-of-awesome",
};

const pathPrefix = process.env.NODE_ENV === "production" ? "/my-project" : "";

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};

module.exports = nextConfig;
