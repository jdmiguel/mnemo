"use client";

import Image from "next/image";
import MnemoHeader from "@/components/views/MnemoHeader";
import Link from "@/components/ui/Link";

export default function Landing() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:gap-32">
      <div className="mt-4 flex flex-col">
        <MnemoHeader />
        <div className="mt-8 flex flex-col gap-3">
          <Link color="primary" radius="sm" href="./signin">
            Log in
          </Link>
          <Link color="secondary" radius="sm" href="./signup">
            Sign up
          </Link>
        </div>
      </div>
      <Image
        src="./landing-img.svg"
        alt="landing img"
        width={400}
        height={400}
      />
    </div>
  );
}
