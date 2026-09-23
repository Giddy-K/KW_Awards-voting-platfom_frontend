// Runtime configuration read from Vite environment variables (see .env.example).
// Only variables prefixed with VITE_ are exposed to the browser; never put
// secrets here.

const configuredApiUrl = import.meta.env.VITE_API_URL;

// In development, fall back to the local Django dev server. In production
// builds VITE_API_URL must be set at build time.
const fallbackApiUrl = import.meta.env.DEV ? 'http://localhost:8000/api' : '';

/** Base URL of the backend API, without a trailing slash. */
export const API_URL = (configuredApiUrl || fallbackApiUrl).replace(/\/+$/, '');
