import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Sun, Users, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/60 to-secondary/30"></div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container px-4 py-20 text-center relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center animate-bounce-in">
            <img 
              src="/lovable-uploads/96a98c9d-834a-4708-b939-a82aa3b057d8.png" 
              alt="Guinea Energy Logo" 
              className="h-32 w-auto animate-float"
            />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-slide-in-left">
            <span className="text-primary">GUINEA-ENERGY</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-slide-in-right animate-delay-200">
              Construire l'avenir énergétique
            </span>
            <br />
            <span className="text-secondary animate-slide-in-left animate-delay-400">de la Guinée</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up animate-delay-300">
            L'assurance de l'accessibilité et de la sécurité énergétique. 
            Spécialistes en infrastructures électriques, systèmes solaires, formation et fourniture.
          </p>
          
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
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up animate-delay-100 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-pulse">
                  <Zap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Infrastructures</h3>
                <p className="text-sm text-muted-foreground">Électriques</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up animate-delay-200 bg-white/80 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300 group-hover:animate-pulse">
                  <Sun className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">Systèmes</h3>
                <p className="text-sm text-muted-foreground">Solaires</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up animate-delay-300 bg-white/80 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:animate-pulse">
                  <Users className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Formation</h3>
                <p className="text-sm text-muted-foreground">Professionnelle</p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in-up animate-delay-400 bg-white/80 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300 group-hover:animate-pulse">
                  <Award className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">Fourniture</h3>
                <p className="text-sm text-muted-foreground">Équipements</p>
              </CardContent>
            </Card>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-primary scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}