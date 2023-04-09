/** @type {import('next').NextConfig} */
const path = require("path");
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* bydefault config  option Read For More Optios 
   here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/

  cssModules: true
})
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: {
  //   domains: ["", "themoviedb.org"],
  // },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
     
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
       
      },
      
    ],
  },
};

module.exports = nextConfig;
