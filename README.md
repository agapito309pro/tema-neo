# Tema Neon Eclipse (Cyberpunk) para Kino

Tema oscuro cyberpunk (`apiVersion: 26`) inspirado en un horizonte urbano nocturno con anillo neón rosa-magenta, destellos cian, logotipo vectorial **KINO** y pantalla de presentación interactiva para elegir variantes.

**Versión actual: 1.1.1** — optimizado por debajo de **16 KB** en `kino-plugin.json` y compatible con **Kino 0.9.87 o posterior** (Android y Windows).

## Instalación

1. Sube todos los archivos de este paquete a la raíz de tu repositorio `https://github.com/agapito309pro/tema-neo` reemplazando los anteriores (incluyendo `assets/background.png` para conservar su `sha256` exacto).
2. En Kino, ve a **Ajustes ▸ Plugins** y escribe:
   ```
   agapito309pro/tema-neo
   ```
3. Abre **Neon Eclipse** desde el menú de plugins para usar la pantalla de presentación y elegir una variante, o selecciona el tema directamente en **Ajustes ▸ Apariencia**.

## Variantes incluidas

- **Neon Eclipse**: fondo urbano nocturno (`assets/background.png`, `fit: "cover"`, `dim: 0.5`) con superficies violeta oscuro y acento rosa neón (`#FF2A85`).
- **Neon Eclipse (Degradado)**: degradado púrpura profundo (`#090312` → `#3B0E47` → `#090312`) sin depender de imagen externa.
- **Neon Eclipse (Cyber Cian)**: estética cian eléctrico (`#5CE1E6`) sobre azul nocturno con detalles magenta.

## Pantalla de presentación y personalización

- **Selector interactivo (`plugin.js`)**: muestra un hero de presentación cyberpunk y tarjetas para previsualizar y activar cada variante.
- **Logotipo vectorial KINO**: emblema hexagonal neón con visor cian y tipografía angular cyberpunk integrado en `wordmark` y `mark`.
- **Ajustes ▸ Apariencia ▸ Personalizar**: permite modificar acentos, superficies, favoritos, radios de tarjetas/botones, escalas de texto, reproductor y zoom de foco.

## Autor

- **author**: agapito309pro
- **homepage**: https://github.com/agapito309pro/tema-neo
