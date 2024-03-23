import SigninForm from "@/components/features/forms/SignInForm";
import GoogleProviderButton from "@/components/features/buttons/GoogleProviderButton";

export default function SignInFormLayout() {
  return (
    <div className="flex w-full flex-col gap-3">
      <SigninForm />
      <div className="mt-1 flex items-center gap-4">
        <hr className="w-full border-gray-400" />
        <span className="text-small">OR</span>
        <hr className="w-full border-gray-400" />
      </div>
      <GoogleProviderButton />
    </div>
  );
}
