// Neon Eclipse — Selector de Temas Cyberpunk para Kino (Android & Windows)
const THEMES = [
  {
    id: "neon-eclipse",
    title: "Neon Eclipse (Fondo Urbano)",
    subtitle: "Horizonte nocturno con anillo neón rosa-magenta (#FF2A85) y fondo personalizado.",
    accent: "#FF2A85",
    secondary: "#5CE1E6",
    badge: "IMAGEN + NEÓN"
  },
  {
    id: "neon-eclipse-gradient",
    title: "Neon Eclipse (Degradado)",
    subtitle: "Degradado púrpura profundo (#090312 → #3B0E47), ligero y sin imagen externa.",
    accent: "#D92679",
    secondary: "#C084FC",
    badge: "DEGRADADO"
  },
  {
    id: "neon-eclipse-cyber-cyan",
    title: "Neon Eclipse (Cyber Cian)",
    subtitle: "Estética cian eléctrico (#5CE1E6) con contraste azul nocturno y detalles magenta.",
    accent: "#5CE1E6",
    secondary: "#FF2A85",
    badge: "CYBER CIAN"
  }
];

function buildThemeCard(theme) {
  return {
    id: `theme-card:${theme.id}`,
    title: theme.title,
    subtitle: `${theme.badge} · ${theme.subtitle}`,
    description: `${theme.subtitle}\n\nPulsa para aplicar este tema en Kino (o selecciónalo en Ajustes ▸ Apariencia).`,
    type: "movie",
    action: {
      type: "applyTheme",
      themeId: theme.id
    }
  };
}

const plugin = {
  id: "theme-neon-eclipse",
  name: "Neon Eclipse",

  async getHome() {
    return {
      hero: {
        id: "hero:neon-eclipse",
        title: "NEON ECLIPSE // CYBERPUNK",
        subtitle: "Selecciona una variante visual para transformar la interfaz de Kino",
        description:
          "Elige entre el tema con fondo urbano nocturno, el degradado púrpura o la edición Cyber Cian. Compatible con Android y Windows.",
        action: {
          type: "applyTheme",
          themeId: "neon-eclipse"
        }
      },
      sections: [
        {
          id: "section:cyberpunk-themes",
          title: "Selector de Temas Cyberpunk",
          items: THEMES.map(buildThemeCard)
        }
      ]
    };
  },

  async onAction(action, ctx) {
    if (!action || action.type !== "applyTheme") return null;
    const chosen = THEMES.find((t) => t.id === action.themeId) || THEMES[0];

    try {
      if (ctx && typeof ctx.setAppTheme === "function") {
        await ctx.setAppTheme(chosen.id);
      } else if (ctx && ctx.app && typeof ctx.app.setTheme === "function") {
        await ctx.app.setTheme(chosen.id);
      } else if (ctx && ctx.ui && typeof ctx.ui.setAppTheme === "function") {
        await ctx.ui.setAppTheme(chosen.id);
      }
    } catch (_) {
      // Fallback: Kino aplica el tema desde Ajustes -> Apariencia
    }

    return {
      type: "message",
      title: `Tema activado: ${chosen.title}`,
      message: `Se seleccionó "${chosen.title}" (${chosen.id}). Si en Windows no cambia automáticamente, ve a Ajustes ▸ Apariencia y elige "${chosen.title}".`
    };
  }
};

export default plugin;
