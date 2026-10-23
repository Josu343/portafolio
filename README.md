# Portafolio de Marco Mamani

Página personal estática creada con Astro, Tailwind CSS y TypeScript. El contenido procede de `CV_JUNIO_2026.pdf`, junto con la disponibilidad laboral indicada por su propietario.

## Ver la página en tu computadora

Necesitas Node.js 24 LTS (recomendado) o una versión compatible con Astro, como Node.js 22.23.4 o superior.

Abre una terminal en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre **http://localhost:4321**. Si el puerto está ocupado, Astro indicará otro en la terminal. Mantén la terminal abierta mientras visitas la página. Para detenerla, pulsa `Ctrl+C`.

## Comprobar la versión final

```bash
npm run build
npm run preview
```

Abre la dirección que indique la terminal. No abras `dist/index.html` haciendo doble clic: utiliza el servidor de previsualización.

## Publicar gratis en GitHub Pages

1. Crea un repositorio público en GitHub, por ejemplo `portafolio`, usando la rama `main`.
2. Sube el contenido de esta carpeta, incluyendo `package-lock.json` y `.github/workflows/deploy.yml`. No subas `node_modules`, `dist`, `.astro` ni archivos privados.
3. **No publiques el PDF original sin revisarlo:** contiene dirección domiciliaria. La web no lo enlaza ni lo incorpora a `public/` por esa razón. Si no quieres alojarlo en GitHub, exclúyelo antes de subir los archivos.
4. En el repositorio, abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Abre **Actions**, selecciona “Publicar portafolio en GitHub Pages” y pulsa **Run workflow**, o realiza un nuevo cambio en `main`.
6. Al finalizar, GitHub mostrará la URL, normalmente `https://TUUSUARIO.github.io/portafolio/`.

El workflow configura automáticamente el dominio y la ruta del repositorio. También funciona con un repositorio `TUUSUARIO.github.io`, cuya web estará en la raíz. No necesitas servidor ni base de datos.

## Actualizar información

- **Contenido:** `src/data/profile.ts` (perfil, proyectos, experiencia, tecnologías, educación y los 38 cursos).
- **Estructura:** `src/pages/index.astro`.
- **Diseño y temas:** `src/styles/global.css`.
- **Iconos:** `src/components/Icon.astro`.
- **Publicación:** `.github/workflows/deploy.yml`.

Después de modificar el contenido, comprueba `npm run build`. Al subir los cambios a `main`, GitHub Actions actualizará la web.

## Pruebas

```bash
npm run check
npx playwright install chromium
npm test
```

Las pruebas comprueban las versiones móvil y de escritorio, los temas, el menú, los filtros y los enlaces de contacto. El servidor de pruebas se inicia automáticamente si no hay uno en el puerto 4321.

## Criterios de contenido

- No se inventan repositorios, demos, imágenes de proyectos, logros ni métricas.
- Los diagramas e ilustraciones son gráficos conceptuales, no capturas de aplicaciones.
- El estado del sistema de reservas y las fechas laborales se basan en el CV de junio de 2026; revisar cuando se actualice la información.
- Se omite la versión de Angular en la experiencia de 2024 por la inconsistencia temporal del PDF.
- No se deducen institución, fecha o finalización del diplomado.
- No se publica la dirección domiciliaria ni un enlace de descarga al PDF original.
- El número telefónico usa el prefijo de Bolivia para el enlace de llamada.
- La foto de presentación está en `public/marco-mamani.jpg`: se extrajo únicamente el retrato del PDF, sin publicar el documento. Para actualizarla, sustituye esa imagen y ajusta sus dimensiones en `src/pages/index.astro` si cambian.
- No hay analítica, formulario externo, cookies de seguimiento ni fuentes remotas. La preferencia de tema se guarda localmente.
