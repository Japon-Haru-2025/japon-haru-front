import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Ajoutez Sanity ici
      },
    ],
    domains: ['cdn.pixabay.com', 'cdn.sanity.io'], // Vous pouvez aussi ajouter ici
  },
};

export default nextConfig;
