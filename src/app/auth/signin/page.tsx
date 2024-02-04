import { Suspense } from "react";
import FormHeader from "@/components/feature/FormHeader";
import SignInFormWrapper from "@/components/layouts/SignInFormWrapper";

export default function SigninPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-6 sm:p-8">
      <main className="flex w-80 flex-col items-center sm:w-96">
        <div className="flex w-full flex-col items-center">
          <FormHeader
            title="Welcome back"
            text="Do not have an account?"
            link={{ href: "./signup", text: "Sign up" }}
          />
          <Suspense>
            <SignInFormWrapper />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
