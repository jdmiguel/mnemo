import SignForm from "@/components/views/SignForm";

export default function SignupPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-6 sm:p-8">
      <main className="flex w-80 flex-col items-center sm:w-96">
        <SignForm type="signUp" />
      </main>
    </div>
  );
}
