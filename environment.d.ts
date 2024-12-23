    declare namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        VITE_GOOGLE_MAPS_API_KEY: string;
        REACT_APP_FIREBASE_API_KEY: string;
        REACT_APP_FIREBASE_AUTH_DOMAIN: string;
        REACT_APP_FIREBASE_PROJECT_ID: string;
        REACT_APP_FIREBASE_STORAGE_BUCKET: string;
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
        REACT_APP_FIREBASE_APP_ID: string;
        REACT_APP_FIREBASE_MEASUREMENTID: string;
        REACT_APP_STRIPE_SECRET_API_KEY: string;
        REACT_APP_STRIPE_PUBLIC_API_KEY: string;
        REACT_APP_STRIPE_CURRENCY: string;
        REACT_APP_STRIPE_ENDPOINT_SECRET: string;
        REACT_APP_MAILGUN_API_KEY: string;
        REACT_APP_MAILGUN_DOMAIN: string;
        REACT_APP_MAILGUN_SITE_NAME: string;
        REACT_APP_MAILGUN_INVITE_URL: string;
      }
    }

  export{};