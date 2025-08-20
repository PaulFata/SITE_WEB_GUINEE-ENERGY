import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Eye, Heart, Award, Users, Zap, Globe } from "lucide-react";

const values = [
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Excellence",
    description: "Nous nous engageons à fournir des services de la plus haute qualité avec des standards d'excellence."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Intégrité",
    description: "Transparence, honnêteté et respect des engagements dans toutes nos relations professionnelles."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "Nous travaillons en partenariat étroit avec nos clients pour garantir le succès de chaque projet."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Innovation",
    description: "Adoption des technologies les plus récentes pour des solutions énergétiques durables et efficaces."
  }
];

const certifications = [
  "Agrément technique du Ministère de l'Énergie",
  "Certification ISO 9001 en cours",
  "Membre de l'Association des Entreprises Électriques de Guinée",
  "Partenaire officiel des programmes d'électrification rurale"
];

const achievements = [
  {
    number: "100+",
    label: "Projets réalisés",
    description: "Infrastructures électriques et solaires"
  },
  {
    number: "15",
    label: "Localités électrifiées",
    description: "Amélioration de l'accès à l'énergie"
  },
  {
    number: "50+",
    label: "Professionnels formés",
    description: "Renforcement des capacités techniques"
  },
  {
    number: "10+",
    label: "Années d'expérience",
    description: "Expertise reconnue sur le marché"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Qui sommes-nous ?
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              GUINEA-ENERGY est une entreprise guinéenne de référence dans le secteur énergétique, 
              spécialisée dans les infrastructures électriques et les solutions solaires durables.
            </p>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Qui sommes nous ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GUINEA ENERGY est une entreprise guinéenne engagée dans le développement, 
                  la production et la fourniture de solutions énergétiques fiables, durables 
                  et accessibles, afin de contribuer à la sécurité énergétique et à la croissance 
                  socio-économique du pays.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
                alt="Équipe GUINEA-ENERGY au travail"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Notre Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Garantir l'accessibilité et la sécurité énergétique en Guinée par des solutions 
                  innovantes, durables et adaptées aux besoins locaux. Nous nous engageons à 
                  accompagner le développement socio-économique du pays grâce à des infrastructures 
                  énergétiques fiables et modernes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Eye className="h-8 w-8 text-secondary" />
                  <CardTitle className="text-2xl">Notre Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sa vision est de devenir un acteur de référence en Afrique de l'Ouest dans la 
                  transition énergétique, en favorisant l'intégration des énergies renouvelables 
                  et l'efficacité énergétique pour tous.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Nos valeurs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ses valeurs reposent sur l'innovation, l'excellence opérationnelle, l'intégrité, 
              le respect de l'environnement et la responsabilité sociale, avec pour objectif de 
              bâtir un futur énergétique plus sûr, inclusif et respectueux des générations futures.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Nos réalisations en chiffres
            </h2>
            <p className="mx-auto max-w-2xl text-lg opacity-90">
              Des résultats concrets qui témoignent de notre engagement et de notre expertise
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-4xl font-bold md:text-5xl">
                  {achievement.number}
                </div>
                <div className="mb-2 text-lg font-semibold">
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

      {/* Certifications */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Certifications et agréments
              </h2>
              <p className="text-lg text-muted-foreground">
                Notre conformité aux standards nationaux et internationaux
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Badge variant="secondary" className="p-2">
                      <Award className="h-4 w-4" />
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}