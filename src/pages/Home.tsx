import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Assemblage et levage pylônes 225 kV",
    description: "Installation de pylônes haute tension pour renforcer le réseau électrique national",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    location: "Conakry - Kindia",
    date: "2024",
    category: "Infrastructure"
  },
  {
    title: "Installation solaire à Macenta",
    description: "Système photovoltaïque pour zones militaires et communautés locales",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
    location: "Macenta",
    date: "2023",
    category: "Solaire"
  },
  {
    title: "Électrification de 15 localités",
    description: "Extension du réseau électrique pour améliorer l'accès à l'énergie",
    image: "./assets/ter.png",
    location: "Kouroussa",
    date: "2023",
    category: "Électrification"
  }
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




      {/* Featured Projects */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Nos réalisations phares
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Découvrez quelques-uns de nos projets les plus impactants pour le développement énergétique de la Guinée
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/projects">
                Voir toutes nos réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
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