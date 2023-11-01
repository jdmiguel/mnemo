import AppLayout from "@/components/views/AppLayout";
import MnemoHeader from "@/components/views/MnemoHeader";

export default function DashboardPage() {
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
