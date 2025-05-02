/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/portfolio-of-awesome" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
