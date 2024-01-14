"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { LockKeyhole, Mail, User, EyeIcon, EyeOffIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const SignUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(8),
});

export default function SignUpForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      toast.success("User created successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      router.push("/auth/signin");
    },
    onError: (error) => {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setIsLoading(true);
    createUser.mutate(values);
  };

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        id="name"
        label="Name"
        placeholder="John Doe"
        startContent={
          <User className="stroke-gray-400 dark:stroke-gray-200" size={15} />
        }
        isInvalid={Boolean(errors.name)}
        errorMessage={errors.name?.message}
        {...register("name", {
          required: {
            value: true,
            message: "Please enter a valid name",
          },
        })}
      />
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
        Sign up
      </Button>
    </form>
  );
}