/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only apply basePath in production build, not during development
  basePath: process.env.NODE_ENV === 'production' ? '/abaudio' : '',
  images: {
    unoptimized: true,
  },
  // This is needed to make GitHub Pages work with client-side routing
  trailingSlash: true,
};

export default nextConfig;
