"use client";

import { LockKeyhole, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Button from "@/components/ui/Button";
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
      <p className="mb-8 flex gap-1 text-gray-400 dark:text-gray-200">
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
        <Button color="primary" fullWidth radius="sm">
          {isSignInForm ? "Sign in" : "Sign up"}
        </Button>
        {!isSignInForm && (
          <div className="flex justify-between">
            <Checkbox size="sm">Remember me</Checkbox>
            <Link href="./signin" textSize="small">
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
        <Button color="primary" fullWidth radius="sm" onClick={() => signIn()}>
          Continue with Google
        </Button>
      </div>
    </>
  );
}
