const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }
    return config;
  },
  images: {
    domains: ['res.cloudinary.com','www.youtube.com'],
  },
  basePath: '/truxt-landing-page-next-js',
  assetPrefix: '/truxt-landing-page-next-js/',
  images: {
    unoptimized: true, // To support images for GitHub Pages
  },
  output: 'export',
}

module.exports = nextConfig