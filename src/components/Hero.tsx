import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, UtilityPole, Sun, Users, Award, ChevronLeft, ChevronRight, Monitor,SunDim,HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
const heroImages = [
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&h=600&fit=crop",
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&h=600&fit=crop"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <Helmet>
        <title>Guinea Energy - À propos</title>
        <meta
          name="description"
          content="Guinea Energy : spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques et formation professionnelle."
        />
      </Helmet>
      {/* Arrière-plan moderne avec formes organiques */}
     

      {/* Motif organique décoratif */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary animate-float"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full bg-primary animate-bounce-subtle"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent-cream/30 animate-pulse-soft"></div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-accent-cream/30 rounded-full animate-rotate-slow z-5"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-secondary rounded-lg animate-float z-5"></div>
      
      <div className="container px-4 py-20 text-center relative z-10">
        <div className="mx-auto max-w-4xl">
         
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-slide-in-left">
            <div className="mb-4 flex justify-center animate-bounce-in">
              <img 
                src="./assets/logo3.png" 
                alt="Guinea Energy Logo" 
                className="h-20 sm:h-32 md:h-40 w-auto animate-float"
              />
            </div>
          </h1>

          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animate-delay-300">
           Spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques, formation et fournitures de matériels électriques.
          </p>
          <h4 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Garant de l’accessibilité et de la sécurité énergétique.
            </span>
            <br />
          </h4>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animate-delay-400">
            <Button asChild size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/projects">
                Voir nos réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg hover:scale-105 transition-transform duration-300">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
          
         <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
      <Link to="./services">
        <Card className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 bg-accent-cream/90 backdrop-blur-lg border-none shadow-2xl rounded-2xl h-[220px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <CardContent className="relative p-4 text-center flex flex-col items-center justify-center h-full">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 transition-transform duration-500 shadow-md">
            <img 
                src="./assets/infrac.jpg" 
                alt="Infrastructures" 
                className="h-10 w-10 object-contain animate-glow"
              />
            </div>
            <h3 className="text-lg font-bold text-accent-dark mb-1 group-hover:text-primary transition-colors duration-300">
              Infrastructures
            </h3>
            <p className="text-primary/70 text-sm font-medium">Électriques</p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="./services">
        <Card className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 bg-accent-cream/90 backdrop-blur-lg border-none shadow-2xl rounded-2xl h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <CardContent className="relative p-4 text-center flex flex-col items-center justify-center h-full">
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 group-hover:scale-110 transition-transform duration-500 shadow-md">
              <img 
                src="./assets/solaire.png" 
                alt="Infrastructures" 
                className="h-10 w-10 object-contain animate-glow"
              />
            </div>
          <h3 className="text-lg font-bold text-accent-dark mb-1 group-hover:text-primary transition-colors duration-300">
            Systèmes
          </h3>
          <p className="text-primary/70 text-sm font-medium">Solaires</p>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
        </CardContent>
      </Card>
      </Link>
      

        <Link to="./services">
              <Card className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 bg-accent-cream/90 backdrop-blur-lg border-none shadow-2xl rounded-2xl h-[220px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="relative p-4 text-center flex flex-col items-center justify-center h-full">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 group-hover:scale-110 transition-transform duration-500 shadow-md">
                   <img 
                      src="./assets/formation.png" 
                      alt="Infrastructures" 
                      className="h-10 w-10 object-contain animate-glow"
                    />
                  </div>
                <h3 className="text-lg font-bold text-accent-dark mb-1 group-hover:text-primary transition-colors duration-300">
                  Formation
                </h3>
                <p className="text-primary/70 text-sm font-medium">Professionnelle</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </CardContent>
            </Card>
        </Link>

       <Link to="./services">
          <Card className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 bg-accent-cream/90 backdrop-blur-lg border-none shadow-2xl rounded-2xl h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-4 text-center flex flex-col items-center justify-center h-full">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 group-hover:scale-110 transition-transform duration-500 shadow-md">
                <img 
                      src="./assets/outils.png" 
                      alt="Infrastructures" 
                      className="h-10 w-10 object-contain animate-glow"
                    />
                </div>
              <h3 className="text-lg font-bold text-accent-dark mb-1 group-hover:text-primary transition-colors duration-300">
                Fourniture
              </h3>
              <p className="text-primary/70 text-sm font-medium">Équipements</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </CardContent>
          </Card>
        </Link>


        <Link to="./services">
          <Card className="group relative overflow-hidden card-hover animate-fade-in-up animate-delay-100 bg-accent-cream/90 backdrop-blur-lg border-none shadow-2xl rounded-2xl h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="relative p-4 text-center flex flex-col items-center justify-center h-full">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 transition-transform duration-500 shadow-md">
               <img 
                      src="./assets/innovation.png" 
                      alt="Infrastructures" 
                      className="h-10 w-10 object-contain animate-glow"
                    />
                </div>
                <h3 className="text-lg font-bold text-accent-dark mb-1 group-hover:text-primary transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-primary/70 text-sm font-medium">Digitalisation</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </CardContent>
          </Card>
        </Link>

  
  
</div>

          {/* Indicateurs de style moderne */}
          <div className="flex justify-center space-x-3 mt-12">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`w-2 h-8 rounded-full transition-all duration-500 ${
                  index === currentImage % 6
                    ? 'bg-secondary scale-125 shadow-lg' 
                    : 'bg-accent-cream/60 hover:bg-accent-cream'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}