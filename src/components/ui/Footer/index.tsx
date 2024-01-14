export default function Footer() {
  return (
    <footer className="regular-text flex w-full flex-col items-center justify-center bg-white-200 p-6 sm:flex-row">
      <div>
        <span>@2024</span>
        <span className="before:content-['|']">created by </span>
        <a href="https:jdmiguel.com" target="blank" className="link">
          jdmiguel{" "}
        </a>
      </div>
      <div className="hidden before:content-['|'] sm:block">
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
  );
}
