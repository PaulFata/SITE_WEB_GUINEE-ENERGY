import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Calendar, User, ArrowRight } from "lucide-react";

const categories = ["Tous", "Énergie", "Formation", "Solaire", "Projets communautaires", "Annonces"];

const posts = [
  {
    id: 1,
    title: "Lancement du programme d'électrification rurale 2024",
    excerpt: "GUINEA-ENERGY annonce le démarrage d'un vaste programme d'électrification de 25 villages ruraux dans la région de Faranah.",
    content: "Nous sommes fiers d'annoncer le lancement de notre programme d'électrification rurale 2024. Ce projet ambitieux vise à connecter 25 villages de la région de Faranah au réseau électrique national...",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
    author: "Direction GUINEA-ENERGY",
    date: "2024-01-15",
    category: "Projets communautaires",
    likes: 42,
    comments: 8,
    featured: true
  },
  {
    id: 2,
    title: "Formation de 50 techniciens en énergie solaire",
    excerpt: "Démarrage d'un cycle de formation certifiante pour renforcer les capacités techniques locales en photovoltaïque.",
    content: "Dans le cadre de notre engagement pour le développement des compétences locales, nous lançons un programme de formation certifiante...",
    image: "https://images.unsplash.com/photo-1581092795442-7d3f48b90a7e?w=800&h=600&fit=crop",
    author: "Département Formation",
    date: "2024-01-10",
    category: "Formation",
    likes: 28,
    comments: 5,
    featured: false
  },
  {
    id: 3,
    title: "Partenariat stratégique avec l'Union Européenne",
    excerpt: "Signature d'un accord de coopération pour le développement des énergies renouvelables en Guinée.",
    content: "GUINEA-ENERGY signe un important partenariat avec l'Union Européenne dans le cadre du programme 'Énergie Durable pour l'Afrique'...",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&h=600&fit=crop",
    author: "Direction Générale",
    date: "2024-01-05",
    category: "Annonces",
    likes: 65,
    comments: 12,
    featured: true
  },
  {
    id: 4,
    title: "Installation de la plus grande centrale solaire de Guinée Forestière",
    excerpt: "Mise en service d'une centrale photovoltaïque de 2 MWc à Nzérékoré, marquant une étape historique.",
    content: "Après 8 mois de travaux, nous avons officiellement mis en service la plus grande centrale solaire de la région...",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    author: "Équipe Technique",
    date: "2023-12-20",
    category: "Solaire",
    likes: 89,
    comments: 15,
    featured: true
  },
  {
    id: 5,
    title: "Réhabilitation du réseau électrique de Siguiri terminée",
    excerpt: "Les travaux de modernisation du réseau de distribution de Siguiri sont achevés avec succès.",
    content: "Après 6 mois de travaux intensifs, la réhabilitation complète du réseau électrique de Siguiri est terminée...",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    author: "Chef de Projet",
    date: "2023-12-15",
    category: "Énergie",
    likes: 34,
    comments: 7,
    featured: false
  },
  {
    id: 6,
    title: "Journée porte ouverte : Découvrez nos métiers",
    excerpt: "GUINEA-ENERGY ouvre ses portes au public pour faire découvrir les métiers de l'énergie.",
    content: "Dans le cadre de notre engagement pour la promotion des métiers techniques, nous organisons une journée porte ouverte...",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    author: "Service Communication",
    date: "2023-12-10",
    category: "Formation",
    likes: 19,
    comments: 3,
    featured: false
  }
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const filteredPosts = selectedCategory === "Tous" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Actualités & Blog
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Suivez nos dernières réalisations, annonces et découvrez l'actualité 
              du secteur énergétique en Guinée
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

      <div className="container px-4 py-20">
        {/* Featured Posts */}
        {selectedCategory === "Tous" && featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">À la une</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge variant="outline">À la une</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                        >
                          <Heart className={`mr-1 h-4 w-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                          {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                        </Button>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MessageCircle className="mr-1 h-4 w-4" />
                          {post.comments}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Lire la suite
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "Tous" ? "Toutes les actualités" : `Actualités - ${selectedCategory}`}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(selectedCategory === "Tous" ? regularPosts : filteredPosts).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className={`p-1 h-auto ${likedPosts.includes(post.id) ? 'text-red-500' : ''}`}
                      >
                        <Heart className={`mr-1 h-4 w-4 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-xs">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                      </Button>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MessageCircle className="mr-1 h-4 w-4" />
                        {post.comments}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Lire
                    </Button>
                  </div>
                  <div className="flex items-center pt-2 border-t">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src="" alt={post.author} />
                      <AvatarFallback className="text-xs">
                        {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucune actualité trouvée dans cette catégorie.</p>
            </div>
          )}
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus d'articles
          </Button>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Restez informé de nos actualités
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Suivez nos réseaux sociaux et contactez-nous pour ne rien manquer 
            de l'évolution de GUINEA-ENERGY
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Suivre sur Facebook
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Suivre sur LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}