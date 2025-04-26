"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "@/assets/logo.svg";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 md:gap-4">
        <Image src={logo} alt="Logo" className="w-32 h-auto" />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <nav className="hidden gap-6 md:flex">
          <Link
            href="#inicio"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Início
          </Link>
          <Link
            href="#funcionalidades"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Funcionalidades
          </Link>
          <Link
            href="#como-funciona"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Como funciona?
          </Link>
        </nav>
        <Button
          variant="outline"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="flex items-center gap-2"
        >
          <FaGithub className="w-5 h-5" />
          Entrar com GitHub
        </Button>
      </div>
    </header>
  );
};
export default Header;
