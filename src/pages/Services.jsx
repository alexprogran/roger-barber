import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Corte Masculino",
      description: "Corte moderno e clássico com técnicas profissionais",
      price: "R$ 45",
      duration: "45 min",
      features: ["Técnicas modernas", "Produtos premium", "Finalização completa"],
      popular: true
    },
    {
      id: 2,
      title: "Barba Completa",
      description: "Aparar, modelar e finalizar sua barba com perfeição",
      price: "R$ 35",
      duration: "30 min",
      features: ["Modelagem personalizada", "Hidratação", "Finalização com óleo"],
      popular: false
    },
    {
      id: 3,
      title: "Corte + Barba",
      description: "Pacote completo para um visual impecável",
      price: "R$ 70",
      duration: "60 min",
      features: ["Corte + Barba", "Economia de R$ 10", "Produtos premium"],
      popular: true
    },
    {
      id: 4,
      title: "Sobrancelha",
      description: "Design e modelagem das sobrancelhas",
      price: "R$ 25",
      duration: "20 min",
      features: ["Design personalizado", "Técnica precisa", "Resultado natural"],
      popular: false
    },
    {
      id: 5,
      title: "Tratamento Capilar",
      description: "Hidratação e tratamento para cabelos e couro cabeludo",
      price: "R$ 55",
      duration: "40 min",
      features: ["Hidratação profunda", "Massagem relaxante", "Produtos especiais"],
      popular: false
    },
    {
      id: 6,
      title: "Pacote Premium",
      description: "Experiência completa com todos os serviços",
      price: "R$ 120",
      duration: "90 min",
      features: ["Todos os serviços", "Bebida inclusa", "Atendimento VIP"],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background relative z-60">
     
      
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="services-title">
                NOSSOS SERVIÇOS
              </h1>
              <p className="services-subtitle">
                Qualidade profissional e atendimento personalizado para você sair com o visual perfeito
              </p>
              <div className="services-hero-decoration"></div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container mx-auto px-4 py-16">
            <div className="services-grid">
              {services.map((service) => (
                <Card key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
                  {service.popular && (
                    <div className="popular-badge">
                      <Badge variant="secondary" className="popular-badge-content">
                        Mais Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="service-card-header">
                    <CardTitle className="service-card-title">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="service-card-description">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="service-card-content">
                    <div className="service-price-section">
                      <span className="service-price">{service.price}</span>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                    
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="service-feature">
                          <span className="feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="service-button"
                      size="lg"
                      variant={service.popular ? "default" : "outline"}
                    >
                      Agendar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bebas mb-4">
                <span className="text-accent">POR QUE</span>
                <br />
                <span className="text-foreground">ESCOLHER NÓS?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos muito mais que um simples corte. Descubra os diferenciais que nos tornam únicos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <CardTitle className="text-xl font-oswald text-foreground">
                    Horário Flexível
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Atendemos de segunda a sábado, com horários que se adaptam à sua rotina. 
                    Sempre disponíveis para atender você no melhor momento.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-xl font-oswald text-foreground">
                    Qualidade Garantida
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Profissionais experientes e produtos de alta qualidade para o melhor resultado. 
                    Cada corte é uma obra de arte.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cta/20 transition-colors">
                    <span className="text-2xl">📱</span>
                  </div>
                  <CardTitle className="text-xl font-oswald text-foreground">
                    Agendamento Online
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    Agende seu horário de forma rápida e prática através do nosso sistema online. 
                    Simples, rápido e eficiente.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
     
    </div>
  );
};

export default Services;


