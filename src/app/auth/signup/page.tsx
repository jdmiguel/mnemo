import SignUpPageComponent from "@/components/page/SignUpPage";

export default function SignUpPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-6 sm:p-8">
      <main className="flex w-80 flex-col items-center sm:w-96">
        <SignUpPageComponent />
      </main>
    </div>
  );
}
