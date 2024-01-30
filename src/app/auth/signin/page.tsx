import FormHeader from "@/components/feature/FormHeader";
import SigninForm from "@/components/feature/SignInForm";
import GoogleProviderButton from "@/components/feature/GoogleProviderButton";

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
          <div className="flex w-full flex-col gap-3">
            <SigninForm />
            <div className="mt-1 flex items-center gap-4">
              <hr className="w-full border-gray-300" />
              <span className="small-text">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <GoogleProviderButton />
          </div>
        </div>
      </main>
    </div>
  );
}
