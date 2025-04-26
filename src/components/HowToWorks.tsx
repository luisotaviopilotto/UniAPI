const HowToWorks = () => {
  return (
    <section
      id="como-funciona"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Como funciona?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Integração simples, resultados poderosos
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comece a usar o UniAPI em apenas algumas etapas simples.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Selecione APIs</h3>
            <p className="text-center text-muted-foreground">
              Navegue em nosso catálogo e selecione as APIs com as quais deseja
              se integrar.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Configurar credenciais</h3>
            <p className="text-center text-muted-foreground">
              Adicione suas chaves de API e configure as definições de
              autenticação com segurança.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Comece a usar</h3>
            <p className="text-center text-muted-foreground">
              Faça solicitações de API por meio da interface unificada da
              UniAPI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowToWorks;
