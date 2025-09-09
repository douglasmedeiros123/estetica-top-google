import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar, BarChart3 } from "lucide-react";

const MethodSteps = () => {
  const steps = [
    {
      icon: Search,
      title: "Cliente Busca no Google",
      description: "Pessoa procura por \"limpeza de pele em [bairro]\" ou \"clínica de estética perto de mim\"",
      highlight: "Alcance Local"
    },
    {
      icon: MapPin,
      title: "Sua Clínica Aparece no Topo",
      description: "Nossos anúncios colocam sua clínica nas primeiras posições do Google",
      highlight: "Visibilidade Máxima"
    },
    {
      icon: Calendar,
      title: "Agendamento Direto no App",
      description: "Cliente agenda diretamente pelo seu aplicativo, sem intermediários",
      highlight: "Conversão Direta"
    },
    {
      icon: BarChart3,
      title: "Relatório Semanal",
      description: "Você recebe no WhatsApp quantos novos agendamentos vieram dos anúncios",
      highlight: "Resultados Claros"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Como funciona o Método Agenda Cheia
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Processo simples e direto que gera resultados comprovados
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <div className="mb-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full inline-block">
                {step.highlight}
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card p-4 rounded-lg shadow-card">
            <span className="text-2xl">🎯</span>
            <p className="font-semibold">
              Resultado: <span className="text-primary">Agenda cheia de novos clientes toda semana</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSteps;