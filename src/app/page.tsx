// src/app/page.tsx
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

import { FaPlug, FaLock, FaBook } from 'react-icons/fa';
import Donate from "@/components/Donate";




export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <section className="px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher o UniAPI?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Integração Universal"
            description="Conecte-se com qualquer API, independente do formato ou tecnologia."
            icon={<FaPlug />}
          />
          <FeatureCard
            title="Autenticação Unificada"
            description="Simplifique tokens e chaves com um único ponto de entrada seguro."
            icon={<FaLock />}
          />
          <FeatureCard
            title="Documentação Dinâmica"
            description="Gere documentação automaticamente com base nas APIs conectadas."
            icon={<FaBook />}
          />
        </div>
      </section>
    </main>
  );
}
