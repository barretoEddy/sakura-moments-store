import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, ShoppingCart } from "lucide-react";
import Navigation from "@/components/Navigation";
import sushiPlate from "@/assets/sushi-hero.jpg";
import makiSalmon from "@/assets/sushi-maki-salmon.jpg";
import tunaSashimi from "@/assets/sushi-tuna-sashimi.jpg";
import californiaRoll from "@/assets/sushi-california-roll.jpg";
import tempuraRoll from "@/assets/sushi-tempura-roll.jpg";

const menuItems = [
  {
    id: 1,
    name: "Salmão Maki",
    description: "Salmão Fresco & Pepino",
    price: "R$ 24,90",
    image: makiSalmon,
  },
  {
    id: 2,
    name: "Atum Sashimi",
    description: "Atum Fresco Premium",
    price: "R$ 28,90",
    image: tunaSashimi,
  },
  {
    id: 3,
    name: "California Roll",
    description: "Caranguejo & Abacate",
    price: "R$ 22,90",
    image: californiaRoll,
  },
  {
    id: 4,
    name: "Tempura Roll",
    description: "Camarão Tempura & Avocado",
    price: "R$ 26,90",
    image: tempuraRoll,
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-night-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Sushi Fresco
                  <span className="block text-salmon">Saudável</span>
                  <span className="block text-zen-gold">Delicioso</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Preparamos sushi fresco e saudável com receitas autênticas 
                  que carregam a tradição japonesa em cada mordida.
                </p>
              </div>
              
              <Button variant="cultural" size="lg" className="text-lg px-8">
                Ver Cardápio Completo
                <ShoppingCart className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-salmon/20 to-zen-gold/20 p-8">
                <img 
                  src={sushiPlate} 
                  alt="Prato de Sushi Sakura Moments"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Nossos Pratos Especiais
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cada prato é preparado com ingredientes frescos e técnicas 
                tradicionais japonesas para uma experiência autêntica.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-salmon">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-zen-gold">
                        {item.price}
                      </span>
                      <Button 
                        size="icon" 
                        className="bg-night hover:bg-night-medium text-pearl rounded-full w-10 h-10"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-salmon/10 to-zen-gold/10 rounded-2xl p-8 border border-salmon/20">
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para sua jornada gastronômica?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">
                  Descubra todos os nossos pratos e viva a autêntica experiência 
                  da culinária japonesa na Sakura Moments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cultural" size="lg" className="text-lg">
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Fazer Pedido Online
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg">
                    Cardápio Completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;