"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import {
  LockKeyholeIcon,
  MailIcon,
  PenSquareIcon,
  UserIcon,
} from "lucide-react";
import { createUser } from "@/server/actions/user";
import { SignUpSchema } from "@/lib/schema";
import TogglePasswordVisibilityButton from "@/components/features/buttons/TogglePasswordVisibilityButton";
import { Button } from "@nextui-org/button";
import Input from "@/components/ui/Input";

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

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    setIsLoading(true);

    const result = await createUser(values);

    setIsLoading(false);

    if (result.success) {
      toast.success(result.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      router.push("/auth/signin");
      return;
    }

    toast.error(result.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
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
          <UserIcon
            className="stroke-gray-500 dark:stroke-gray-300"
            size={15}
          />
        }
        isInvalid={Boolean(errors.name)}
        errorMessage={errors.name?.message}
        {...register("name", {
          required: true,
        })}
      />
      <Input
        type="text"
        id="email"
        label="Email"
        placeholder="johndoe@gmail.com"
        startContent={
          <MailIcon
            className="stroke-gray-500 dark:stroke-gray-400"
            size={15}
          />
        }
        isInvalid={Boolean(errors.email)}
        errorMessage={errors.email?.message}
        {...register("email", {
          required: true,
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
          <LockKeyholeIcon
            className="stroke-gray-500 dark:stroke-gray-300"
            size={15}
          />
        }
        endContent={
          <TogglePasswordVisibilityButton
            action={isPasswordVisible ? "hide" : "show"}
            onClick={() =>
              setIsPasswordVisible((isPasswordVisible) => !isPasswordVisible)
            }
          />
        }
        isInvalid={Boolean(errors.password)}
        errorMessage={errors.password?.message}
        {...register("password", {
          required: true,
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
        startContent={<PenSquareIcon size={17} />}
        fullWidth
        radius="sm"
        isLoading={isLoading}
      >
        Sign up
      </Button>
    </form>
  );
}
