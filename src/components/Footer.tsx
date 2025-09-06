import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-accent">La Firma</div>
              <div className="text-sm text-muted-foreground">Barbearia</div>
            </div>
            <p className="text-muted-foreground max-w-md">
              A revolução da barba chegou. Mais que um corte, uma experiência 
              completa de música, network e brêja em Salvador.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-muted-foreground hover:text-accent transition-colors">
                  Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>(71) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@lafirma.com.br</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div>
                  <p>Graça - Rua da Graça, 123</p>
                  <p>Pituba - Av. Paulo VI, 456</p>
                  <p>Salvador, BA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} La Firma Barbearia. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Use</span>
              <span className="text-accent font-medium">#EstiloLaFirma</span>
              <span>nas redes sociais</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;