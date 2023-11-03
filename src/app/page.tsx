import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import Landing from "@/components/views/Landing";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (session?.user) redirect("/dashboard");

  return <Landing />;
}
