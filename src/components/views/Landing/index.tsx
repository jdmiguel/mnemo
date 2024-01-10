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
      <div className="mb-16 grid grid-cols-24 gap-x-1 gap-y-16 pt-14 sm:gap-y-20 sm:px-0 sm:pt-24 lg:gap-y-12">
        <div className="order-none col-start-3 col-end-23 -mt-10 flex flex-col gap-5 self-center lg:order-first lg:col-start-2 lg:col-end-11 lg:mt-0 xl:col-start-3 2xl:col-start-5 2xl:col-end-12">
          <h1 className="flex justify-center lg:justify-start">
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
          <p className="text-1 text-center lg:text-left">
            Discover Mnemo, your go-to solution for seamless task management.
            Unify all your tasks in one accessible platform, simplifying and
            enhacing your workflow
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
          src="/landing-presentation.png"
          alt="mnemo presentation"
          width={600}
          height={442}
          priority
          className="order-first col-start-3 col-end-23 w-full self-center md:col-start-5 md:col-end-21 lg:col-start-13 lg:col-end-24 xl:col-start-14 xl:col-end-23 2xl:col-end-21"
        />
        <div className="col-start-3 col-end-23 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-9 xl:px-4 2xl:col-start-5 2xl:px-0">
          <Image
            src="/landing-notes.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="heading-2 mb-2">Notes and Todos</h3>
          <p className="text-1 text-center">
            Capture thoughts effortlessly, stay organized: Intuitive note-taking
            feature for to-do lists, and never missing a task
          </p>
        </div>
        <div className="col-start-3 col-end-23 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-10 lg:col-end-16 xl:px-4 2xl:col-start-11 2xl:col-end-15 2xl:px-0">
          <Image
            src="/landing-kanban.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="heading-2 mb-2">Kanban Boards</h3>
          <p className="text-1 text-center">
            Visualize workflow, boost collaboration using Kanban boards, and
            track tasks for enhanced productivity
          </p>
        </div>
        <div className="col-start-3 col-end-23 flex flex-col items-center md:col-start-5 md:col-end-21 lg:col-start-18 lg:col-end-24 xl:col-start-17 xl:col-end-23 xl:px-4 2xl:col-end-21 2xl:px-0">
          <Image
            src="/landing-calendar.svg"
            alt="landing img"
            width={400}
            height={400}
            className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
          />
          <h3 className="heading-2 mb-2">Personal calendar</h3>
          <p className="text-1 text-center">
            Master your schedule: Plan events, set reminders, and organize time
            effortlessly with our interactive calendar
          </p>
        </div>
      </div>
      <footer className="text-1 col-start-3 col-end-23 flex w-full flex-col items-center justify-center bg-gray-50 p-6 sm:flex-row">
        <div>
          <span>@2024</span>
          <span className="before:content-['|']">created by </span>
          <a href="https:jdmiguel.com" target="blank" className="link">
            jdmiguel{" "}
          </a>
        </div>
        <div className="before:content-['|']">
          view repo on{" "}
          <a
            href="https://github.com/jdmiguel/mnemo"
            target="blank"
            className="link"
          >
            github
          </a>
        </div>
      </footer>
    </div>
  );
}
