import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

interface LocationCardProps {
  title: string;
  subtitle: string;
  address?: string;
}

const LocationCard = ({ title, subtitle, address }: LocationCardProps) => {
  return (
    <div className="location-card rounded-xl p-8 border border-border/30 glass-effect">
      <div className="flex items-start space-x-4">
        <div className="bg-accent/20 p-3 rounded-full">
          <MapPin className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-accent font-medium mb-1">{subtitle}</p>
          {address && (
            <p className="text-muted-foreground text-sm mb-4">{address}</p>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Como chegar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;