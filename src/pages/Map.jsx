import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Navigation, Instagram } from "lucide-react";
import "./Map.css";

const Map = () => {
  const locationInfo = {
    address: "R. Principal, 2022 - Jardim Limoeiro",
    city: "Camaçari - BA",
    zipCode: "42800-689",
    phone: "(71) 98157-7250",
    email: "rogerioferreira495@gmail.com",
    instagram: "oficil.roger.barber",
    instagramUrl: "https://www.instagram.com/oficial.roger_barber/",
    hours: {
      weekdays: "Segunda a Sábado: 8h às 19h",    
      sunday: "Domingo: Aberto"
    }
  };

  const nearbyLandmarks = [
    "Shopping Center - 200m",
    "Estação de Metrô - 300m",
    "Parque Municipal - 500m",
    "Hospital Regional - 800m"
  ];

  return (
    <div id="contact" className="map-page">
      {/* Hero Section */}
      <section className="map-hero">
        <div className="map-hero-image-container">
          <img 
            src="/Barbearia.jpg" 
            // src="/frente_barber2.jpeg" 
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
            {/* <p className="map-section-description">
              Estamos localizados no Jardim Limoeiro, Camaçari - BA
            </p> */}
          </div>

          {/* Location Info Cards - Above Map */}
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
                {/* <p>{locationInfo.hours.saturday}</p> */}
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

            <Card>
              <CardHeader>
                <CardTitle className="map-card-title-wrapper">
                  <Instagram className="map-card-icon" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={locationInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-contact-item map-instagram-link"
                >
                  <Instagram className="map-contact-icon" />
                  {locationInfo.instagram}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Google Map - Below Cards */}
          <div className="map-iframe-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.0623271179647!2d-38.2968883!3d-12.709354999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71643dbb9e7e357%3A0x60b517e096a04b02!2sBarbearia%20em%20Cama%C3%A7ari%20-%20Roger%20Barber!5e0!3m2!1sen!2sbr!4v1760963921361!5m2!1sen!2sbr"
           width="100%" 
           height="100%" 
           style={{ border: 0 }}
           allowfullscreen 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"
           title="Localização da Barbearia"
           ></iframe>
          </div>
        </div>
      </section>

     
       {/* <section className="map-additional-section">
        <div className="map-container">
          <div className="map-additional-grid">          
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
      </section>  */}

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
            <a
              href="https://wa.me/5571981577250"
              target="_blank"
              rel="noopener noreferrer"
              className="map-cta-button-primary"
            >
              <svg 
                className="map-hero-button-icon" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            {/* <Button 
              size="lg" 
              variant="outline"
              className="map-cta-button-outline"
            >
              <Mail className="map-hero-button-icon" />
              Enviar Mensagem
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;


