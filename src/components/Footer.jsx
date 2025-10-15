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
              <div className="footer-brand-title">Barber</div>
             
            </div>
            <p className="footer-brand-description">
            Aqui, o clima é bom, o atendimento é top e você sai com estilo.
            </p>
            <div className="footer-social-links">
            <Button
              variant="ghost"
              size="icon"
              className="footer-social-button"
            >
              <Instagram className="footer-social-icon" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="footer-social-button"
            >
              <Facebook className="footer-social-icon" />
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
              <li>
                <a href="#appointment" className="footer-nav-link">
                  Agendamento
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
                <span>(71) 99999-9999</span>
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
              © {currentYear} Barber. Todos os direitos reservados.
            </div>
            <div className="footer-hashtag">
              <span>Use</span>
              <span className="footer-hashtag-text">#Barber</span>
              <span>nas redes sociais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

