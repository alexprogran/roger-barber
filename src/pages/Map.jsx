import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";
import "./Map.css";

const Map = () => {
  const locationInfo = {
    address: "Rua das Flores, 123 - Centro",
    city: "São Paulo - SP",
    zipCode: "01234-567",
    phone: "(11) 99999-9999",
    email: "contato@barbearia.com.br",
    hours: {
      weekdays: "Segunda a Sexta: 8h às 19h",
      saturday: "Sábado: 8h às 17h",
      sunday: "Domingo: Fechado"
    }
  };

  const nearbyLandmarks = [
    "Shopping Center - 200m",
    "Estação de Metrô - 300m",
    "Parque Municipal - 500m",
    "Hospital Regional - 800m"
  ];

  return (
    <div className="map-page">
      {/* Hero Section */}
      <section className="map-hero">
        <div className="map-hero-image-container">
          <img 
            src="/Barbearia.jpg" 
            alt="Barbearia - Interior" 
            className="map-hero-image"
          />
          <div className="map-hero-overlay"></div>
        </div>
        
        <div className="map-hero-content">
          <div className="map-hero-text">
            <h1 className="map-hero-title">
              NOSSA LOCALIZAÇÃO
            </h1>
            <p className="map-hero-subtitle">
              Venha nos conhecer e desfrute do melhor atendimento
            </p>
            <Button 
              size="lg" 
              className="map-hero-button"
              onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Navigation className="map-hero-button-icon" />
              Ver no Mapa
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="map-section">
        <div className="map-container">
          <div className="map-section-header">
            <h2 className="map-section-title">
              ENCONTRE-NOS
            </h2>
            <p className="map-section-description">
              Estamos localizados no coração da cidade, com fácil acesso e estacionamento disponível
            </p>
          </div>

          <div className="map-content-grid">
            {/* Google Map */}
            <div className="map-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Barbearia"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="map-info-cards">
              <Card>
                <CardHeader>
                  <CardTitle className="map-card-title-wrapper">
                    <MapPin className="map-card-icon" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="map-card-address">{locationInfo.address}</p>
                  <p className="map-card-text">{locationInfo.city}</p>
                  <p className="map-card-text">CEP: {locationInfo.zipCode}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="map-card-title-wrapper">
                    <Clock className="map-card-icon" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="map-card-content-list">
                  <p>{locationInfo.hours.weekdays}</p>
                  <p>{locationInfo.hours.saturday}</p>
                  <p className="map-card-text">{locationInfo.hours.sunday}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="map-card-title-wrapper">
                    <Phone className="map-card-icon" />
                    Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="map-card-content-list">
                  <p className="map-contact-item">
                    <Phone className="map-contact-icon" />
                    {locationInfo.phone}
                  </p>
                  <p className="map-contact-item">
                    <Mail className="map-contact-icon" />
                    {locationInfo.email}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="map-additional-section">
        <div className="map-container">
          <div className="map-additional-grid">
            {/* Parking Info */}
            <Card>
              <CardHeader>
                <CardTitle className="map-card-title-wrapper">
                  <Navigation className="map-card-icon" />
                  Estacionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="map-card-text map-card-text-spacing">
                  Oferecemos estacionamento gratuito para nossos clientes
                </p>
                <Badge variant="secondary">Gratuito</Badge>
              </CardContent>
            </Card>

            {/* Accessibility */}
            <Card>
              <CardHeader>
                <CardTitle className="map-card-title-wrapper">
                  <MapPin className="map-card-icon" />
                  Acessibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="map-card-text map-card-text-spacing">
                  Nossa barbearia é totalmente acessível para pessoas com deficiência
                </p>
                <Badge variant="secondary">Acessível</Badge>
              </CardContent>
            </Card>

            {/* Nearby Landmarks */}
            <Card className="map-landmarks-card">
              <CardHeader>
                <CardTitle className="map-card-title-wrapper">
                  <MapPin className="map-card-icon" />
                  Pontos de Referência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="map-landmarks-list">
                  {nearbyLandmarks.map((landmark, index) => (
                    <li key={index} className="map-landmark-item">
                      <div className="map-landmark-dot"></div>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="map-cta-section">
        <div className="map-cta-container">
          <h2 className="map-cta-title">
            AGENDE SEU HORÁRIO
          </h2>
          <p className="map-cta-text">
            Venha nos visitar e descubra por que somos a melhor barbearia da região
          </p>
          <div className="map-cta-buttons">
            <Button 
              size="lg" 
              variant="secondary"
              className="map-cta-button-primary"
            >
              <Phone className="map-hero-button-icon" />
              Ligar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="map-cta-button-outline"
            >
              <Mail className="map-hero-button-icon" />
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;


