import { app } from "@/lib/firebase/server";
import { getAuth } from "firebase-admin/auth";

const auth = getAuth(app);

export async function getUser(cookie: string) {
  try {
    const decodedIdToken = await auth.verifySessionCookie(cookie, true);
    const user = await auth.getUser(decodedIdToken.uid);
    return user;
  } catch (error) {
    return null;
  }
}
