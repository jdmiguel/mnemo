import Image from "next/image";

export default function Header() {
  return (
    <header>
      <h1 className="mb-3 flex justify-center lg:justify-start">
        <Image
          className="w-full max-w-lg"
          src="./logo.svg"
          alt="logo mnemo"
          width={360}
          height={90}
        />
      </h1>
      <h2 className="heading-1 text-center lg:text-left">
        Streamline your tasks effectively
      </h2>
    </header>
  );
}
