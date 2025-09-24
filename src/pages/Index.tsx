import { Button } from "@/components/ui/button";
import { BrandShowcase } from "@/components/BrandShowcase";
import sushiHero from "@/assets/sushi-hero.jpg";
import sakuraZen from "@/assets/sakura-zen.jpg";
import cultureElements from "@/assets/culture-elements.jpg";

const brandOptions = [
  {
    id: "sakura-moments",
    name: "Sakura Moments",
    slogan: "Where Every Bite Tells a Story",
    explanation: "Combines the iconic Japanese cherry blossom (sakura) with the concept of memorable experiences (moments). The name evokes the fleeting beauty of Japanese culture while 'moments' suggests that each visit creates lasting memories, positioning the store as a place for cultural discovery rather than just dining.",
    theme: "sakura" as const,
    image: sakuraZen
  },
  {
    id: "kibo-culture", 
    name: "Kibo Culture",
    slogan: "Taste the Art of Japan",
    explanation: "Kibo means 'hope' in Japanese, suggesting new cultural experiences and discovery. The combination with 'Culture' makes it clear this is about more than food - it's about connecting with Japanese traditions. The slogan positions sushi and oriental products as art forms, elevating the experience to cultural appreciation.",
    theme: "kibo" as const,
    image: cultureElements
  },
  {
    id: "zen-table",
    name: "Zen Table", 
    slogan: "Discover. Savor. Connect.",
    explanation: "Zen represents Japanese philosophy and mindfulness, while 'Table' suggests community and shared experiences. The three-word slogan creates a journey: cultural discovery, mindful enjoyment, and authentic connection with Japanese traditions. This appeals to Western audiences seeking meaningful cultural experiences.",
    theme: "zen" as const,
    image: sushiHero
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${sushiHero})` }}
        />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Cultural
                <span className="bg-gradient-to-r from-salmon via-zen-gold to-bamboo bg-clip-text text-transparent">
                  {" "}Branding{" "}
                </span>
                Concepts
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Three distinct name and slogan suggestions for your sushi and oriental products store, 
                designed to sell cultural experiences to Japanese culture enthusiasts.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cultural" size="lg" className="text-lg">
                Explore Concepts Below
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn Our Approach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Options Section */}
      <section className="py-20 bg-gradient-to-b from-background to-night-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Distinct Brand Concepts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each concept focuses on selling a "cultural experience" rather than just products, 
              with modern appeal for Western audiences who are Japanese culture enthusiasts.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12 max-w-6xl mx-auto">
            {brandOptions.map((brand) => (
              <BrandShowcase key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Our Branding Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-salmon to-salmon-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
                <h3 className="text-xl font-semibold">Cultural Authenticity</h3>
                <p className="text-muted-foreground">
                  Each name incorporates genuine Japanese cultural elements while remaining accessible to Western audiences.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-zen-gold to-zen-gold-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold">Experience Over Product</h3>
                <p className="text-muted-foreground">
                  Every concept emphasizes cultural discovery, storytelling, and meaningful connections rather than just consumption.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-bamboo to-bamboo-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold">Modern Appeal</h3>
                <p className="text-muted-foreground">
                  Designed with contemporary aesthetics and language that resonates with today's cultural enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;