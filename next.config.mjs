/** @type {import('next').NextConfig} */
const nextConfig = {
  // Timestamp build ID to force cache invalidation
  generateBuildId: async () => {
    return `no-cursor-${Date.now()}`;
  },
};

export default nextConfig;
