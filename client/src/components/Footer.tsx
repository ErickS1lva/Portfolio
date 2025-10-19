export default function Footer() {
  const links = [
    { icon: 'fab fa-github', label: 'GitHub', url: '#' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: '#' },
    { icon: 'fas fa-envelope', label: 'Gmail', url: '#' },
  ];

  return (
    <footer className="border-t border-border/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-1">Erick da Silva</h3>
            <p className="text-sm text-muted-foreground">Desenvolvedor Front-End</p>
          </div>
          
          <div className="flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="w-12 h-12 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover-elevate active-elevate-2"
                title={link.label}
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
