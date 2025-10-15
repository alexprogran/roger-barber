import { Button } from "@/components/ui/button";
import barbershopInterior from "@/assets/barbershop-interior.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Side - Image */}
          <div className="about-image-wrapper">
            <div className="about-image-container">
              <img 
                src={barbershopInterior}
                alt="Interior da La Firma Barbearia com cadeiras vintage e ambiente acolhedor"
                className="about-image"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="about-decoration-1"></div>
            <div className="about-decoration-2"></div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content">
            <div>
              <h2 className="about-title">
                BARBER
              </h2>
              <p className="about-subtitle">
              Aqui, o clima é bom, o atendimento é top e você sai com estilo.
              </p>
            </div>

            <div className="about-description">
              <p>            
              Corte impecável, barba no ponto e música boa rolando.<br />
              Traga sua vibe — a gente cuida do resto.<br />
              Sua melhor versão começa aqui.
              </p>           
            </div>

            <div className="about-actions">
              <Button 
                size="lg" 
                variant="cta" 
                className="about-cta-button btn-barbershop"
              >
                Conheça Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="about-info-grid">
          <div className="about-info-card">
            <div className="about-info-icon">🎵</div>
            <h3 className="about-info-title">Música</h3>
            <p className="about-info-description">
              Ambiente com playlist exclusiva para criar a atmosfera perfeita
            </p>
          </div>
          
          <div className="about-info-card">
            <div className="about-info-icon">🤝</div>
            <h3 className="about-info-title">Network</h3>
            <p className="about-info-description">
              Espaço ideal para networking e fazer novas conexões
            </p>
          </div>
          
          <div className="about-info-card">
            <div className="about-info-icon">🍺</div>
            <h3 className="about-info-title">Bebidas</h3>
            <p className="about-info-description">
              Seleção especial de bebidas artesanais e drinks exclusivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

