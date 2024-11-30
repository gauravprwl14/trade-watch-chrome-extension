declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
    NEXT_PUBLIC_GA_ID: string;
    // Add other environment variables here
  }
}
