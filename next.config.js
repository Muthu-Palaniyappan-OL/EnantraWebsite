/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

var assetPrefix;
var basePath;

if (isGithubActions) {
  
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`

}

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
