"use client";

import { useState } from "react";
import { LockKeyhole, Mail, User, EyeIcon, EyeOffIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import Link from "@/components/ui/Link";

type SignFormProps = {
  type: "signIn" | "signUp";
};

export default function SignForm({ type }: SignFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const isSignUpForm = type === "signUp";

  const onSubmit = handleSubmit((data) => {
    console.log("onSubmit");
    console.log({ data });

    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }
  });

  return (
    <>
      <h1 className="mb-2 text-3xl font-bold text-gray-500 dark:text-gray-100">
        {isSignUpForm ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mb-10 flex gap-1 text-gray-500 dark:text-gray-200">
        {isSignUpForm ? "Already have an account?" : "Do not have an account?"}
        <Link href={isSignUpForm ? "./signin" : "./signup"} isTextOnly>
          {isSignUpForm ? "Sign in" : "Sign up"}
        </Link>
      </p>
      <div className="flex w-full flex-col gap-3">
        <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
          {isSignUpForm && (
            <>
              <Input
                type="text"
                id="name"
                label="Name"
                placeholder="John Doe"
                startContent={
                  <User
                    className="stroke-gray-400 dark:stroke-gray-200"
                    size={15}
                  />
                }
                isInvalid={Boolean(errors.username)}
                errorMessage={errors.username?.message as string}
                {...register("username", {
                  required: {
                    value: true,
                    message: "Please enter a valid username",
                  },
                })}
              />
            </>
          )}
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
            errorMessage={errors.email?.message as string}
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
            errorMessage={errors.password?.message as string}
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
          {isSignUpForm && (
            <Input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              label="Confirm password"
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
                    setIsConfirmPasswordVisible(
                      (prevIsVisible) => !prevIsVisible,
                    )
                  }
                >
                  {isConfirmPasswordVisible ? (
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
              isInvalid={Boolean(errors.confirmPassword)}
              errorMessage={errors.confirmPassword?.message as string}
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Please enter the same password as above",
                },
                validate: (value: string, formValues) =>
                  value === formValues.password,
              })}
            />
          )}
          <Button type="submit" color="primary" fullWidth radius="sm">
            {isSignUpForm ? "Sign up" : "Sign in"}
          </Button>
        </form>
        {!isSignUpForm && (
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
