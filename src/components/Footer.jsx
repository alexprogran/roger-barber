import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand-section">
            <div className="footer-brand-wrapper">
              <img 
                src="/logo_barber.png" 
                alt="Logo Barber" 
                className="footer-logo"
              />
            </div>
            <p className="footer-brand-description">
            Aqui atendimento top e você sai com estilo.
            </p>
            <div className="footer-social-links">
            <Button
              variant="ghost"
              size="icon"
              className="footer-social-button"
              asChild
            >
              <a href="https://www.instagram.com/oficial.roger_barber/" target="_blank" rel="noopener noreferrer">
                <Instagram className="footer-social-icon" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="footer-social-button"
              asChild
            >
              <a href="https://wa.me/5571981577250" target="_blank" rel="noopener noreferrer">
                <svg className="footer-social-icon whatsapp-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                </svg>
              </a>
            </Button>
            
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3 className="footer-section-title">Navegação</h3>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" className="footer-nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer-nav-link">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link">
                  Contato
                </a>
              </li>             
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-section-title">Contato</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>(71) </span>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>contato@barber.com.br</span>
              </div>
              <div className="footer-contact-item-start">
                <MapPin className="footer-contact-icon-mt" />
                <div>
                  <p>Centro - Av.Lins, 123</p>                  
                  <p>Camaçari, BA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {currentYear} Roger Barber. Todos os direitos reservados.
            </div>
            <div className="footer-hashtag">
              <span>Use</span>
              <span className="footer-hashtag-text">#RogerBarber</span>
              <span>nas redes sociais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

