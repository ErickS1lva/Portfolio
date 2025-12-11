import { useTheme } from "@/App";

export default function ColorPalette() {
  const { color, setColor } = useTheme();

  const colors = [
    { name: "blue", color: "#1953f3", label: "Azul" },
    { name: "red", color: "#e91809", label: "Vermelho" },
    { name: "green", color: "#16a34a", label: "Verde" },
    { name: "purple", color: "#7c3aed", label: "Roxo" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-6 p-6 sm:p-8 items-center border border-border/50 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <i className="fas fa-palette text-xl text-primary" />
          <h2 className="text-xl sm:text-2xl font-bold" data-testid="text-customize-title">
            Personalize seu tema
          </h2>
        </div>
        <p className="text-muted-foreground text-center text-sm sm:text-base" data-testid="text-customize-description">
          Escolha a paleta de cores que mais combina com você
        </p>
        <div className="flex gap-3 sm:gap-4">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 cursor-pointer transition-all hover:scale-110 ${
                color === c.name
                  ? "border-foreground ring-4 ring-primary/30 scale-110"
                  : "border-border/50 hover:border-border"
              }`}
              style={{ backgroundColor: c.color }}
              title={c.label}
              aria-label={`Selecionar tema ${c.label}`}
              data-testid={`button-color-${c.name}`}
            >
              {color === c.name && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full shadow-lg" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
