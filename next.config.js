/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"], // 画像を提供するホスト名を指定
  },
};

module.exports = nextConfig;
