import SignInPageComponent from "@/components/page/SignInPage";

export default function SigninPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-6 sm:p-8">
      <main className="flex w-80 flex-col items-center sm:w-96">
        <SignInPageComponent />
      </main>
    </div>
  );
}
