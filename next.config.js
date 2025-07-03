/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for isolated-vm package issues
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push('isolated-vm');
    }
    return config;
  },
};

module.exports = nextConfig;
