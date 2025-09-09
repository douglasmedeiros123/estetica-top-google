import { Button } from "@/components/ui/button";
import PriceComparison from "@/components/PriceComparison";
import MethodSteps from "@/components/MethodSteps";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import InvestmentSection from "@/components/InvestmentSection";
import heroImage from "@/assets/hero-clinic.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="mb-6 inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Especializado em Clínicas de Estética
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Sua clínica de estética no 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> topo do Google</span> por apenas 
                <span className="text-primary"> R$497/mês</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Pare de depender só de indicação. Coloque sua clínica no topo do Google e receba novos agendamentos direto no seu app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="cta" size="xl" className="group">
                  Quero minha clínica no Google agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-cta" size="xl">
                  Ver como funciona
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Clínicas atendidas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-muted-foreground">Aumento médio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6 meses</div>
                  <div className="text-sm text-muted-foreground">Contrato fixo</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Clínica de estética moderna e elegante"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">+12 agendamentos hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <PriceComparison />

      {/* Method Steps */}
      <MethodSteps />

      {/* Benefits */}
      <Benefits />

      {/* Investment Section */}
      <InvestmentSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Agências comuns cobram R$1.500/mês
          </h2>
          <p className="text-xl md:text-2xl mb-2 font-semibold">
            Nós criamos um método exclusivo para clínicas de estética por apenas R$497/mês
          </p>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Sua clínica visível no Google + clientes agendando direto no seu app + relatórios semanais
          </p>
          
          <Button variant="hero" size="xl" className="mb-6">
            Quero minha clínica no Google agora
          </Button>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>(11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <span>contato@agendacheia.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>@metodoagendacheia</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
