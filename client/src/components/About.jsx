export default function About() {
  return (
    <section id="sobre" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border/50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <i className="fas fa-sparkles text-xl text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-center" data-testid="text-about-title">
              Sobre mim
            </h2>
          </div>

          <p
            className="text-lg sm:text-xl text-center text-muted-foreground mb-8"
            data-testid="text-about-subtitle"
          >
            Desenvolvedor front-end freelancer
          </p>

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
            <a
              href="https://wa.me/5593984101261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              data-testid="button-contact-whatsapp"
            >
              <i className="fab fa-whatsapp text-lg" />
              Solicitar orçamento agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
