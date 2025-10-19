import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export default function Navigation() {
  const { toggleMode, mode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" data-testid="text-portfolio-name">
          Erick da Silva
        </h2>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 items-center">
          <li>
            <button
              onClick={() => scrollToSection('projetos')}
              className="font-semibold px-4 py-2 hover-elevate rounded-md transition-all"
              data-testid="link-projects"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('sobre')}
              className="font-semibold px-4 py-2 hover-elevate rounded-md transition-all"
              data-testid="link-about"
            >
              Sobre
            </button>
          </li>
          <li>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMode}
              className="ml-2"
              data-testid="button-theme-toggle"
            >
              {mode === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMode}
            data-testid="button-theme-toggle-mobile"
          >
            {mode === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col px-4 py-2">
            <li>
              <button
                onClick={() => scrollToSection('projetos')}
                className="w-full text-left font-semibold px-4 py-3 hover-elevate rounded-md transition-all"
                data-testid="link-projects-mobile"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="w-full text-left font-semibold px-4 py-3 hover-elevate rounded-md transition-all"
                data-testid="link-about-mobile"
              >
                Sobre
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
