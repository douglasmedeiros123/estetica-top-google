import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      clinic: "Clínica Beleza Pura",
      location: "São Paulo - SP",
      testimonial: "Antes eu dependia só de indicação. Agora minha clínica recebe novos agendamentos toda semana pelo Google.",
      rating: 5,
      result: "+85% novos clientes"
    },
    {
      name: "Carla Mendes", 
      clinic: "Clínica Estética Avançada",
      location: "Rio de Janeiro - RJ",
      testimonial: "Investi no Método Agenda Cheia e já no primeiro mês vi minha agenda cheia de novas clientes interessadas em tratamentos.",
      rating: 5,
      result: "+120% agendamentos"
    },
    {
      name: "Fernanda Costa",
      clinic: "Espaço Corpo & Rosto",
      location: "Belo Horizonte - MG", 
      testimonial: "Finalmente encontrei um serviço acessível que realmente traz pacientes novas. O investimento se paga sozinho.",
      rating: 5,
      result: "+200% faturamento"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Clínicas que já transformaram seus resultados
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Veja o que nossas clientes parceiras falam sobre o método
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <Quote className="h-6 w-6 text-primary mb-3" />
              
              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{testimonial.testimonial}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.clinic}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="xl" className="mb-4">
            Quero ser a próxima clínica com agenda cheia
          </Button>
          <p className="text-sm text-muted-foreground">
            ✨ Junte-se a mais de 150+ clínicas que já transformaram seus resultados
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;