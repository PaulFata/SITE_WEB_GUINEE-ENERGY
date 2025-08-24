import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight,Handshake,Building2, MapPin, Calendar, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";


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

const filliale = [
  {
    title: "Nos filiales",
    icon: <Building2 className="h-8 w-8" />,
    description: "Elles portent la vision et la stratégie définies pour nos différents projets",
    partners: [
      {
        name: "Pôles Factory",
        logo: "./assets/FF01.jpg",
        
        
      },
      {
        name: "Energiv", 
        logo: "./assets/FF02.jpg",
       
      },
      {
        name: "elec-Rek", 
        logo: "./assets/FF03.jpg",
       
      },
      {
        name: "Réseaux", 
        logo: "./assets/FF04.jpg",
       
      },
    
    ]
  },

  
];

const stats = [
  { number: "100+", label: "Projets réalisés" },
  { number: "15", label: "Localités électrifiées" },
  { number: "10+", label: "Années d'expérience" },
  { number: "10+", label: "Partenaires" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Stats Section */}
        <section className="py-16 bg-muted/30">
  <div className="container px-4">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 p-6 flex flex-col items-center justify-center shadow-2xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 border-none transition-transform duration-500 hover:scale-105"
        >
          {/* Gradient subtil au hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Contenu */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-white animate-glow">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-white mt-2 font-medium">
              {stat.label}
            </div>
          </div>

          {/* Barre animée en bas */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
        </Card>
      ))}
    </div>
  </div>
</section>


           {/* Nos partenaires */}
            <section className="py-5">
              <div className="container px-4">
                {partnerCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} >
                    <div className="mb-12 text-center bg-white">
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
      
                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
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
                            
                            <CardTitle className="text-xl">{partner.name}</CardTitle>
                          </CardHeader>
                      
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
             {/* Nos filiales */}
           <section className="py-5 bg-white">
  <div className="container px-4">
    {filliale.map((category, categoryIndex) => (
      <div key={categoryIndex}>
        {/* En-tête catégorie */}
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

        {/* Cartes filiales */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-animation">
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


      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Nos domaines d'expertise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              GUINEA-ENERGY vous accompagne dans tous vos projets énergétiques
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <Link  to="/services">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-16 items-center justify-center rounded-full bg-primary/10">
                      <img 
                          src="./assets/infrac.jpg" 
                          alt="Infrastructures" 
                          className="h-10 w-10 object-contain animate-glow"
                        />
                    </div>
                    <CardTitle>Infrastructures électriques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Installation et maintenance de réseaux électriques haute et basse tension
                    </p>
                  </CardContent>
                </Card>
            </Link>
            


            <Link  to="/services">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <img 
                        src="./assets/solaire.png" 
                        alt="Infrastructures" 
                        className="h-10 w-10 object-contain animate-glow"
                      />
                    </div>
                    <CardTitle>Systèmes solaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Conception et installation de solutions photovoltaïques sur mesure
                    </p>
                  </CardContent>
              </Card>
            </Link>

            
            
           <Link  to="/services">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <img 
                          src="./assets/formation.png" 
                          alt="Infrastructures" 
                          className="h-10 w-10 object-contain animate-glow"
                        />
                    </div>
                    <CardTitle>Formation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Formation professionnelle en électricité et énergies renouvelables
                    </p>
                  </CardContent>
                </Card>
            </Link>

            
            
          

            <Link  to="/services">
                    <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <img 
                          src="./assets/outils.png" 
                          alt="Infrastructures" 
                          className="h-10 w-10 object-contain animate-glow"
                        />
                    </div>
                    <CardTitle>Fourniture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Fourniture d'équipements électriques et matériels de qualité
                    </p>
                  </CardContent>
                </Card>
            </Link>



            

             <Link  to="/services">
                    <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                      <img 
                            src="./assets/innovation.png" 
                            alt="Infrastructures" 
                            className="h-10 w-10 object-contain animate-glow"
                          />
                      </div>
                      <CardTitle>Innovation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Digitalisation des systèmes de gestions 
                      </p>
                    </CardContent>
                  </Card>
            </Link>

             
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Prêt à démarrer votre projet énergétique ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous accompagner
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Demander un devis
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}