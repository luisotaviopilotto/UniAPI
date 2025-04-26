import {
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Key,
  Shield,
} from "lucide-react";

const Features = () => {
  return (
    <section id="funcionalidades" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container m-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Funcionalidades
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Tudo o que você precisa para gerenciar suas APIs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O UniAPI fornece um conjunto abrangente de ferramentas para
              otimizar suas integrações e gerenciamento de API.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Acesso Unificado</h3>
            <p className="text-center text-muted-foreground">
              Conecte-se a centenas de APIs populares por meio de uma única
              interface.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Credenciais Seguras</h3>
            <p className="text-center text-muted-foreground">
              Armazene e gerencie suas chaves de API com segurança em um só
              lugar.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Teste e Depuração</h3>
            <p className="text-center text-muted-foreground">
              Teste endpoints de API e depure respostas diretamente no painel.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Autenticação</h3>
            <p className="text-center text-muted-foreground">
              Suporte para vários métodos de autenticação, incluindo OAuth, JWT
              e chaves de API.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Monitoramento</h3>
            <p className="text-center text-muted-foreground">
              Acompanhe o uso, os erros e o desempenho da API em tempo real.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Webhooks</h3>
            <p className="text-center text-muted-foreground">
              Configure webhooks para receber notificações de eventos de API.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
