import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container m-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-4 text-center md:gap-2 md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UniAPI - https://uniapi.com.br -
            Projeto OpenSource - MIT
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
          >
            Contato
          </Link>
          <Link
            href="https://github.com/luisotaviopilotto/UniAPI"
            target="_blank"
            className="text-sm text-muted-foreground"
          >
            Acessar GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
