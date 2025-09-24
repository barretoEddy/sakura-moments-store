import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BrandOption {
  id: string;
  name: string;
  slogan: string;
  explanation: string;
  theme: "sakura" | "kibo" | "zen";
  image: string;
}

interface BrandShowcaseProps {
  brand: BrandOption;
}

export const BrandShowcase = ({ brand }: BrandShowcaseProps) => {
  const themeStyles = {
    sakura: {
      gradient: "bg-gradient-to-br from-salmon to-salmon-light",
      accent: "text-salmon",
      button: "cultural",
      glow: "shadow-[0_0_30px_hsl(var(--salmon)/0.3)]"
    },
    kibo: {
      gradient: "bg-gradient-to-br from-zen-gold to-zen-gold-light", 
      accent: "text-zen-gold",
      button: "zen",
      glow: "shadow-[0_0_30px_hsl(var(--zen-gold)/0.3)]"
    },
    zen: {
      gradient: "bg-gradient-to-br from-bamboo to-bamboo-light",
      accent: "text-bamboo",
      button: "harmony",
      glow: "shadow-[0_0_30px_hsl(var(--bamboo)/0.3)]"
    }
  };

  const currentTheme = themeStyles[brand.theme];

  return (
    <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-transparent via-transparent to-current" />
      
      <div className="relative p-8">
        <div className="space-y-6">
          {/* Brand Name */}
          <div className="text-center">
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${currentTheme.gradient} bg-clip-text text-transparent mb-2`}>
              {brand.name}
            </h2>
            <div className={`h-1 w-16 mx-auto rounded-full ${currentTheme.gradient} ${currentTheme.glow}`} />
          </div>

          {/* Slogan */}
          <div className="text-center">
            <p className="text-xl text-foreground font-medium tracking-wide">
              {brand.slogan}
            </p>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${currentTheme.accent}`}>
              Cultural Experience Concept
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {brand.explanation}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center pt-4">
            <Button 
              variant={currentTheme.button as any}
              size="lg"
              className="group/btn"
            >
              Explore This Concept
              <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};