import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: Boolean(process.env.CI)
  },
  eslint: {
    ignoreDuringBuilds: Boolean(process.env.CI)
  }
}

export default nextConfig
