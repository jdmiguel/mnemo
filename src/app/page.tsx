import { getServerAuthSession } from "@/server/auth";
import AppLayout from "@/components/views/AppLayout";
import MnemoHeader from "@/components/views/MnemoHeader";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerAuthSession();

  if (!session?.user.id) redirect("/signin");

  return (
    <AppLayout section="dashboard">
      <div className="flex flex-1 flex-col">
        <div className="flex w-full justify-center p-11">
          <MnemoHeader />
        </div>
        <main></main>
      </div>
    </AppLayout>
  );
}
