import { Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section
      id="sobre"
      className="max-w-4xl mx-auto px-6 py-16"
    >
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border/50 rounded-3xl p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-4xl font-bold text-center" data-testid="text-about-title">
              Sobre mim
            </h1>
          </div>
          
          <h2 className="text-xl text-center text-muted-foreground mb-8" data-testid="text-about-subtitle">
            Desenvolvedor front-end freelancer
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-foreground/90 mb-10">
            <p data-testid="text-about-paragraph-1" className="text-center md:text-left">
              Sou um desenvolvedor front-end freelancer especializado em criar sites e landing pages
              modernas, rápidas e com foco em conversão. Meu trabalho é ajudar profissionais,
              empreendedores e criadores a se destacarem online com soluções visuais que funcionam.
            </p>

            <p data-testid="text-about-paragraph-2" className="text-center md:text-left">
              Desenvolvo páginas que carregam rápido, funcionam em qualquer dispositivo e transmitem
              credibilidade. Já ajudei desde negócios locais até criadores de conteúdo a conquistarem
              mais clientes com presença digital.
            </p>

            <p data-testid="text-about-paragraph-3" className="text-center md:text-left">
              Se você precisa de um site que represente seu valor e gere resultados reais, estou pronto
              para transformar sua ideia em código.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
              data-testid="button-contact-whatsapp"
            >
              <a
                href="https://wa.me/5593984101261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Solicitar orçamento agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
