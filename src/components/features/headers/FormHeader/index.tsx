import Link from "@/components/ui/Link";

type FormHeaderLink = {
  href: string;
  text: string;
};

type FormHeaderProps = {
  title: string;
  text: string;
  link: FormHeaderLink;
};

export default function FormHeader({ title, text, link }: FormHeaderProps) {
  return (
    <header>
      <h1 className="heading-2 mb-1 text-center">{title}</h1>
      <p className="mb-6 flex gap-1 text-large">
        {text}
        <Link href={link.href} isTextOnly>
          {link.text}
        </Link>
      </p>
    </header>
  );
}
