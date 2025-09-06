import { Button } from "@/components/ui/button";
import barbershopInterior from "@/assets/barbershop-interior.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
              <img 
                src={barbershopInterior}
                alt="Interior da La Firma Barbearia com cadeiras vintage e ambiente acolhedor"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                La Firma
              </h2>
              <p className="text-xl text-accent font-medium mb-6">
                Música, Network e Brêja
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Os consagrados cortes com tesoura, navalha e toalha quente 
                estão de volta e provam que o bem estar da sua pele precisa 
                estar em primeiro lugar.
              </p>
              
              <p>
                Além do claro, coloração, manicure, estética facial, relaxamento, 
                selagem/progressiva e diversas opções de bebidas artesanais e 
                bebidas quentes.
              </p>
              
              <p className="font-medium text-accent">
                Chegou a revolução da barba e você não vai querer ficar de fora!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-accent font-medium">
                Use #EstiloLaFirma nas redes sociais.
              </p>
              
              <Button 
                size="lg" 
                variant="cta" 
                className="btn-barbershop text-lg px-8 py-4"
              >
                Conheça Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/30">
            <div className="text-3xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Música</h3>
            <p className="text-muted-foreground">
              Ambiente com playlist exclusiva para criar a atmosfera perfeita
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/30">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Network</h3>
            <p className="text-muted-foreground">
              Espaço ideal para networking e fazer novas conexões
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/30">
            <div className="text-3xl mb-4">🍺</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Brêja</h3>
            <p className="text-muted-foreground">
              Seleção especial de bebidas artesanais e drinks exclusivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;