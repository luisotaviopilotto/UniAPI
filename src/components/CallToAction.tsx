import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pronto para simplificar seu gerenciamento de API?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Junte-se a milhares de desenvolvedores que já usam o UniAPI para
              simplificar suas integrações de API.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/register">
                Iniciar agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
