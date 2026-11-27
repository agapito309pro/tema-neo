// Neon Eclipse · tema cyberpunk para Kino (apiVersion 18)
//
// Los temas viven como datos en kino-plugin.json (appThemes): no corren código,
// no usan la red y no piden permisos. Este archivo dibuja una pantalla de
// presentación con un botón por variante (go.useTheme). Ajustes ▸ Apariencia
// sigue siendo la vía principal para activarlos.

const THEMES = [
  { id: "neon-eclipse-horizon", es: "Horizonte Neón", en: "Neon Horizon" },
  { id: "neon-eclipse-magenta-grid", es: "Pulso Magenta", en: "Magenta Pulse" },
  { id: "neon-eclipse-cyber-cyan", es: "Ciber Cian", en: "Cyber Cyan" },
];

export async function screen({ activeTheme }) {
  const buttons = THEMES.map((t) => {
    const on = activeTheme === t.id;
    return {
      type: "ElevatedButton",
      key: "theme-" + t.id,
      icon: on ? "check" : "bolt",
      labelText: on ? t.es + " · activo (desactivar)" : "Activar " + t.es,
      labelTextEn: on ? t.en + " · on (turn off)" : "Activate " + t.en,
      onPressed: { go: { useTheme: { theme: on ? null : t.id } } },
    };
  });

  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: 16,
        gap: 12,
        children: [
          { type: "Badge", text: "TEMA CYBERPUNK · KINO", textEn: "CYBERPUNK THEME · KINO", color: "primary" },
          { type: "Text", text: "Modo Neon Eclipse activado", textEn: "Neon Eclipse mode ready", style: "h1" },
          {
            type: "Text",
            text: "Horizonte urbano neón rosa-magenta y cian con tres variantes y logotipo vectorial KINO.",
            textEn: "Neon pink-magenta and cyan city skyline with three variants and KINO vector logo.",
            style: "caption",
            color: "muted",
          },
          { type: "Divider" },
          {
            type: "Card",
            variant: "outlined",
            key: "about",
            children: [
              {
                type: "Text",
                text: "Cada variante ajusta el emblema cyberpunk junto al texto KINO, los colores, los bordes, la forma de los botones y el fondo.",
                textEn: "Each variant updates the cyberpunk emblem next to KINO text, colors, borders, button shape and background.",
              },
            ],
          },
          { type: "Column", gap: 8, crossAxisAlignment: "stretch", children: buttons },
          {
            type: "Text",
            text: "También puedes cambiarlo en Ajustes ▸ Apariencia. Usa el fondo del horizonte neón o las variantes con degradado.",
            textEn: "You can also switch it in Settings ▸ Appearance. Use the neon horizon image or gradient variants.",
            style: "caption",
            color: "muted",
          },
        ],
      },
    ],
  };
}

export async function screenEvent() {
  return null;
}
