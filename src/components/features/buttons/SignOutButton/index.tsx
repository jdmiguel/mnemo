import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";
import { Button } from "@nextui-org/button";

export default function SignOutButton() {
  return (
    <Button
      color="primary"
      radius="sm"
      fullWidth
      startContent={<LogOutIcon size={17} />}
      className="order-2 md:order-1"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </Button>
  );
}
