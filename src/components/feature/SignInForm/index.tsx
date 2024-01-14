"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { LockKeyhole, Mail, EyeIcon, EyeOffIcon } from "lucide-react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8),
});

export default function SignInForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const redirectUrl = pageParam || "/dashboard";

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof SignInSchema>) => {
    setIsLoading(true);

    const signinData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setIsLoading(false);

    if (signinData?.error) {
      toast.error(signinData.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return;
    }

    router.push(redirectUrl);
  };

  return (
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
          <Mail className="stroke-gray-400 dark:stroke-gray-300" size={15} />
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
      <Button
        type="submit"
        color="primary"
        fullWidth
        radius="sm"
        isLoading={isLoading}
      >
        Sign in
      </Button>
    </form>
  );
}
