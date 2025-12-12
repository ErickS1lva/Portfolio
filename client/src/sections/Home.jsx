import Navigation from "@components/Navigation";
import ColorPalette from "@components/ColorPalette";
import ProjectsGallery from "@components/ProjectsGallery";
import TechStack from "@components/TechStack";
import About from "@components/About";
import Footer from "@components/Footer";
import conexaoAbcImg from "@assets/conexao-abc-logo.jpg";
import absOficinaImg from "@assets/abs-oficina-fachada.jpg";
import petShopImg from "@assets/pet_shop_animals_dog_42641b8a.jpg";
import marlindaImg from "@assets/marlinda-foto.jpg";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Conexão do ABC",
      description: "Portal de notícias regional com cobertura completa do ABC Paulista",
      imageUrl: conexaoAbcImg,
      url: "https://www.conexaodoabc.com.br/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "ABS Oficina Multimarcas",
      description: "Site institucional para oficina automotiva multimarcas",
      imageUrl: absOficinaImg,
      url: "https://www.absoficinamultimarcas.com/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Marlinda Nascimento",
      description: "Website profissional para assistente social",
      imageUrl: marlindaImg,
      url: null,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "Pet Shop",
      description: "E-commerce para loja de produtos pet",
      imageUrl: petShopImg,
      url: null,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ColorPalette />
        <ProjectsGallery projects={projects} />
        <TechStack />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent animate-fade-in"
          data-testid="text-hero-title"
        >
          Transformo ideias em
          <span className="block text-primary mt-2">experiências digitais</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
          data-testid="text-hero-subtitle"
        >
          Desenvolvedor front-end freelancer especializado em criar sites modernos, 
          rápidos e com foco em conversão.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            data-testid="button-hero-projects"
          >
            <i className="fas fa-code" />
            Ver Projetos
          </a>
          <a
            href="https://wa.me/5593984101261"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1"
            data-testid="button-hero-contact"
          >
            <i className="fab fa-whatsapp" />
            Fale Comigo
          </a>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0wLTMwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHptMCAzMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="relative">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              data-testid="text-cta-title"
            >
              Vamos trabalhar juntos?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto" data-testid="text-cta-description">
              Estou disponível para novos projetos. Entre em contato e vamos transformar sua ideia em realidade.
            </p>
            <a
              href="https://wa.me/5593984101261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all hover:-translate-y-1 shadow-lg"
              data-testid="button-cta-whatsapp"
            >
              <i className="fab fa-whatsapp text-xl" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
