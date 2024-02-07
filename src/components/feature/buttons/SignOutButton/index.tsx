import { signOut } from "next-auth/react";
import Button from "@/components/ui/Button";

export default function SignOutButton() {
  return (
    <Button
      className="order-2 md:order-1"
      color="primary"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );
}
