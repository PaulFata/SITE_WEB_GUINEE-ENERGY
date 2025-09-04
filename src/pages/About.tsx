import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, Eye, Heart, Award, Users, Zap, Globe } from "lucide-react";
import { Helmet } from "react-helmet";
const values = [
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Excellence",
    description: "Services de haute qualité conformes aux standards internationaux."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Intégrité",
    description: "Transparence, honnêteté et respect des engagements dans toutes nos relations professionnelles."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "Nous travaillons en partenariat étroit avec nos clients pour garantir satisfaction et confiance dans chaque projet."
  },
  {
    icon: <img 
             src="./assets/innovation.png" 
              alt="Infrastructures" 
              className="h-10 w-10 object-contain animate-glow"
            />,
    title: "Innovation",
    description: "nous adoptons des technologies les plus récentes pour des solutions énergétiques durables,efficaces efficientes."
  }
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
      <Helmet>
        <title>Guinea Energy - À propos</title>
        <meta
          name="description"
          content="Guinea Energy : spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques et formation professionnelle."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Qui sommes-nous ?
            </h1>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-slide-in-left">
            <div className="mb-4 flex justify-center animate-bounce-in">
              <img 
                src="./assets/logo3.png" 
                alt="Guinea Energy Logo" 
                className="h-20 sm:h-32 md:h-40 w-auto animate-float"
              />
              
            </div>
          </h1>
          <h4 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Garant de l’accessibilité et de la sécurité énergétique.
            </span>
            <br />
          </h4>

          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
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
                src="./assets/local.jpeg"
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
                  Notre vision est de devenir un acteur de référence en Afrique  dans la 
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
              Nos valeurs reposent sur l'innovation, l'excellence opérationnelle, l'intégrité, 
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
    </div>
  );
}