import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount =
{
  type: "service_account",
  project_id: import.meta.env.FIREBASE_PROJECT_ID,
  private_key_id: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: import.meta.env.FIREBASE_PRIVATE_KEY,
  client_email: import.meta.env.FIREBASE_CLIENT_EMAIL,
  client_id: import.meta.env.FIREBASE_CLIENT_ID,
  auth_uri: import.meta.env.FIREBASE_AUTH_URI,
  token_uri: import.meta.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: import.meta.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: import.meta.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: import.meta.env.FIREBASE_UNIVERSE_DOMAIN,
}

export const app = initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const firestore = getFirestore(app);