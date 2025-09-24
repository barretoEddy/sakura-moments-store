import { Button } from "@/components/ui/button";
import { BrandShowcase } from "@/components/BrandShowcase";
import { Cherry, Palette, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import sushiHero from "@/assets/sushi-hero.jpg";
import sakuraZen from "@/assets/sakura-zen.jpg";
import cultureElements from "@/assets/culture-elements.jpg";

const brandConcept = {
  id: "sakura-moments",
  name: "Sakura Moments",
  slogan: "Onde Cada Mordida Conta uma História",
  explanation: "Combina a icônica flor de cerejeira japonesa (sakura) com o conceito de experiências memoráveis (moments). O nome evoca a beleza efêmera da cultura japonesa, enquanto 'moments' sugere que cada visita cria memórias duradouras, posicionando a loja como um lugar de descoberta cultural, não apenas uma refeição.",
  philosophy: "Nossa filosofia é transformar cada refeição em uma jornada cultural, onde os sabores autênticos do Japão se encontram com histórias milenares, criando momentos únicos e inesquecíveis para nossos clientes.",
  theme: "sakura" as const,
  image: sakuraZen
};

const culturalElements = [
  {
    title: "Autenticidade Cultural",
    description: "Cada produto carrega a essência genuína da tradição japonesa, selecionado cuidadosamente para proporcionar uma experiência cultural autêntica.",
    icon: Cherry
  },
  {
    title: "Experiência Sobre Produto", 
    description: "Não vendemos apenas sushi e produtos orientais - oferecemos jornadas culturais que conectam você com a rica tradição japonesa.",
    icon: Palette
  },
  {
    title: "Momentos Memoráveis",
    description: "Cada visita é projetada para criar memórias duradouras, transformando uma refeição em uma celebração da cultura japonesa.",
    icon: Sparkles
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${sushiHero})` }}
        />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-salmon via-salmon-light to-zen-gold bg-clip-text text-transparent">
                    Sakura Moments
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-pearl font-medium tracking-wide">
                  Onde Cada Mordida Conta uma História
                </p>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Descubra a autêntica experiência cultural japonesa através dos sabores únicos do nosso sushi 
                e produtos orientais cuidadosamente selecionados. Cada momento aqui é uma jornada pela rica tradição japonesa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cultural" size="lg" className="text-lg">
                Descubra Nossa História
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Conheça Nossos Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-background to-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa Filosofia Cultural
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {brandConcept.philosophy}
              </p>
            </div>

            {/* Main Brand Showcase */}
            <div className="mb-20">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-salmon/10 via-transparent to-zen-gold/10" />
                
                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-salmon to-salmon-light bg-clip-text text-transparent">
                        {brandConcept.name}
                      </h3>
                      <p className="text-2xl text-foreground font-medium">
                        {brandConcept.slogan}
                      </p>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {brandConcept.explanation}
                    </p>
                    
                    <Button variant="cultural" size="lg" className="w-full sm:w-auto">
                      Experimente Nossos Sabores
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src={brandConcept.image} 
                        alt="Sakura Moments - Experiência Cultural Japonesa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-salmon to-salmon-light rounded-full flex items-center justify-center text-4xl shadow-lg">
                      🌸
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Elements Section */}
      <section className="py-20 bg-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                O que Nos Torna Únicos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cada elemento da Sakura Moments foi cuidadosamente pensado para proporcionar 
                uma experiência cultural autêntica e memorável.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {culturalElements.map((element, index) => (
                <div key={index} className="group bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                  <div className="space-y-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-salmon to-salmon-light rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <element.icon className="w-8 h-8 text-pearl" />
                    </div>
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold text-salmon">{element.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-salmon/10 to-zen-gold/10 rounded-2xl p-8 border border-salmon/20">
                <h3 className="text-2xl font-bold mb-4">
                  Pronto para Viver essa Experiência?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Venha descobrir como cada mordida na Sakura Moments conta uma história única da tradição japonesa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cultural" size="lg">
                    Fazer Pedido Agora
                  </Button>
                  <Button variant="outline" size="lg">
                    Conheça Nossa Loja
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

export default Index;