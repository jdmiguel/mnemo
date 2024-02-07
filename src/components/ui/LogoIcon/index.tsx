import Image from "next/image";

export default function LogoIcon() {
  return (
    <Image
      src="./logo-icon.svg"
      alt="logo mnemo"
      width={256}
      height={239}
      priority
    />
  );
}
