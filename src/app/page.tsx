import { redirect } from "next/navigation";
import Image from "next/image";
import { LogInIcon, PenSquareIcon } from "lucide-react";
import { getServerAuthSession } from "@/server/auth";
import Header from "@/components/ui/Header";
import Link from "@/components/ui/Link";
import InfoPanel from "@/components/ui/InfoPanel";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (session?.user) redirect("/dashboard");

  return (
    <div className="flex h-svh flex-col">
      <div className="mb-16 grid flex-1 grid-cols-24 gap-x-1 gap-y-16 pt-14 sm:gap-y-20 sm:px-0 lg:gap-y-12 xl:pt-24">
        <div className="order-none col-start-3 col-end-23 -mt-10 flex flex-col gap-5 self-center sm:col-start-4 sm:col-end-22 lg:order-first lg:col-start-2 lg:col-end-11 lg:mt-0 xl:col-start-3 2xl:col-start-5 2xl:col-end-12">
          <Header />
          <p className="text-center text-large lg:text-left">
            Discover Mnemo, your go-to solution for seamless task management.
            Unify all your tasks in one accessible platform, simplifying and
            enhacing your workflow
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:[&_a]:flex-1">
            <Link color="primary" radius="sm" href="./auth/signin">
              <LogInIcon size={17} />
              Log in
            </Link>
            <Link
              color="primary"
              radius="sm"
              href="./auth/signup"
              variant="flat"
              data-variant="flat"
            >
              <PenSquareIcon size={17} />
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
        <div className="col-start-3 col-end-23 flex md:col-start-5 md:col-end-21 lg:col-start-2 lg:col-end-8 xl:col-start-3 xl:col-end-9 xl:px-4 2xl:col-start-5 2xl:px-0">
          <InfoPanel
            image={{ src: "/landing-notes.svg", alt: "notes" }}
            title="Notes and Todos"
            description="Capture thoughts effortlessly, stay organized: Intuitive note-taking feature for to-do lists, and never missing a task"
          />
        </div>
        <div className="col-start-3 col-end-23 md:col-start-5 md:col-end-21 lg:col-start-10 lg:col-end-16 xl:px-4 2xl:col-start-11 2xl:col-end-15 2xl:px-0">
          <InfoPanel
            image={{ src: "/landing-kanban.svg", alt: "kanbans" }}
            title="Kanban Boards"
            description="Visualize workflow, boost collaboration using Kanban boards, and
        track tasks for enhanced productivity"
          />
        </div>
        <div className="col-start-3 col-end-23 md:col-start-5 md:col-end-21 lg:col-start-18 lg:col-end-24 xl:col-start-17 xl:col-end-23 xl:px-4 2xl:col-end-21 2xl:px-0">
          <InfoPanel
            image={{ src: "/landing-calendar.svg", alt: "calendar" }}
            title="Calendar"
            description=" Master your schedule: Plan events, set reminders, and organize time effortlessly with our interactive calendar"
          />
        </div>
      </div>
      <div className="col-start-3 col-end-23">
        <footer className="flex w-full flex-col items-center justify-center bg-white-200 p-6 text-large sm:flex-row">
          <div>
            <span>@2024</span>
            <span className="before:content-['|']">created by </span>
            <a
              href="https:jdmiguel.com"
              target="blank"
              className="linkTextOnly"
            >
              jdmiguel{" "}
            </a>
          </div>
          <div className="hidden before:content-['|'] sm:block">
            view repo on{" "}
            <a
              href="https://github.com/jdmiguel/mnemo"
              target="blank"
              className="link-textOnly"
            >
              github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
