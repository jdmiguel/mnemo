import Image from "next/image";

export default function Header() {
  return (
    <header>
      <h1 className="mb-3 flex justify-center lg:justify-start">
        <Image
          className="w-full"
          src="./logo.svg"
          alt="logo mnemo"
          width={350}
          height={64}
          priority
        />
      </h1>
      <h2 className="heading-1 text-center lg:text-left">
        Streamline your tasks effectively
      </h2>
    </header>
  );
}
