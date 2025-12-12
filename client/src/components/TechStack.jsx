export default function TechStack() {
  const technologies = [
    { icon: "fab fa-html5", name: "HTML5", color: "text-orange-500" },
    { icon: "fab fa-css3-alt", name: "CSS3", color: "text-blue-500" },
    { icon: "fab fa-js", name: "JavaScript", color: "text-yellow-500" },
    { icon: "fab fa-react", name: "React", color: "text-blue-500"}
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50 rounded-2xl p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10" data-testid="text-tech-title">
          Tecnologias
        </h2>
        <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className="neon-hover w-16 h-16 sm:w-20 sm:h-20 bg-card border border-border rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-all hover:scale-110 hover:shadow-lg hover:border-primary/50"
                title={tech.name}
                data-testid={`icon-tech-${tech.name.toLowerCase()}`}
              >
                <i className={`${tech.icon} ${tech.color}`} />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
