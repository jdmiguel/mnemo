"use client";

import { useState } from "react";
import { LockKeyhole, Mail, EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
// import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Link from "@/components/ui/Link";

const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8),
});

export default function SignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [signInError, setSignInError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    setSignInError("");

    const signinData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signinData?.error) {
      setSignInError(signinData?.error);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <h1 className="mb-2 text-3xl font-bold text-gray-500 dark:text-gray-100">
        Welcome back
      </h1>
      <p className="mb-10 flex gap-1 text-gray-500 dark:text-gray-200">
        Do not have an account?
        <Link href="./signup" isTextOnly>
          Sign up
        </Link>
      </p>
      <div className="flex w-full flex-col gap-3">
        <form
          className="flex w-full flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            id="email"
            label="Email"
            placeholder="johndoe@gmail.com"
            startContent={
              <Mail
                className="stroke-gray-400 dark:stroke-gray-300"
                size={15}
              />
            }
            isInvalid={Boolean(errors.email)}
            errorMessage={errors.email?.message}
            {...register("email", {
              required: {
                value: true,
                message: "Please enter a valid email",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            label="Password"
            placeholder="············"
            startContent={
              <LockKeyhole
                className="stroke-gray-400 dark:stroke-gray-200"
                size={15}
              />
            }
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() =>
                  setIsPasswordVisible((prevIsVisible) => !prevIsVisible)
                }
              >
                {isPasswordVisible ? (
                  <EyeOffIcon
                    className="stroke-gray-400 dark:stroke-gray-200"
                    size={15}
                  />
                ) : (
                  <EyeIcon
                    className="stroke-gray-400 dark:stroke-gray-200"
                    size={15}
                  />
                )}
              </button>
            }
            isInvalid={Boolean(errors.password)}
            errorMessage={errors.password?.message}
            {...register("password", {
              required: {
                value: true,
                message: "Please enter a valid password",
              },
              minLength: {
                value: 8,
                message: "min length allowed is 8",
              },
              maxLength: {
                value: 32,
                message: "max length allowed is 32",
              },
            })}
          />
          <Button type="submit" color="primary" fullWidth radius="sm">
            Sign in
          </Button>
          {signInError && (
            <p className="text-center text-md font-bold text-red-50">
              {signInError}
            </p>
          )}
        </form>
        {/*!isSignUpForm && (
          <div className="flex justify-between">
            <Checkbox size="sm">Remember me</Checkbox>
            <Link href="./signin" isTextOnly textSize="small">
              Forgot Password?
            </Link>
          </div>
        )*/}
        <div className="mt-1 flex items-center gap-4">
          <hr className="w-full border-gray-300" />
          <span className="text-sm font-normal text-gray-400 dark:text-gray-300">
            OR
          </span>
          <hr className="w-full border-gray-300" />
        </div>
        <Button
          color="primary"
          fullWidth
          radius="sm"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Continue with Google
        </Button>
      </div>
    </>
  );
}
