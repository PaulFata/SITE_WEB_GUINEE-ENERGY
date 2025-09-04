import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const categories = [
  "Tous",
  "Infrastructure",
  "Solaire", 
  "Électrification",
  "Formation",
  "Réhabilitation"
];

const projects = [
  {
    id: 1,
    title: "Assemblage et levage des pylônes",
    description: "Installation de pylônes haute tension pour renforcer le réseau électrique national .",
    image: "./assets/assemblage.jpg",
    location: "Guinéé",
    date: "2024",
    category: "Électrification",
    impact: "Amélioration de la stabilité du réseau électrique national",
   
  },
  {
    id: 2,
    title: "Installation solaire zone militaire",
    description: "Système photovoltaïque  pour zones militaires et communautés locales",
    image: "./assets/installationSolaire.jpg",
    location: "Guinée",
    date: "2024",
    category: "Solaire",
    impact: "Électrification de  foyers et installations militaires",
    details: "Installation complète comprenant panneaux solaires, onduleurs, systèmes de stockage et réseau de distribution pour alimenter durablement la zone."
  },
  {
    id: 3,
    title: "Électrification localités de kouroussa",
    description: "Extension du réseau électrique pour améliorer l'accès à l'énergie en zone rurale",
    image: "./assets/electrificationKouroussa.jpg",
    location: "Kouroussa",
    date: "",
    category: "Électrification", 
    impact: "Beaucoup  habitants raccordés au réseau électrique",
    
  },
  {
    id: 4,
    title: "Construction de ligne souterraine",
    description: "Construction d'une ligne souterraine sécurisé",
    image: "./assets/ligneSou.jpg",
    location: "Guinée",
    date: "2023",
    category: "Infrastructure",
    
  },
  {
    id: 5,
    title: "Construction des fondations de pylônes 225Kv",
    description: "Construction des fondations de pylônes 225Kv",
    image: "./assets/pylone.jpg",
    location: "Guinée",
    date: "2024",
    category: "Infrastructure",
  },
  
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Nos réalisations phares
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Découvrez nos projets les plus impactants pour le développement énergétique de la Guinée
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-b">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden card-hover group">
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold text-primary">Impact :</span>
                      <p className="text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="w-full group hover-glow">
                      Voir les détails
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              L'impact de nos réalisations
            </h2>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Des chiffres qui témoignent de notre contribution au développement énergétique de la Guinée
            </p>
          </div>
          
           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 stagger-animation">
            <div className="text-center hover-scale">
              <div className="mb-4 text-4xl font-bold md:text-5xl gradient-text animate-glow">100+</div>
              <div className="text-lg font-semibold mb-2">Projets réalisés</div>
              <div className="text-sm opacity-80">Infrastructures et installations</div>
            </div>
            <div className="text-center hover-scale">
              <div className="mb-4 text-4xl font-bold md:text-5xl gradient-text animate-glow">15</div>
              <div className="text-lg font-semibold mb-2">Localités électrifiées</div>
              <div className="text-sm opacity-80">Accès à l'énergie étendu</div>
            </div>
            <div className="text-center hover-scale">
              <div className="mb-4 text-4xl font-bold md:text-5xl gradient-text animate-glow">5MW+</div>
              <div className="text-lg font-semibold mb-2">Capacité solaire installée</div>
              <div className="text-sm opacity-80">Énergie propre et renouvelable</div>
            </div>
            <div className="text-center hover-scale">
              <div className="mb-4 text-4xl font-bold md:text-5xl gradient-text animate-glow">10k+</div>
              <div className="text-lg font-semibold mb-2">Bénéficiaires</div>
              <div className="text-sm opacity-80">Foyers et entreprises connectés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Votre projet énergétique nous intéresse
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Faites confiance à GUINEA-ENERGY pour réaliser vos ambitions énergétiques. 
            Contactez-nous pour discuter de votre projet.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Voir nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}