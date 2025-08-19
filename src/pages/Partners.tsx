import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Globe, Award } from "lucide-react";

const partnerCategories = [
  {
    title: "Partenaires Institutionnels",
    icon: <Globe className="h-8 w-8" />,
    description: "Organisations internationales et gouvernementales",
    partners: [
      {
        name: "Union Européenne",
        logo: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=100&fit=crop",
        category: "Coopération Internationale",
        description: "Financement et accompagnement technique dans le cadre du programme 'Énergie Durable pour l'Afrique'",
        collaboration: "Depuis 2022"
      },
      {
        name: "Banque Africaine de Développement",
        logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=100&fit=crop",
        category: "Financement",
        description: "Partenaire financier pour les grands projets d'infrastructure énergétique",
        collaboration: "Depuis 2021"
      },
      {
        name: "Ministère de l'Énergie - Guinée",
        logo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=200&h=100&fit=crop",
        category: "Gouvernement",
        description: "Partenariat stratégique pour l'électrification rurale et urbaine",
        collaboration: "Depuis 2020"
      }
    ]
  },
  {
    title: "Partenaires Techniques",
    icon: <Award className="h-8 w-8" />,
    description: "Fournisseurs de technologies et équipements",
    partners: [
      {
        name: "Schneider Electric",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
        category: "Équipements Électriques",
        description: "Fournisseur privilégié d'équipements de distribution et de protection électrique",
        collaboration: "Depuis 2019"
      },
      {
        name: "Canadian Solar", 
        logo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=100&fit=crop",
        category: "Panneaux Solaires",
        description: "Partenaire stratégique pour la fourniture de panneaux photovoltaïques haute performance",
        collaboration: "Depuis 2020"
      },
      {
        name: "ABB Group",
        logo: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=100&fit=crop",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      }
    ]
  },
  {
    title: "Clients Institutionnels",
    icon: <Users className="h-8 w-8" />,
    description: "Grandes organisations et collectivités",
    partners: [
      {
        name: "Électricité de Guinée (EDG)",
        logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=100&fit=crop",
        category: "Opérateur National",
        description: "Collaboration pour la modernisation et l'extension du réseau électrique national",
        collaboration: "Depuis 2018"
      },
      {
        name: "Compagnie des Bauxites de Guinée",
        logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop",
        category: "Industrie Minière",
        description: "Solutions énergétiques pour les sites miniers et les communautés locales",
        collaboration: "Depuis 2019"
      },
      {
        name: "Gouvernorat de Conakry",
        logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=200&h=100&fit=crop",
        category: "Collectivité",
        description: "Projets d'éclairage public et d'électrification urbaine",
        collaboration: "Depuis 2020"
      }
    ]
  }
];

const testimonials = [
  {
    text: "GUINEA-ENERGY a su démontrer son expertise technique et sa capacité d'exécution dans tous nos projets communs. Une équipe fiable et professionnelle.",
    author: "Dr. Mamadou SYLLA",
    position: "Directeur Technique, EDG",
    company: "Électricité de Guinée",
    rating: 5
  },
  {
    text: "La qualité des installations solaires réalisées par GUINEA-ENERGY dépasse nos attentes. Leur approche méthodique garantit la pérennité des investissements.",
    author: "Marie BERNARD",
    position: "Chef de Programme",
    company: "Union Européenne - Délégation Guinée",
    rating: 5
  },
  {
    text: "Un partenaire de confiance pour nos projets d'électrification. GUINEA-ENERGY comprend parfaitement les enjeux du développement local.",
    author: "Alpha Oumar DIALLO",
    position: "Maire",
    company: "Commune de Kouroussa",
    rating: 5
  }
];

const achievements = [
  {
    number: "25+",
    label: "Partenaires actifs",
    description: "Collaborations stratégiques"
  },
  {
    number: "50+",
    label: "Contrats signés",
    description: "Projets en partenariat"
  },
  {
    number: "15",
    label: "Pays représentés",
    description: "Réseau international"
  },
  {
    number: "100%",
    label: "Satisfaction client",
    description: "Taux de renouvellement"
  }
];

export default function Partners() {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Nos partenaires & clients
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Découvrez le réseau de confiance qui nous accompagne dans la transformation 
              énergétique de la Guinée et de l'Afrique de l'Ouest
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-4xl font-bold md:text-5xl">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm opacity-80">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="container px-4">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="mb-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden bg-muted/30 flex items-center justify-center p-6">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{partner.category}</Badge>
                        <span className="text-sm text-muted-foreground">{partner.collaboration}</span>
                      </div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Ils nous ont fait confiance
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Les témoignages de nos partenaires et clients sur notre collaboration
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 absolute top-6 right-6" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Devenez notre partenaire
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Vous souhaitez collaborer avec GUINEA-ENERGY ? Explorons ensemble les opportunités 
            de partenariat pour développer des solutions énergétiques innovantes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a 
              href="mailto:partenariat@guinea-energy.gn" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
            >
              Proposer un partenariat
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-medium transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}