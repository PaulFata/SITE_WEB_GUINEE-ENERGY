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
  { number: "50+", label: "Partenaires" }
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
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground md:text-base">
                  {stat.label}
                </div>
              </div>
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
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
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
                  <Award className="h-8 w-8 text-secondary" />
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
                  <Users className="h-8 w-8 text-primary" />
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
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Fourniture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fourniture d'équipements électriques et matériels de qualité
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