import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  // Server-side environment variables
  server: {
    /** App version */
    APP_VERSION: z.string().default('0.1.0'),
    /** Logger log level */
    PINO_LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info')
  },
  experimental__runtimeEnv: {
    ENVIRONMENT: process.env.ENVIRONMENT || 'DEV'
  }
})
