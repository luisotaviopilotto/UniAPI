import Link from "next/link";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container m-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Um painel para todas as APIs
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A UniAPI centraliza suas integrações de API em um só lugar.
                Conecte, configure e gerencie centenas de APIs por meio de uma
                única interface unificada.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">
                  Iniciar agora
                  <BsArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#como-funciona">Documentação</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 opacity-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"></div>
              <div className="relative h-full w-full rounded-lg border bg-background shadow-sm">
                <div className="flex h-8 items-center border-b px-4">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs font-medium">Dashboard</div>
                </div>
                <div className="grid grid-cols-4 h-[calc(100%-32px)]">
                  <div className="col-span-1 border-r p-2">
                    <div className="space-y-2">
                      <div className="h-6 w-full rounded-md bg-muted"></div>
                      <div className="h-24 w-full rounded-md bg-muted"></div>
                      <div className="h-6 w-full rounded-md bg-muted"></div>
                      <div className="h-24 w-full rounded-md bg-muted"></div>
                      <div className="h-2 w-full rounded-t-md bg-muted"></div>
                    </div>
                  </div>
                  <div className="col-span-3 p-2">
                    <div className="space-y-2">
                      <div className="h-8 w-full rounded-md bg-muted"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-20 rounded-md bg-muted"></div>
                        <div className="h-20 rounded-md bg-muted"></div>
                      </div>
                      <div className="h-32 w-full rounded-md bg-muted"></div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-4 rounded-t-md bg-muted"></div>
                        <div className="h-4 rounded-t-md bg-muted"></div>
                        <div className="h-4 rounded-t-md bg-muted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
