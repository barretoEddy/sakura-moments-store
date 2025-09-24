import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import sakuraZen from "@/assets/sakura-zen.jpg";

const contactSchema = z.object({
  name: z.string().trim().nonempty({ message: "Nome é obrigatório" }).max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter menos de 255 caracteres" }),
  phone: z.string().trim().max(20, { message: "Telefone deve ter menos de 20 caracteres" }).optional().or(z.literal("")),
  subject: z.string().trim().nonempty({ message: "Assunto é obrigatório" }).max(200, { message: "Assunto deve ter menos de 200 caracteres" }),
  message: z.string().trim().nonempty({ message: "Mensagem é obrigatória" }).max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    content: ["Rua das Cerejeiras, 123", "Bairro Cultural, São Paulo - SP", "CEP: 01234-567"],
    color: "text-salmon"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: ["(11) 9 8765-4321", "(11) 3456-7890"],
    color: "text-zen-gold"
  },
  {
    icon: Mail,
    title: "Email",
    content: ["contato@sakuramoments.com", "pedidos@sakuramoments.com"],
    color: "text-salmon"
  },
  {
    icon: Clock,
    title: "Horário",
    content: ["Terça a Domingo: 18h às 23h", "Segunda: Fechado", "Delivery disponível"],
    color: "text-zen-gold"
  }
];

const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Validate and encode data for WhatsApp
      const encodedMessage = encodeURIComponent(
        `Olá! Meu nome é ${data.name}.\n\n` +
        `Assunto: ${data.subject}\n\n` +
        `Mensagem: ${data.message}\n\n` +
        `Email: ${data.email}` +
        (data.phone ? `\nTelefone: ${data.phone}` : "")
      );
      
      // Create WhatsApp link with proper encoding
      const whatsappUrl = `https://wa.me/5511987654321?text=${encodedMessage}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Mensagem enviada!",
        description: "Você será redirecionado para o WhatsApp para finalizar o envio.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    Entre em
                    <span className="block text-salmon">Contato</span>
                    <span className="block text-zen-gold">Conosco</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Estamos aqui para ajudar você a viver a melhor experiência 
                    cultural japonesa. Entre em contato conosco!
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cultural" size="lg" className="text-lg" onClick={() => window.open('https://wa.me/5511987654321', '_blank')}>
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg" onClick={() => window.open('tel:+5511987654321')}>
                    <Phone className="mr-2 w-5 h-5" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={sakuraZen} 
                    alt="Ambiente Acolhedor Sakura Moments"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-zen-gold/20 to-salmon/20 rounded-full backdrop-blur-sm border border-zen-gold/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border border-border">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">
                      Envie sua Mensagem
                    </h2>
                    <p className="text-muted-foreground">
                      Preencha o formulário abaixo e entraremos em contato 
                      o mais breve possível.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Seu nome completo"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="(11) 99999-9999"
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="seu@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        placeholder="Como podemos ajudar?"
                        className={errors.subject ? "border-destructive" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Conte-nos mais sobre o que você precisa..."
                        rows={6}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="cultural" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Informações de Contato
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Visite nossa loja ou entre em contato através dos canais abaixo. 
                    Estamos prontos para proporcionar a melhor experiência cultural japonesa.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-salmon/20 to-zen-gold/20 flex items-center justify-center ${info.color}`}>
                            <info.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.content.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-muted-foreground">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-night-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Como Chegar
              </h2>
              <p className="text-xl text-muted-foreground">
                Localizada no coração cultural da cidade, nossa loja é facilmente acessível 
                por transporte público e possui estacionamento próprio.
              </p>
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-salmon/20 to-zen-gold/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-salmon mx-auto" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Sakura Moments</h3>
                    <p className="text-muted-foreground">
                      Rua das Cerejeiras, 123<br />
                      Bairro Cultural, São Paulo - SP
                    </p>
                  </div>
                  <Button variant="cultural" onClick={() => window.open('https://maps.google.com/?q=Rua+das+Cerejeiras+123+São+Paulo', '_blank')}>
                    <MapPin className="mr-2 w-4 h-4" />
                    Ver no Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;