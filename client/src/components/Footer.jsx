export default function Footer() {
  const links = [
    {
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/5593984101261",
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      url: "https://instagram.com/cyber_log_",
    },
  ];

  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-1">Ciber-log</h3>
            <p className="text-sm text-muted-foreground">Qualidade garantida</p>
          </div>

          <div className="flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:-translate-y-1"
                title={link.label}
                aria-label={`Acesse meu ${link.label}`}
                data-testid={`link-footer-${link.label.toLowerCase()}`}
              >
                <i className={`${link.icon} text-xl`} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Erick da Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
