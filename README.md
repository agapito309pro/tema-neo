# Neon Eclipse · tema cyberpunk para Kino

Tema para **toda la app** de Kino (celular, escritorio y TV) inspirado en el horizonte urbano nocturno con anillo neón rosa-magenta y destellos cian, construido replicando la arquitectura multiplataforma de `Ben10` (`apiVersion` 18, `capabilities: ["screen"]`, `screen` + `screenEvent` y `go.useTheme`).

No usa la red (`"hosts": []`) y no pide permisos. Guía oficial: <https://kinotvapp.github.io/kino-plugins/themes/>

> Requiere **Kino 0.9.81 o posterior** (`apiVersion` 18).

## Las tres variantes

| id | Nombre | Emblema | Acento | Fondo / Carácter |
|---|---|---|---|---|
| `neon-eclipse-horizon` | Horizonte Neón | visor hexagonal cyberpunk | rosa neón `#FF2A85` | imagen de fondo `assets/background.png` (`dim: 0.55`), bordes suaves, fundido de 200 ms |
| `neon-eclipse-magenta-grid` | Pulso Magenta | prisma / cuchilla ciber | magenta `#FF4DA6` | degradado oscuro `#090212` → `#260838`, bordes de 2 dp, experiencia ligera |
| `neon-eclipse-cyber-cyan` | Ciber Cian | nodo / rejilla ciber | cian `#5CE1E6` | degradado nocturno `#040A14` → `#0C223D`, cortes rápidos de 80 ms, experiencia ligera |

## Qué hay en cada parte

- **Logo.** `logo.wordmark` muestra el emblema cyberpunk a la izquierda y **KINO** en bloques con esquinas cortadas a la derecha. `logo.mark` muestra solo el emblema. El emblema usa `accent` y el núcleo/texto usa `textPrimary`.
- **Pantalla de presentación.** `plugin.js` exporta `screen` y `screenEvent` con un botón por tema (`go.useTheme`), accesible desde la pestaña de ajustes del plugin con **Ver presentación** y alternando entre activar y desactivar según `activeTheme`.
- **Fondo y ajustes.** Incluye `assets/background.png` en `appThemes[0].assets` con su `sha256` y tamaño en bytes verificados, manteniendo el manifiesto en unos 9 KB (por debajo del límite de 16 KB).

## Instalación

1. Sube `kino-plugin.json`, `plugin.js`, `README.md`, `icon.png` y la carpeta `assets/` a `https://github.com/agapito309pro/tema-neo`.
2. En Kino, ve a **Ajustes ▸ Plugins**, instala `agapito309pro/tema-neo` y ábrelo para usar la pantalla de presentación o elige el tema en **Ajustes ▸ Apariencia**.
