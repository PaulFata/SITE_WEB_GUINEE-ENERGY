import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    title: "Assemblage et levage pylônes 225 kV",
    description: "Installation de pylônes haute tension pour renforcer le réseau électrique national entre Conakry et Kindia",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    location: "Conakry - Kindia",
    date: "2024",
    category: "Infrastructure",
    impact: "Amélioration de la stabilité du réseau électrique national",
    details: "Installation de 45 pylônes haute tension sur un tracé de 135 km, renforçant significativement la capacité de transport d'énergie entre les deux principales villes du pays."
  },
  {
    id: 2,
    title: "Installation solaire à Macenta",
    description: "Système photovoltaïque de 500 kWc pour zones militaires et communautés locales",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
    location: "Macenta",
    date: "2023",
    category: "Solaire",
    impact: "Électrification de 200 foyers et installations militaires",
    details: "Installation complète comprenant panneaux solaires, onduleurs, systèmes de stockage et réseau de distribution pour alimenter durablement la zone."
  },
  {
    id: 3,
    title: "Électrification de 15 localités à Kouroussa",
    description: "Extension du réseau électrique pour améliorer l'accès à l'énergie en zone rurale",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    location: "Kouroussa",
    date: "2023",
    category: "Électrification", 
    impact: "Plus de 3000 habitants raccordés au réseau électrique",
    details: "Déploiement de 25 km de lignes électriques et installation de 8 postes de transformation pour connecter les villages isolés au réseau national."
  },
  {
    id: 4,
    title: "Réhabilitation réseau MT Labé",
    description: "Modernisation et renforcement du réseau moyenne tension de la ville de Labé",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    location: "Labé",
    date: "2023",
    category: "Réhabilitation",
    impact: "Réduction des coupures de 60% et amélioration de la qualité",
    details: "Remplacement de 12 km de câbles vétustes, installation de nouveaux transformateurs et mise aux normes du réseau de distribution."
  },
  {
    id: 5,
    title: "Formation électriciens Boké",
    description: "Programme de formation de 30 électriciens certifiés pour la région de Boké",
    image: "https://images.unsplash.com/photo-1581092795442-7d3f48b90a7e?w=800&h=600&fit=crop",
    location: "Boké",
    date: "2022",
    category: "Formation",
    impact: "30 électriciens certifiés, création d'emplois locaux",
    details: "Formation théorique et pratique de 6 mois couvrant l'installation, la maintenance et la sécurité électrique selon les standards internationaux."
  },
  {
    id: 6,
    title: "Centrale solaire Kankan",
    description: "Installation d'une centrale photovoltaïque de 1 MWc pour alimenter le centre-ville",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    location: "Kankan",
    date: "2022",
    category: "Solaire",
    impact: "Alimentation de 500 foyers et commerces du centre-ville",
    details: "Centrale au sol avec système de suivi solaire, équipée de batteries de stockage pour assurer une alimentation continue 24h/24."
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
                    <Button variant="outline" size="sm" className="w-full group">
                      Voir les détails
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold md:text-5xl">100+</div>
              <div className="text-lg font-semibold mb-2">Projets réalisés</div>
              <div className="text-sm opacity-80">Infrastructures et installations</div>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold md:text-5xl">15</div>
              <div className="text-lg font-semibold mb-2">Localités électrifiées</div>
              <div className="text-sm opacity-80">Accès à l'énergie étendu</div>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold md:text-5xl">5MW+</div>
              <div className="text-lg font-semibold mb-2">Capacité solaire installée</div>
              <div className="text-sm opacity-80">Énergie propre et renouvelable</div>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold md:text-5xl">10k+</div>
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