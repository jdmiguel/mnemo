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
      <h1 className="mb-2 text-3xl font-bold text-gray-500 dark:text-gray-100">
        {isSignInForm ? "Welcome back" : "Create your account"}
      </h1>
      <p className="mb-10 flex gap-1 text-gray-500 dark:text-gray-200">
        {isSignInForm ? "Do not have an account?" : "Already have an account?"}
        <Link href={isSignInForm ? "./signup" : "./signin"} isTextOnly>
          {isSignInForm ? "Sign up" : "Sign in"}
        </Link>
      </p>
      <div className="flex w-full flex-col gap-3">
        <Input
          type="email"
          placeholder="example@gmail.com"
          label="Email"
          startContent={
            <Mail className="stroke-gray-400 dark:stroke-gray-300" size={15} />
          }
        />
        <Input
          type="password"
          placeholder="············"
          label="Password"
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
            <Link href="./signin" isTextOnly textSize="small">
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
