import Image from "next/image";

type InfoPanelImage = {
  src: string;
  alt: string;
};

type InfoPanelProps = {
  image: InfoPanelImage;
  title: string;
  description: string;
};

export default function InfoPanel({
  image: { src, alt },
  title,
  description,
}: InfoPanelProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="mb-4 w-full lg:col-start-15 lg:col-end-24 xl:col-start-14"
      />
      <h3 className="heading-2 mb-2">{title}</h3>
      <p className="regular-text text-center">{description}</p>
    </div>
  );
}
