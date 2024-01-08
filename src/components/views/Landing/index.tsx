"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "@/components/ui/Link";

export default function Landing() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-background">
      <div className="mb-16 grid grid-cols-24 gap-x-1 gap-y-16 pt-16 sm:gap-y-20 sm:px-0 lg:gap-y-12 2xl:pt-20">
        <div className="order-none col-start-2 col-end-24 -mt-10 flex flex-col gap-5 self-center lg:order-first lg:col-start-2 lg:col-end-11 lg:mt-0 xl:col-start-3 2xl:col-start-5 2xl:col-end-12">
          <h1 className="flex items-center justify-center">
            <Image
              className="w-full max-w-lg md:max-w-none"
              src="./logo.svg"
              alt="logo mnemo"
              width={360}
              height={90}
            />
          </h1>
          <h2 className="text-pretty text-center text-xl text-black-100 sm:text-2xl lg:text-left 2xl:text-3xl">
            Streamline your task management
          </h2>
          <p className="text-pretty text-center text-md text-black-50 lg:text-left">
            Discover Mnemo, your go-to solution for seamless task management.
            Unify all your tasks in one accessible platform, simplifying your
            workflow. With Mnemo, stay organized, boost productivity, and
            experience the ultimate convenience in task management. Elevate your
            efficiency with the power of Mnemo
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:[&_a]:flex-1">
            <Link color="primary" radius="sm" href="./auth/signin">
              Log in
            </Link>
            <Link color="secondary" radius="sm" href="./auth/signup">
              Sign up
            </Link>
          </div>
        </div>
        <Image
          src="/landing-img.png"
          alt="landing img"
          width={400}
          height={400}
          quality={100}
          className="order-first col-start-3 col-end-23 w-full self-center md:col-start-5 md:col-end-21 lg:col-start-13 lg:col-end-24 xl:col-start-14 xl:col-end-23 2xl:col-end-21"
        />
        <div className="col-start-2 col-end-24 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-9 xl:px-4 2xl:col-start-5 2xl:px-0">
          <Image
            src="/landing-notes.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="mb-2 text-xl text-black-100">Notes and Todos</h3>
          <p className="text-pretty text-center text-md text-black-50">
            Effortlessly capture your thoughts and stay organized with our
            intuitive note-taking feature. Create to-do lists, set priorities,
            and never miss a task
          </p>
        </div>
        <div className="col-start-2 col-end-24 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-10 lg:col-end-16 xl:px-4 2xl:col-start-11 2xl:col-end-15 2xl:px-0">
          <Image
            src="/landing-kanban.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="mb-2 text-xl text-black-100">Kanban Boards</h3>
          <p className="text-pretty text-center text-md text-black-50">
            Visualize your workflow and enhance collaboration with our Kanban
            boards. Move tasks across stages, track progress, and boost
            productivity
          </p>
        </div>
        <div className="col-start-2 col-end-24 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-18 lg:col-end-24 xl:col-start-17 xl:col-end-23 xl:px-4 2xl:col-end-21 2xl:px-0">
          <Image
            src="/landing-calendar.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="mb-2 text-xl text-black-100">Personal calendar</h3>
          <p className="text-pretty text-center text-md text-black-50">
            Stay on top of your schedule with our interactive calendar.
            Effortlessly plan events, set your reminders, and organise your time
            with ease
          </p>
        </div>
      </div>
      <footer className="col-span-24 col-start-1 flex w-full justify-center justify-self-center bg-gray-50 p-6 text-sm text-black-100 sm:text-md">
        <p>
          @2024 | created by{" "}
          <a
            href="https:jdmiguel.com"
            target="blank"
            className="font-normal text-purple-100 transition-colors hover:text-purple-200"
          >
            jdmiguel{" "}
          </a>
          | view repo on{" "}
          <a
            href="https://github.com/jdmiguel/mnemo"
            target="blank"
            className="font-normal text-purple-100 transition-colors hover:text-purple-200"
          >
            github
          </a>
        </p>
      </footer>
    </div>
  );
}
