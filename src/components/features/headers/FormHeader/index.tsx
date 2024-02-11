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
      <h1 className="heading-1 mb-2">{title}</h1>
      <p className="mb-10 flex gap-1 text-large">
        {text}
        <Link href={link.href} isTextOnly>
          {link.text}
        </Link>
      </p>
    </header>
  );
}
