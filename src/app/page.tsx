import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/server/auth";
import LandingPage from "@/components/page/LandingPage";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (session?.user) redirect("/dashboard");

  return <LandingPage />;
}
