/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Lint is run separately via `npm run lint`; keeping build output clean.
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'i.postimg.cc'
          },
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com'
          },
           {
            protocol: 'https',
            hostname: 'avatar.iran.liara.run'
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com'
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
        ],
      },
};

export default nextConfig;

