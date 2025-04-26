import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowToWorks from "@/components/HowToWorks";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const LandignPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
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
