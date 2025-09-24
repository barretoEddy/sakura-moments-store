import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, MapPin, Clock, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import sakuraZen from "@/assets/sakura-zen.jpg";
import cultureElements from "@/assets/culture-elements.jpg";

const values = [
  {
    icon: Heart,
    title: "Paixão pela Tradição",
    description: "Cada prato é preparado com amor e respeito pelas técnicas milenares da culinária japonesa."
  },
  {
    icon: Users,
    title: "Comunidade Cultural",
    description: "Criamos um espaço onde pessoas se conectam através da rica cultura e gastronomia japonesa."
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Utilizamos apenas ingredientes frescos e de alta qualidade para garantir a melhor experiência."
  }
];

const teamMembers = [
  {
    name: "Hiroshi Tanaka",
    role: "Chef Principal",
    experience: "15 anos de experiência em Tokyo",
    specialty: "Especialista em sushi tradicional"
  },
  {
    name: "Yuki Sato",
    role: "Sous Chef",
    experience: "8 anos no Japão",
    specialty: "Mestre em cortes de sashimi"
  },
  {
    name: "Marina Santos",
    role: "Gerente Cultural",
    experience: "Viveu 5 anos em Kyoto",
    specialty: "Especialista em experiência cultural"
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Nossa
                    <span className="block text-salmon">História</span>
                    <span className="block text-zen-gold">Cultural</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Na Sakura Moments, acreditamos que cada refeição é uma oportunidade 
                    de conectar pessoas através da rica tradição cultural japonesa.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cultural" size="lg" className="text-lg">
                    <MapPin className="mr-2 w-5 h-5" />
                    Visite Nossa Loja
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg">
                    <Phone className="mr-2 w-5 h-5" />
                    Entre em Contato
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={sakuraZen} 
                    alt="Ambiente Tradicional Sakura Moments"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-salmon/20 to-zen-gold/20 rounded-full backdrop-blur-sm border border-salmon/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Mais que um Restaurante
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Somos um portal cultural que conecta você às tradições milenares 
                do Japão através de experiências gastronômicas autênticas.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-salmon to-salmon-light bg-clip-text text-transparent">
                    Nossa Missão Cultural
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fundada com o propósito de compartilhar a beleza e profundidade 
                    da cultura japonesa, a Sakura Moments vai além da gastronomia. 
                    Criamos momentos únicos onde cada cliente vive uma jornada 
                    autêntica através dos sabores, aromas e tradições do Japão.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-salmon rounded-full mt-2" />
                    <p className="text-muted-foreground">
                      Ingredientes importados diretamente do Japão
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-zen-gold rounded-full mt-2" />
                    <p className="text-muted-foreground">
                      Técnicas tradicionais preservadas há gerações
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-salmon rounded-full mt-2" />
                    <p className="text-muted-foreground">
                      Experiência cultural completa em cada visita
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={cultureElements} 
                  alt="Elementos Culturais Japoneses"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Nossos Valores
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que guiam cada aspecto da nossa jornada cultural 
                e gastronômica na Sakura Moments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-salmon to-salmon-light rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <value.icon className="w-8 h-8 text-pearl" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-salmon">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Nossa Equipe Cultural
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mestres culinários que carregam a tradição japonesa 
                e compartilham sua paixão em cada prato preparado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-salmon/20 to-zen-gold/20 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-salmon" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-salmon">{member.name}</h3>
                      <p className="text-zen-gold font-medium">{member.role}</p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>{member.experience}</p>
                        <p className="italic">{member.specialty}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-gradient-to-b from-background to-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-salmon/10 to-zen-gold/10 rounded-2xl p-8 md:p-12 border border-salmon/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Visite Nossa Loja Cultural
                </h3>
                <p className="text-muted-foreground text-lg">
                  Venha viver a experiência completa da cultura japonesa 
                  em nosso espaço cuidadosamente projetado.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-salmon" />
                    <div>
                      <h4 className="font-semibold">Localização</h4>
                      <p className="text-muted-foreground">
                        Rua das Cerejeiras, 123<br />
                        Bairro Cultural, São Paulo - SP
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-zen-gold" />
                    <div>
                      <h4 className="font-semibold">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">
                        Terça a Domingo: 18h às 23h<br />
                        Segunda: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="cultural" size="lg" className="text-lg">
                  <MapPin className="mr-2 w-5 h-5" />
                  Como Chegar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;