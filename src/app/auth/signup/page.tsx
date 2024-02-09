import FormHeader from "@/components/features/headers/FormHeader";
import SignUpForm from "@/components/features/forms/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-6 sm:p-8">
      <main className="flex w-80 flex-col items-center sm:w-96">
        <div className="flex w-full flex-col items-center">
          <FormHeader
            title="Create your account"
            text="Already have an account?"
            link={{ href: "./signin", text: "Sign in" }}
          />
          <div className="flex w-full flex-col gap-3">
            <SignUpForm />
          </div>
        </div>
      </main>
    </div>
  );
}
