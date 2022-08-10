/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"] //allowing domains to provide images
  }
}

module.exports = nextConfig
