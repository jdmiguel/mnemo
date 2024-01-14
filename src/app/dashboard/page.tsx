import AppLayout from "@/components/layout/AppLayout";
import Header from "@/components/ui/Header";

export default function DashboardPage() {
  return (
    <AppLayout section="dashboard">
      <div className="flex flex-1 flex-col">
        <div className="flex w-full justify-center p-11">
          <Header />
        </div>
        <main></main>
      </div>
    </AppLayout>
  );
}
