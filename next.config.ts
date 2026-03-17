/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // This allows production builds to complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // If you also have ESLint errors, add this too:
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;