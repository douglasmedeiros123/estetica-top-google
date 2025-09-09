import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Clock, Shield, BarChart, MessageSquare } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Exclusivo para clínicas de estética",
      description: "Método desenvolvido especificamente para o seu negócio, com estratégias que funcionam no seu nicho"
    },
    {
      icon: BarChart,
      title: "Gestão especializada em Google Ads",  
      description: "Campanhas otimizadas para atrair clientes interessadas em tratamentos estéticos na sua região"
    },
    {
      icon: Clock,
      title: "Agendamento direto no seu app",
      description: "Clientes agendam direto no seu sistema, sem intermediários, aumentando a conversão"
    },
    {
      icon: MessageSquare,
      title: "Relatório semanal simples via WhatsApp",
      description: "Acompanhe os resultados de forma prática, sem relatórios complexos e confusos"
    },
    {
      icon: Shield,
      title: "Contrato de 6 meses",
      description: "Garantia de consistência nos resultados com preço fixo e sem surpresas"
    },
    {
      icon: CheckCircle,
      title: "Suporte especializado",
      description: "Equipe que entende do mercado de estética e está sempre disponível para otimizar seus resultados"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Por que o Método Agenda Cheia é diferente?
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Benefícios exclusivos que você não encontra em agências tradicionais
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">
              Tudo isso por apenas R$ 497/mês + verba de mídia
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;