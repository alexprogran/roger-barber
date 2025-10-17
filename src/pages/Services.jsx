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
      image: "/corte.png",
      popular: true
    },
    {
      id: 2,
      title: "Barba Completa",
      description: "Aparar, modelar e finalizar sua barba com perfeição",
      price: "R$ 35",
      duration: "30 min",
      features: ["Modelagem personalizada", "Hidratação", "Finalização com óleo"],
      image: "/corte.png",
      popular: false
    },
    {
      id: 3,
      title: "Corte + Barba",
      description: "Pacote completo para um visual impecável",
      price: "R$ 70",
      duration: "60 min",
      features: ["Corte + Barba", "Economia de R$ 10", "Produtos premium"],
      image: "/corte.png",
      popular: true
    },
    {
      id: 4,
      title: "Sobrancelha",
      description: "Design e modelagem das sobrancelhas",
      price: "R$ 25",
      duration: "20 min",
      features: ["Design personalizado", "Técnica precisa", "Resultado natural"],
      image: "/corte.png",
      popular: false
    },
    {
      id: 5,
      title: "Tratamento Capilar",
      description: "Hidratação e tratamento para cabelos e couro cabeludo",
      price: "R$ 55",
      duration: "40 min",
      features: ["Hidratação profunda", "Massagem relaxante", "Produtos especiais"],
      image: "/corte.png",
      popular: false
    },
    {
      id: 6,
      title: "Pacote Premium",
      description: "Experiência completa com todos os serviços",
      price: "R$ 120",
      duration: "90 min",
      features: ["Todos os serviços", "Bebida inclusa", "Atendimento VIP"],
      image: "/corte.png",
      popular: true
    }
  ];

  return (
    <div className="services-wrapper">
      <main className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-info-container" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
            <div className="services-info-header">
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
          <div className="services-info-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
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
                    {/* <CardDescription className="service-card-description">
                      {service.description}
                    </CardDescription> */}
                  </CardHeader>
                  
                  {/* Service Image */}
                  <div className="service-card-image-wrapper">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="service-card-image"
                    />
                  </div>
                  
                  <CardContent className="service-card-content">
                    {/* <div className="service-price-section">
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
                    </ul> */}
                    
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
        <section className="services-info-section">
          <div className="services-info-container">
            <div className="services-info-header">
              <h2 className="services-info-title">
                <span className="services-info-title-accent">POR QUE</span>
                <br />
                <span className="services-info-title-main">ESCOLHER NÓS?</span>
              </h2>
              <p className="services-info-subtitle">
                Oferecemos muito mais que um simples corte. Descubra os diferenciais que nos tornam únicos.
              </p>
            </div>
            
            <div className="services-info-grid">
              <Card className="services-info-card">
                <CardHeader className="services-info-header">
                  <div className="services-info-card-icon-wrapper">
                    <span className="services-info-card-icon">⏰</span>
                  </div>
                  <CardTitle className="services-info-card-title">
                    Horário Flexível
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="services-info-card-description">
                    Atendemos de segunda a sábado, com horários que se adaptam à sua rotina. 
                    Sempre disponíveis para atender você no melhor momento.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="services-info-card">
                <CardHeader className="services-info-header">
                  <div className="services-info-card-icon-wrapper" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}>
                    <span className="services-info-card-icon">🎯</span>
                  </div>
                  <CardTitle className="services-info-card-title">
                    Qualidade Garantida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="services-info-card-description">
                    Profissionais experientes e produtos de alta qualidade para o melhor resultado. 
                    Cada corte é uma obra de arte.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="services-info-card">
                <CardHeader className="services-info-header">
                  <div className="services-info-card-icon-wrapper" style={{ backgroundColor: 'hsl(var(--cta) / 0.1)' }}>
                    <span className="services-info-card-icon">📱</span>
                  </div>
                  <CardTitle className="services-info-card-title">
                    Agendamento Online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="services-info-card-description">
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


