import FormHeader from "@/components/feature/FormHeader";
import SignUpForm from "@/components/feature/SignUpForm";

export default function SignUpPage() {
  return (
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
  );
}
