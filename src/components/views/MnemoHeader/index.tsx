import Image from "next/image";

export default function MnemoHeader() {
  return (
    <header className="flex flex-col items-center">
      <h1 className="mb-3">
        <Image
          className="w-80 sm:w-auto"
          src="./logo.svg"
          alt="logo mnemo"
          width={360}
          height={90}
        />
      </h1>
      <h2 className="heading-2">All your reminders in one place</h2>
    </header>
  );
}
