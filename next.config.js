/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUrl: "https://db7f-49-228-107-196.ap.ngrok.io",
  },
}

module.exports = nextConfig
