import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import "./LocationCard.css";

const LocationCard = ({ title, subtitle, address, transparency = 0 }) => {
  // Define as classes de transparência baseadas no valor
  const getTransparencyClass = () => {
    switch (transparency) {
      case 0:
        return "solid"; // sólido
      case 1:
        return "medium"; // meio transparente
      case 2:
        return "transparent"; // transparente mas com blur
      default:
        return "solid";
    }
  };
  
  

  return (
    <div className="location-card">
      {/* Background com transparência - apenas o fundo */}
      {/* <div className={`location-card-background ${getTransparencyClass()}`}></div> */}

      
      {/* Conteúdo 100% visível */}
      <div className="location-card-content">
        <div className="location-card-icon-wrapper">
          <MapPin className="location-card-icon" />
        </div>
        <div className="location-card-details">
          <h3 className="location-card-title">{title}</h3>
          <p className="location-card-subtitle">{subtitle}</p>
          {address && (
            <p className="location-card-address">{address}</p>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="location-card-button"
          >
            <Navigation className="location-card-button-icon" />
            Como chegar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

