import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Sun, Users, Package, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Infrastructures électriques",
    description: "Installation, maintenance et réhabilitation de réseaux électriques haute et basse tension",
    features: [
      "Assemblage et levage de pylônes 225 kV",
      "Installation de réseaux de distribution MT/BT",
      "Réhabilitation de postes de transformation",
      "Maintenance préventive et corrective",
      "Raccordement électrique industriel",
      "Éclairage public et signalisation"
    ],
    color: "primary"
  },
  {
    icon: <Sun className="h-12 w-12" />,
    title: "Systèmes solaires",
    description: "Conception et installation de solutions photovoltaïques sur mesure pour tous types de besoins",
    features: [
      "Étude et dimensionnement de systèmes solaires",
      "Installation de centrales photovoltaïques",
      "Systèmes solaires autonomes off-grid",
      "Pompage solaire pour irrigation",
      "Éclairage solaire public",
      "Maintenance de parcs solaires"
    ],
    color: "secondary"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Formation professionnelle",
    description: "Renforcement des capacités techniques en électricité et énergies renouvelables",
    features: [
      "Formation en installation électrique",
      "Certification en énergie solaire",
      "Sécurité électrique et normes",
      "Formation aux nouveaux équipements",
      "Perfectionnement technique continu",
      "Formation sur site client"
    ],
    color: "primary"
  },
  {
    icon: <Package className="h-12 w-12" />,
    title: "Fourniture d'équipements",
    description: "Distribution d'équipements électriques et matériels de qualité professionnelle",
    features: [
      "Transformateurs et disjoncteurs",
      "Panneaux solaires et onduleurs",
      "Câbles et conducteurs électriques",
      "Équipements de protection",
      "Matériel d'installation",
      "Pièces de rechange et maintenance"
    ],
    color: "secondary"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Évaluation des besoins",
    description: "Analyse détaillée de votre projet et définition des spécifications techniques"
  },
  {
    step: "02", 
    title: "Étude et devis",
    description: "Élaboration de l'étude de faisabilité et proposition commerciale détaillée"
  },
  {
    step: "03",
    title: "Planification",
    description: "Organisation des ressources, planning d'exécution et validation du projet"
  },
  {
    step: "04",
    title: "Réalisation",
    description: "Exécution des travaux avec suivi qualité et respect des délais convenus"
  },
  {
    step: "05",
    title: "Mise en service",
    description: "Tests, mise en service et formation des utilisateurs finaux"
  },
  {
    step: "06",
    title: "Suivi & maintenance",
    description: "Support technique continu et maintenance préventive des installations"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Nos services
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              GUINEA-ENERGY vous accompagne dans tous vos projets énergétiques avec 
              des solutions complètes et sur mesure
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="service-card hover-lift">
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1 p-6">
                    <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-full icon-bounce ${
                      service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                    }`}>
                      {service.icon}
                    </div>
                    <CardTitle className="mb-4 text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="lg:col-span-2 p-6 bg-gradient-to-br from-muted/20 to-muted/40 backdrop-blur">
                    <h4 className="mb-4 text-lg font-semibold">Nos prestations :</h4>
                    <div className="grid gap-3 sm:grid-cols-2 stagger-animation">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 hover-scale">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                            service.color === 'primary' ? 'text-primary' : 'text-secondary'
                          }`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Notre processus d'intervention
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Une méthodologie éprouvée pour garantir la réussite de vos projets énergétiques
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold animate-pulse-soft">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-muted-foreground animate-bounce-subtle" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Besoin d'une solution énergétique sur mesure ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Nos experts sont à votre disposition pour étudier votre projet et vous proposer 
            la solution la plus adaptée à vos besoins et votre budget
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">
                Demander un devis gratuit
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/projects">
                Voir nos réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}