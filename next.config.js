/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.microcms-assets.io",
      "cache2-ebookjapan.akamaized.net",
      "c.media-amazon.com",
      "m.media-amazon.com",
      "cv.bkmkn.kodansha.co.jp",
      "thumb.ac-illust.com",
    ], // 画像を提供するホスト名を指定
  },
};

module.exports = nextConfig;
