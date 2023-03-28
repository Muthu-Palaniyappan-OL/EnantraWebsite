/** @type {import('next').NextConfig} */

const repo = 'EnantraWebsite'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
