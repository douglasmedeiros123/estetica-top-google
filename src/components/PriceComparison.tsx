import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const PriceComparison = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que pagar mais por menos especialização?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Compare nossos preços com agências tradicionais e veja a diferença
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Agência Comum */}
          <Card className="p-8 border-2 border-border relative">
            <div className="absolute -top-3 left-6 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Agência Comum
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-destructive mb-2">R$ 1.500+</div>
              <div className="text-muted-foreground">por mês</div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Atende todos os nichos</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Sem especialização em estética</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Relatórios complexos</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive" />
                <span>Processo demorado</span>
              </li>
            </ul>
          </Card>

          {/* Nosso Método */}
          <Card className="p-8 border-2 border-primary bg-gradient-hero shadow-elegant relative">
            <div className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Método Agenda Cheia
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">R$ 497</div>
              <div className="text-muted-foreground">por mês</div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Exclusivo para clínicas de estética</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Método padronizado e testado</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Relatório simples via WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Agendamento direto no seu app</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-accent/20 rounded-lg">
              <p className="text-sm font-semibold text-center">
                💎 Economia de <span className="text-primary">R$ 1.000+</span> por mês
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;