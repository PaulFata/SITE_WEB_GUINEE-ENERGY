import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Helmet } from "react-helmet";
const leadership = [
  {
    name: "MOUSSA FOFANA",
    role: "Directeur Général",
    department: "Direction Générale",
    bio: "Ingénieur électricien avec plus de 15 ans d'expérience dans le secteur énergétique africain. Visionnaire du développement durable en Guinée.",
    quote: "Notre mission est de démocratiser l'accès à l'énergie pour tous les Guinéens.",
    image: "./assets/dg.jpeg",
    email: "m.fofana@guinea–energy.com ",
    phone: "+224 629 16 21 21",
    linkedin: "Moussa Fofana"
  },
  {
    name: "ISATU BAH",
    role: "Assistance de Direction & commercial",
    department: "Administration",
    bio: "Avec une expérience en gestion administrative et commerciale, j’assure la coordination de la direction, la gestion des agendas et le suivi des relations clients et partenaires.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "./assets/isatou.jpeg",
    email: "i.bah@guinea-energy.com", 
    phone: "+224 629 37 13 24",
    linkedin: "ISATU BAH"
  },
  {
    name: "MAMOUDOU NABE",
    role: "Responsable des Opérations",
    department: "Département Opérations / Production",
    bio: "Responsable des Opérations, je veille à la coordination efficace des activités, à l’optimisation des processus et à l’atteinte des objectifs stratégiques de l’entreprise, tout en garantissant performance et qualité.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "m.nabe@guinea-energy.com", 
    phone: "+224 620 28 83 62",
    linkedin: "Mamoudou Nabé"
  },
  {
    name: "KADIATOU DAFFE",
    role: "Responsable LOGISTIQUE",
    department: "Département Opérations / Logistique",
    bio: "Elle supervise l’ensemble de la chaîne logistique, depuis la gestion des stocks jusqu’à la livraison, en optimisant les processus pour garantir rapidité, fiabilité et réduction des coûts.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "./assets/daffe.jpeg",
    email: "K.daffe@guinea-energy.com", 
    phone: "+224 622 00 00 03",
    linkedin: "Kadiatou Daffé"
  }
  ,
  
  {
    name: "PAUL FATA MARA",
    role: "Responsable IT & Innovation",
    department: "Digitalisation",
    bio: "Ingénieur en génie logiciel, sofware developper et  réseaux intelligents.",
    quote: "L'innovation technologique est la clé de notre transition énergétique.",
    image: "./assets/fata.jpeg",
    email: "p.fatamara@guinea-energy.com",
    phone: "+224 621 56 08 79",
    linkedin: "Paul Fata Mara"
  },
  {
    name: "M'MAH AISSATOU CAMARA",
    role: "Comptable",
    department: "Finance",
    bio: "Expert en développement commercial avec une solide expérience dans les partenariats publics-privés et la gestion de projets d'envergure.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "i.camara@guinea-energy.com", 
    phone: "+224 628 70 72 03",
    linkedin: "M'MAH AISSATOU CAMARA"
  }
  ,
  {
    name: "MORY TOURE",
    role: "Responsable LOGISTIQUE",
    department: "Commercial",
    bio: "Expert en développement commercial avec une solide expérience dans les partenariats publics-privés et la gestion de projets d'envergure.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "m.toure@guinea-energy.com", 
    phone: "+224 625 39 28 21",
    linkedin: ""
  }
  ,
  {
    name: "JEAN BAPTISTE DUOLAMOU",
    role: "Financier ",
    department: "Commercial",
    bio: "Expert en développement commercial avec une solide expérience dans les partenariats publics-privés et la gestion de projets d'envergure.",
    quote: "Chaque projet est une opportunité de créer de la valeur partagée.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "K.daffe@guinea-energy.com", 
    phone: "+224 622 00 00 03",
    linkedin: "Kadiatou Daffé"
  }
];

/*const team = [
  {
    name: "Kadiatou Daffé",
    role: "Responsable IT",
    department: "Technique",
    speciality: "Photovoltaïque",
    experience: "8 ans",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  },
  {
    name: "Mohamed KOUROUMA",
    role: "Chef de Projets Électrification",
    department: "Technique", 
    speciality: "Réseaux électriques",
    experience: "12 ans",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop"
  },
  {
    name: "Mariam KONE",
    role: "Responsable Formation",
    department: "Formation",
    speciality: "Pédagogie technique",
    experience: "6 ans",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Amadou BALDE",
    role: "Ingénieur Maintenance",
    department: "Technique",
    speciality: "Maintenance préventive",
    experience: "10 ans",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop"
  },
  {
    name: "Kadiatou TOURE",
    role: "Chargée de Clientèle",
    department: "Commercial",
    speciality: "Relation client",
    experience: "5 ans",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop"
  },
  {
    name: "Sekou TRAORE",
    role: "Technicien Senior",
    department: "Technique",
    speciality: "Installation électrique",
    experience: "15 ans",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
  },
  {
    name: "Nene SYLLA",
    role: "Coordinatrice Qualité",
    department: "Qualité",
    speciality: "Management qualité",
    experience: "7 ans",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop"
  },
  {
    name: "Alpha CONDE",
    role: "Responsable Sécurité",
    department: "HSE",
    speciality: "Sécurité industrielle",
    experience: "9 ans",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    name: "Djelika SANGARE",
    role: "Comptable",
    department: "Finance",
    speciality: "Comptabilité générale",
    experience: "4 ans",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop"
  }
];*/

const departments = [
  { name: "Direction", count: 1, color: "primary" },
  { name: "Technique", count: 2, color: "secondary" },
  { name: "Commercial", count: 3, color: "primary" },
  { name: "Formation", count: 4, color: "secondary" },
  { name: "Support", count: 5, color: "primary" }
];

export default function Team() {
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
              Notre équipe
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Découvrez les talents qui font la force de GUINEA ENERGY. 
              Une équipe passionnée et experte au service de vos projets énergétiques.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-5">
            {departments.map((dept, index) => (
              <div key={index} className="text-center">
                <div className={`mx-auto mb-3 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  dept.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {dept.count}
                </div>
                <h3 className="font-semibold text-foreground">{dept.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {dept.count > 1 ? 'Collaborateurs' : 'Collaborateur'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Direction Générale
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              L'équipe dirigeante qui guide GUINEA-ENERGY vers l'excellence et l'innovation
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 stagger-animation">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden card-hover group">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="text-center">
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-primary font-semibold">{leader.role}</p>
                  <Badge variant="outline">{leader.department}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{leader.quote}"
                  </blockquote>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  <div className="flex justify-center space-x-4 pt-4">
                    <a href={`mailto:${leader.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={`tel:${leader.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href={`https://linkedin.com/in/${leader.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members 
      /* <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Nos collaborateurs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Des professionnels expérimentés et passionnés, chacun expert dans son domaine
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-animation">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden card-hover group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="outline" className="text-xs">{member.department}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Spécialité :</span>
                      <p className="font-medium">{member.speciality}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expérience :</span>
                      <p className="font-medium">{member.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Us CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Rejoignez l'équipe GUINEA ENERGY
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Nous recherchons constamment des talents passionnés pour renforcer notre équipe. 
            Participez à la transformation énergétique de la Guinée.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a 
              href="mailto:recrutement@guinea-energy.gn" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md font-medium transition-colors"
            >
              Envoyer votre candidature
            </a>
            <a 
              href="tel:+224622000000" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-md font-medium transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}