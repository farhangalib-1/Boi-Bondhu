/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.haritbooks.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rokbucket.rokomari.io',
        port: '',
        pathname: '/**',
      },
        {
        protocol: 'https',
        hostname: 'wafilife-media.wafilife.com',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'baatighar.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
