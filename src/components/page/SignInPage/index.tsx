import GoogleProviderButton from "@/components/feature/GoogleProviderButton";
import FormHeader from "@/components/feature/FormHeader";
import SigninForm from "@/components/feature/SignInForm";

export default function SignInPage() {
  return (
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
  );
}
