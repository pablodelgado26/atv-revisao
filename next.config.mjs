/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.iplace.com.br',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'images.kabum.com.br',
      },
      {
        protocol: 'https',
        hostname: 'carrefourbr.vtexassets.com',
      },
      {
        protocol: 'https',
        hostname: 'files.tecnoblog.net',
      },
    ],
  },
};

export default nextConfig;
