/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["deifkwefumgah.cloudfront.net"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
