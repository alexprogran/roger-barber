import { Button } from "@/components/ui/button";
import LocationCard from "./LocationCard";
import barbershopHero from "@/assets/barbershop-hero-bg.jpg";

const Home = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${barbershopHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80"></div>
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            {/* Animated Character Placeholder */}
            <div className="mb-8">
              <div className="inline-block p-8 bg-card/20 rounded-full backdrop-blur-sm border border-accent/30">
                <div className="text-6xl">👨‍💼</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold hero-text mb-6">
              <span className="text-accent">Muito mais</span>
              <br />
              <span className="text-foreground">que barba</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A revolução da barba chegou. Cortes com tesoura, navalha e toalha quente 
              em um ambiente único de música, network e brêja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="cta" className="btn-barbershop text-lg px-8 py-4">
                Agende Agora
              </Button>
              <Button size="lg" variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <LocationCard
            title="GRAÇA - PERINI"
            subtitle="Unidade Principal"
            address="Rua da Graça, 123 - Salvador, BA"
          />
          <LocationCard
            title="PITUBA"
            subtitle="Segunda Unidade"
            address="Av. Paulo VI, 456 - Salvador, BA"
          />
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-accent font-medium text-lg mb-4">
            Use #EstiloLaFirma nas redes sociais
          </p>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <span className="text-2xl">📸</span>
            <span className="text-2xl">🎵</span>
            <span className="text-2xl">🍺</span>
            <span className="text-2xl">✂️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;