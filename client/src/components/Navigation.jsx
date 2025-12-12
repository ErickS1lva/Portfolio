import { useState } from "react";
import { useTheme } from "@/App";
import logo from "@/assets/logo.png"

export default function Navigation() {
  const { toggleMode, mode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
      
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain logo-neon"
          />

          <h2
            className="neon text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            data-testid="text-portfolio-name"
          >
            Cyber-log
          </h2>
        </div>

        <ul className="hidden md:flex gap-2 items-center">
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="font-semibold px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              data-testid="link-projects"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="font-semibold px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              data-testid="link-about"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={toggleMode}
              className="ml-2 p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label={mode === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
              data-testid="button-theme-toggle"
            >
              {mode === "light" ? (
                <i className="fas fa-moon w-5 h-5" />
              ) : (
                <i className="fas fa-sun w-5 h-5" />
              )}
            </button>
          </li>
        </ul>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleMode}
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label={mode === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            data-testid="button-theme-toggle-mobile"
          >
            {mode === "light" ? (
              <i className="fas fa-moon" />
            ) : (
              <i className="fas fa-sun" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Abrir menu"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <i className="fas fa-times text-lg" />
            ) : (
              <i className="fas fa-bars text-lg" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="w-full text-left font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              data-testid="link-projects-mobile"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="w-full text-left font-semibold px-4 py-3 rounded-lg hover:bg-muted transition-colors"
              data-testid="link-about-mobile"
            >
              Sobre
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
