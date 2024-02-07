import SigninForm from "@/components/feature/forms/SignInForm";
import GoogleProviderButton from "@/components/feature/buttons/GoogleProviderButton";

export default function SignInFormWrapper() {
  return (
    <div className="flex w-full flex-col gap-3">
      <SigninForm />
      <div className="mt-1 flex items-center gap-4">
        <hr className="w-full border-gray-300" />
        <span className="small-text">OR</span>
        <hr className="w-full border-gray-300" />
      </div>
      <GoogleProviderButton />
    </div>
  );
}
