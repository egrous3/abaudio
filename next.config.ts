/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If deploying to a custom domain, you can remove the basePath
  // If deploying to a GitHub user/org page, set basePath to ''
  // If deploying to a project page, set it to your repo name: '/abaudio'
  basePath: '/abaudio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
