import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        {/* SEO par défaut (s’applique sur toutes les pages) */}
        <Helmet>
          <title>Guinea Energy – Solutions Énergétiques</title>
          <meta
            name="description"
            content="Guinea Energy, spécialiste en infrastructures électriques, systèmes solaires, technologies énergétiques, formation et fournitures de matériels électriques."
          />
          <meta
            name="keywords"
            content="Guinea Energy, énergie Guinée, solaire, électricité, matériel électrique, infrastructures"
          />
          <link rel="canonical" href="https://guinea-energy.com/" />
          <meta property="og:title" content="Guinea Energy" />
          <meta
            property="og:description"
            content="Spécialiste en infrastructures électriques, systèmes solaires et technologies énergétiques en Guinée."
          />
          <meta property="og:url" content="https://guinea-energy.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/logo.png" />
        </Helmet>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
