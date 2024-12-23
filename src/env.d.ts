/// <reference types="vite/client" />

interface ImportMetaEnv {
    NODE_ENV: 'development' | 'production';
    VITE_GOOGLE_MAPS_API_KEY: string;
    VITE_FIREBASE_WS_API_KEY: string;
    VITE_FIREBASE_WS_AUTH_DOMAIN: string;
    VITE_FIREBASE_WS_PROJECT_ID: string;
    VITE_FIREBASE_WS_STORAGE_BUCKET: string;
    VITE_FIREBASE_WS_MESSAGING_SENDER_ID: string;
    VITE_FIREBASE_WS_APP_ID: string;
    VITE_FIREBASE_WS_MEASUREMENTID: string;
    VITE_STRIPE_SECRET_API_KEY: string;
    VITE_STRIPE_PUBLIC_API_KEY: string;
    VITE_STRIPE_CURRENCY: string;
    VITE_STRIPE_ENDPOINT_SECRET: string;
    VITE_MAILGUN_API_KEY: string;
    VITE_MAILGUN_DOMAIN: string;
    VITE_MAILGUN_SITE_NAME: string;
    VITE_MAILGUN_INVITE_URL: string;
  }


interface ImportMeta {
  env: ImportMetaEnv;
}
