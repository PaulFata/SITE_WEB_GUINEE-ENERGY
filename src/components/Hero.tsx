import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sun, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 py-20 text-center relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/42f8a1ac-2def-4d4e-9546-1af8b3191ad3.png" 
              alt="Guinea Energy Logo" 
              className="h-32 w-auto"
            />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            <span className="text-primary">GUINEA-ENERGY</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Construire l'avenir énergétique
            </span>
            <br />
            <span className="text-secondary">de la Guinée</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            L'assurance de l'accessibilité et de la sécurité énergétique. 
            Spécialistes en infrastructures électriques, systèmes solaires, formation et fourniture.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/projects">
                Voir nos réalisations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Infrastructures</h3>
              <p className="text-sm text-muted-foreground">Électriques</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Sun className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Systèmes</h3>
              <p className="text-sm text-muted-foreground">Solaires</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Formation</h3>
              <p className="text-sm text-muted-foreground">Professionnelle</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">Fourniture</h3>
              <p className="text-sm text-muted-foreground">Équipements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}