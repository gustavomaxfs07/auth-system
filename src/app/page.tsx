import { auth } from "@/lib/auth";
import { redirect } from "next/dist/client/components/navigation";
import { headers } from "next/dist/server/request/headers";

export default async function Home() {

  const session = await auth.api.getSession({
      headers: await headers(),
    });
  
    console.log("Session:", session);
  
    if (!session) {
      redirect('/auth/login');
    }

  return (
    <main>
      <h1>LOGADOOOOOOOOOOOOOOO</h1>
    </main>
  );
}
