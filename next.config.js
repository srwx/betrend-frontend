/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUrl: "https://254d-171-103-207-66.ap.ngrok.io",
  },
}

module.exports = nextConfig
