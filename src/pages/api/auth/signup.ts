import { app } from "@lib/firebase/server";
import { getAuth } from "firebase-admin/auth";
import { registerSchema } from "@lib/schemas";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);
  
  const formData = await request.formData();
  const result = registerSchema.safeParse(formData);

  /* Validate the data */
  if (!result.success) {
    return new Response(
      JSON.stringify({
        // @ts-ignore
        errors: result.error.flatten(),
      }),
      { status: 400 }
    );
  }

  /* Create the user */
  const { email, password, name } = result.data;

  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error.code,
      }),
      { status: 400 }
    );
  }
  return redirect("/signin", 302);
};