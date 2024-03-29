"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/button";

export default function GoogleProviderButton() {
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const redirectUrl = pageParam || "/dashboard";

  const onClick = async () => {
    setIsLoading(true);

    try {
      await signIn("google", { callbackUrl: redirectUrl });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "500 error, please try again later";

      toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      color="primary"
      radius="sm"
      variant="flat"
      fullWidth
      onClick={onClick}
      isLoading={isLoading}
    >
      Continue with Google
    </Button>
  );
}
