import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, DollarSign, TrendingUp } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Search className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como funciona o investimento?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparência total nos valores e no que você está investindo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Gestão Especializada */}
            <Card className="p-8 shadow-card">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gestão Especializada</h3>
                <div className="text-3xl font-bold text-primary mb-2">R$ 497</div>
                <p className="text-muted-foreground text-sm mb-4">por mês</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Criação e otimização de campanhas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Monitoramento diário
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Relatórios semanais via WhatsApp
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Suporte especializado
                  </li>
                </ul>
              </div>
            </Card>

            {/* Verba de Anúncios */}
            <Card className="p-8 shadow-card">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verba de Anúncios</h3>
                <div className="text-3xl font-bold text-accent mb-2">R$ 500+</div>
                <p className="text-muted-foreground text-sm mb-4">direto ao Google</p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Você define o valor
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Pago diretamente ao Google
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Transparência total
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Relatório de gastos incluído
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Resumo Total */}
          <Card className="p-8 bg-gradient-primary text-primary-foreground shadow-elegant">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Total do Investimento</h3>
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <p className="text-primary-foreground/80">Gestão</p>
                  <p className="text-2xl font-bold">R$ 497</p>
                </div>
                <div className="text-3xl font-bold">+</div>
                <div>
                  <p className="text-primary-foreground/80">Verba Google</p>
                  <p className="text-2xl font-bold">R$ 500+</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-lg font-semibold mb-2">
                  ➡️ Com menos de R$ 1.000/mês
                </p>
                <p className="text-primary-foreground/90">
                  Sua clínica estará no topo do Google, sendo vista por pacientes prontas para agendar no seu app
                </p>
              </div>
              
              <div className="mt-6">
                <Button variant="hero" size="xl" className="w-full md:w-auto">
                  Quero colocar minha clínica no Google agora
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;