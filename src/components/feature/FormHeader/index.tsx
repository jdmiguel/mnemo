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
    <>
      <h1 className="heading-1 mb-2">{title}</h1>
      <p className="regular-text mb-10 flex gap-1">
        {text}
        <Link href={link.href} isTextOnly className="link">
          {link.text}
        </Link>
      </p>
    </>
  );
}
