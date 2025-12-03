export const register = async () => {
  // Validate environment variables on Next.js server startup
  console.log('Validating Environment Variables.')
  await import('@/env/server.mjs')
}
