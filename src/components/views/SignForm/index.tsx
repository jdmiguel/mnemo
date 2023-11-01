import { LockKeyhole, Mail } from "lucide-react";
import { Button } from "@nextui-org/button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Link from "@/components/ui/Link";

type SignFormProps = {
  type: "signIn" | "signUp";
};

export default function SignForm({ type }: SignFormProps) {
  const isSignInForm = type === "signIn";

  return (
    <>
      <p className="mb-8  text-gray-400 dark:text-gray-200">
        {isSignInForm ? "Do not have an account?" : "Already have an account?"}
        <Link href={isSignInForm ? "./signup" : "./signin"}>
          {isSignInForm ? "Sign up" : "Sign in"}
        </Link>
      </p>
      <div className="flex w-full flex-col gap-3">
        <Input
          type="email"
          placeholder="Email"
          startContent={
            <Mail className="stroke-gray-400 dark:stroke-gray-200" size={15} />
          }
        />
        <Input
          type="password"
          placeholder="Password"
          startContent={
            <LockKeyhole
              className="stroke-gray-400 dark:stroke-gray-200"
              size={15}
            />
          }
        />
        <Button
          color="primary"
          className="hover:bg-primary-50"
          fullWidth
          radius="sm"
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </Button>
        {!isSignInForm && (
          <div className="flex justify-between">
            <Checkbox size="sm">Remember me</Checkbox>
            <Link href="./signin" size="small">
              Forgot Password?
            </Link>
          </div>
        )}
        <div className="mt-4 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <span className="text-sm font-normal text-gray-400 dark:text-gray-300">
            OR
          </span>
          <hr className="w-full border-gray-300" />
        </div>
        <Button
          color="primary"
          className="hover:bg-primary-50"
          fullWidth
          radius="sm"
        >
          Continue with Google
        </Button>
      </div>
    </>
  );
}
