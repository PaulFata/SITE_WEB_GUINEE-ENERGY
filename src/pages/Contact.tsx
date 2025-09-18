import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet";
const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adresse",
    details: [
      "Belle vue",
      "Dixinn, Conakry",
      "République de Guinée"
    ]
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Téléphones",
    details: [
      "+224 610 36 94 94",

    ]
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Emails",
    details: [
      "info@guinea-energy.com",
      "i.bah@guinea-energy.com",
      "m.fofana@guinea-energy.com"
    ]
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Horaires d'ouverture",
    details: [
      "Lundi - Vendredi : 8h - 17h",
      "Samedi : Fermé",
      "Dimanche : Fermé"
    ]
  }
];

const services = [
  "Infrastructures électriques",
  "Systèmes solaires",
  "Formation professionnelle", 
  "Fourniture d'équipements",
  "Maintenance",
  "Consultation technique",
  "Autre"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      // Reset du formulaire
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ou nous contacter directement.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Guinea Energy - À propos</title>
        <meta
          name="description"
          content="Guinea Energy : spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques et formation professionnelle."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner 
              dans tous vos besoins énergétiques
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  Envoyez-nous un message
                </h2>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+224 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Entreprise / Organisation</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service d'intérêt *</Label>
                  <Select onValueChange={handleServiceChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Objet *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <MessageSquare className="mr-2 h-5 w-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Nous localiser</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted/30 flex items-center justify-center">
                    <iframe
                      src="./assets/image.png"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation GUINEA-ENERGY"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <a
                      href="tel:+224622000000"
                      className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Appel direct</div>
                        <div className="text-sm text-muted-foreground">+224 610 36 94 94</div>
                      </div>
                    </a>
                    
                    <a
                      href="mailto:contact@guinea-energy.gn"
                      className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Email direct</div>
                        <div className="text-sm text-muted-foreground">info@guinea-energy.com</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-secondary">
                <CardHeader>
                  <CardTitle className="text-secondary">Contact d'urgence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    Pour les interventions d'urgence (pannes, incidents de sécurité) :
                  </p>
                  <a
                    href="tel:+224628000000"
                    className="flex items-center space-x-2 font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+224 610 36 94 94</span>
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Disponible 24h/24, 5j/7
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}