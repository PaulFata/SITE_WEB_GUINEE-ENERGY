import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Handshake, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Partenaires
const partnerCategories = [
  {
    title: "Nos références",
    icon: <Handshake className="h-8 w-8 text-primary" />,
    description: "ILS NOUS ONT FAIT CONFIANCE",
    partners: [
      { name: "EDG", logo: "./assets/edg2.png", category: "Équipements Électriques", description: "Fournisseur privilégié d'équipements de distribution et de protection électrique", collaboration: "Depuis 2019" },
      { name: "Cwe", logo: "./assets/we.png", category: "Panneaux Solaires", description: "Partenaire stratégique pour la fourniture de panneaux photovoltaïques haute performance", collaboration: "Depuis 2020" },
      { name: "SUMEC", logo: "./assets/sumec.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "enGie", logo: "./assets/engie2.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "Cegelec", logo: "./assets/cegelec.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "G.E.C.I", logo: "./assets/geci.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "TOPO GUINEE", logo: "./assets/topo.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "KAMA Sa", logo: "./assets/kama.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" },
      { name: "POWER TRANSMISSION LIMITED", logo: "./assets/power.png", category: "Solutions Industrielles", description: "Technologies avancées pour l'automatisation et l'optimisation énergétique", collaboration: "Depuis 2021" }
    ]
  }
];

// Filiales
const filiales = [
  {
    title: "Nos filiales",
    icon: <Building2 className="h-8 w-8" />,
    description: "Elles portent la vision et la stratégie définies pour nos différents projets",
    partners: [
      { name: "Pôles Factory", logo: "./assets/FF01.jpg" },
      { name: "Energiv", logo: "./assets/FF02.jpg" },
      { name: "elec-Rek", logo: "./assets/FF03.jpg" },
      { name: "Réseaux", logo: "./assets/FF04.jpg" }
    ]
  }
];

// Statistiques
const stats = [
  { number: "100+", label: "Projets réalisés" },
  { number: "15", label: "Localités électrifiées" },
  { number: "10+", label: "Années d'expérience" },
  { number: "10+", label: "Partenaires" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Guinea Energy - Accueil</title>
        <meta name="description" content="Spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques, formation et fournitures de matériels électriques." />
      </Helmet>

      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 p-6 flex flex-col items-center justify-center shadow-2xl rounded-2xl bg-gradient-to-br from-primary to-primary/80 border-none transition-transform duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-white animate-glow">{stat.number}</div>
                  <div className="text-sm md:text-base text-white mt-2 font-medium">{stat.label}</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-5">
          <div className="container px-4 text-center">
            <div className="mb-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">{category.icon}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">{category.title}</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{category.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.partners.map((partner, partnerIndex) => (
                <Card key={partnerIndex} className="overflow-hidden card-hover group">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center p-6 relative">
                    <img src={partner.logo} alt={`Logo ${partner.name}`} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Nos filiales */}
      {filiales.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-5 bg-white">
          <div className="container px-4 text-center">
            <div className="mb-12">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">{category.icon}</div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">{category.title}</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{category.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.partners.map((partner, partnerIndex) => (
                <Card key={partnerIndex} className="overflow-hidden card-hover group">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center p-6 relative">
                    <img src={partner.logo} alt={`Logo ${partner.name}`} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
