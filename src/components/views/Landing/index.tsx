"use client";

import Image from "next/image";
import Link from "@/components/ui/Link";

export default function Landing() {
  return (
    <div className="grid-cols-24 grid h-screen gap-x-1 px-12 py-8">
      <div className="flex flex-col gap-4 self-center lg:col-start-2 lg:col-end-12 xl:col-end-11 2xl:col-start-3">
        <Image
          className="w-80 sm:w-96"
          src="./logo.svg"
          alt="logo mnemo"
          width={360}
          height={90}
        />
        <p className="text-xl font-light text-gray-400">
          Welcome to Mnemo, the ultimate, innovative solution for effortlessly
          keeping and managing all your reminders in one accessible place
        </p>
        <div className="mt-3 flex gap-2 [&_a]:flex-1">
          <Link color="primary" radius="sm" href="./auth/signin">
            Log in
          </Link>
          <Link color="secondary" radius="sm" href="./auth/signup">
            Sign up
          </Link>
        </div>
      </div>
      <Image
        src="./landing-img.svg"
        alt="landing img"
        width={400}
        height={400}
        className="lg:col-end-24 lg:col-start-15 xl:col-start-14 mb-8 w-full max-w-2xl self-center"
      />
      <div className="lg:col-start-2 lg:col-end-8 2xl:col-start-3 2xl:col-end-9">
        <h3 className="mb-2 text-xl font-normal text-gray-500">
          Notes and Todos
        </h3>
        <p className="font-light text-gray-400">
          Effortlessly capture your thoughts and stay organized with our
          intuitive note-taking feature. Create to-do lists, set priorities, and
          never miss a task
        </p>
      </div>
      <div className="lg:col-end-16 2xl:col-end-16 lg:col-start-10">
        <h3 className="mb-2 text-xl font-normal text-gray-500">
          Kanban Boards
        </h3>
        <p className="font-light text-gray-400">
          Visualize your workflow and enhance collaboration with our Kanban
          boards. Move tasks across stages, track progress, and boost
          productivity
        </p>
      </div>
      <div className="lg:col-end-24 lg:col-start-18 2xl:col-start-17 2xl:col-end-23">
        <h3 className="mb-2 text-xl font-normal text-gray-500">
          Personal calendar
        </h3>
        <p className="font-light text-gray-400">
          Stay on top of your schedule with our interactive calendar.
          Effortlessly plan events, set your reminders, and organise your time
          with ease
        </p>
      </div>
    </div>
  );
}
