import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowToWorks from "@/components/HowToWorks";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Key,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const LandignPage = () => {
  return (
    <main id="inicio" className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* funcionalidades Section */}
      <Features />

      {/* How It Works Section */}
      <HowToWorks />

      {/* CTA Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </main>
  );
};
export default LandignPage;
