import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users,Handshake, Globe, Award } from "lucide-react";
import { Helmet } from "react-helmet";
const partnerCategories = [
  
  {
    title: "Nos references",
    icon: <Handshake className="h-8 w-8 text-primary" />,
    description: "ILS NOUS ONT FAIT CONFIANCE",
    partners: [
      {
        name: "EDG",
        logo: "./assets/edg2.png",
        category: "Équipements Électriques",
        description: "Fournisseur privilégié d'équipements de distribution et de protection électrique",
        collaboration: "Depuis 2019"
      },
      {
        name: "Cwe", 
        logo: "./assets/we.png",
        category: "Panneaux Solaires",
        description: "Partenaire stratégique pour la fourniture de panneaux photovoltaïques haute performance",
        collaboration: "Depuis 2020"
      },
      {
        name: "SUMEC",
        logo: "./assets/sumec.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      }
      ,
      {
        name: "enGie",
        logo: "./assets/engie2.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      }
      ,
      {
        name: "Cegelec ",
        logo: "./assets/cegelec.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      }
      ,
      {
        name: "G.E.C.I",
        logo: "./assets/geci.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      },

      {
        name: "TOPO GUINEE",
        logo: "./assets/topo.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      },
      {
        name: "KAMA Sa",
        logo: "./assets/kama.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      },
      {
        name: "POWER TRANSMISSION LIMITED",
        logo: "./assets/power.png",
        category: "Solutions Industrielles",
        description: "Technologies avancées pour l'automatisation et l'optimisation énergétique",
        collaboration: "Depuis 2021"
      }
    ]
  },

  
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
              Nos partenaires & clients
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Découvrez le réseau de confiance qui nous accompagne dans la transformation 
              énergétique 
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

               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="overflow-hidden card-hover group">
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center p-6 relative">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

          <div className="grid gap-8 lg:grid-cols-3 stagger-animation">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 absolute top-6 right-6 animate-float" />
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
            Vous souhaitez collaborer avec GUINEA ENERGY ? Explorons ensemble les opportunités 
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