/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://api.nodemailer.com/:path*',
          },
        ]
      },
  };
