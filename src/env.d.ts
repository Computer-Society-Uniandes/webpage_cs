/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_SOTRAGE_BUCKET: string;
    readonly FIREBASE_MESSAGING_SENDER_ID: string;
    readonly FIREBASE_APP_ID: string;
    readonly FIREBASE_MEASUREMENT_ID: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}