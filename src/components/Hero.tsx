"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const PAYPAL_URL = process.env.NEXT_PUBLIC_PAYPAL_URL || "";

  return (
    <section className="flex gap-4 bg-gradient-to-br text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          <Image src={logo} alt="UniAPI" className="h-32 mx-auto" />
        </h1>
        <p className="max-w-2xl text-base/5 text-black/90 mb-8">
          Um único sistema para unificar, documentar e gerenciar todas as suas
          APIs. Desenvolvido para equipes técnicas e líderes de produto.
        </p>
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => router.push("/docs")}
            className="bg-white cursor-pointer text-indigo-700 font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Comece Agora
          </button>
          <Link
            href={PAYPAL_URL}
            className="bg-indigo-700 cursor-pointer text-white font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:bg-indigo-700/90 transition"
          >
            Faça uma Doação
          </Link>
        </div>
      </div>
    </section>
  );
}
