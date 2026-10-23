# Guía para agentes — Portafolio de Marco Mamani

## 1. Objetivo y alcance

Este proyecto convierte el CV de **Marco Antonio Mamani Mamani**, desarrollador Full Stack de El Alto, Bolivia, en una página personal profesional para reclutadores y posibles colaboradores.

El usuario aprobó estas decisiones:

- Usar **Astro + Tailwind CSS + TypeScript**; el usuario delegó la elección tecnológica.
- Crear una web moderna, adaptable a celulares y computadoras, con modo claro y oscuro.
- Utilizar la información existente en `CV_JUNIO_2026.pdf`, sin inventar datos para completar secciones.
- Mostrar expresamente **«Disponible para trabajar»**.
- Facilitar futuras ampliaciones y la publicación gratuita en **GitHub Pages**.

Comunícate con el usuario en español, con instrucciones sencillas para abrir y actualizar la página. No cambies el stack ni agregues backend, cuentas, servicios externos o funcionalidades ajenas al pedido sin una razón y autorización claras.

## 2. Fuentes de información y límites editoriales

La fuente documental es `CV_JUNIO_2026.pdf`, de cuatro páginas, ubicado en la raíz. Las indicaciones posteriores del usuario pueden ampliar o corregir esa información.

El contenido editable está principalmente en `src/data/profile.ts`. No es necesario volver a extraer el PDF para cambios de estilo, pero sí contrastar el documento si se modifica información biográfica o profesional dudosa.

### Criterios que deben conservarse

- No inventar logros, métricas, clientes, testimonios, años de experiencia, niveles de dominio, capturas, repositorios, demos ni enlaces de LinkedIn o GitHub.
- Distinguir **experiencia profesional**, competencias declaradas y formación complementaria. Un curso no demuestra por sí solo experiencia productiva.
- Mantener la denominación «Cursos y certificaciones»; no presentar todos los cursos como certificaciones profesionales verificadas.
- Los gráficos del sitio son ilustraciones conceptuales, no capturas de los sistemas.
- No deducir estado de titulación o finalización de estudios a partir de datos incompletos.
- No actualizar fechas o estados automáticamente por el paso del tiempo: «Actualidad» en HELTASTECH y el sistema de reservas en fase de conclusión proceden del CV de junio de 2026. Solicitar confirmación si se quiere actualizarlos.

### Inconsistencias y datos pendientes conocidos

- El PDF menciona **Angular 20** para un proyecto de junio–noviembre de 2024. La web omite la versión por la inconsistencia temporal. No volver a introducirla sin aclaración del usuario.
- El diplomado en Arquitectura Web Full Stack no incluye institución, fecha ni estado. No completar estos datos por suposición.
- La formación universitaria figura como «Licenciatura en Informática: Ingeniería de Sistemas», UMSA, 2025. Conservar la información sin interpretar por cuenta propia la denominación oficial o el estado académico.
- No hay perfiles sociales, URLs de demos o repositorios de proyectos aportados.
- La fotografía del PDF fue incorporada a petición del usuario en `public/marco-mamani.jpg` (222 × 222 píxeles, aproximadamente 10 KB). Se muestra como retrato circular en la presentación; no se publicó el PDF. Para mejorar su resolución, solicitar la fotografía original.

### Privacidad

- La web muestra **El Alto, Bolivia**, no la dirección domiciliaria del PDF.
- Correo y teléfono se publican según el CV. El enlace telefónico utiliza el prefijo de Bolivia `+591`.
- El PDF original **no está en `public/` ni enlazado para descarga** porque contiene dirección particular. No copiarlo a una carpeta pública sin revisión y autorización.
- El PDF sigue en la raíz: antes de subir el proyecto a un repositorio público, revisar su inclusión. No eliminar ni modificar el original sin permiso.
- No añadir analítica, seguimiento ni formularios de terceros sin autorización. La única persistencia actual de la web es la preferencia de tema en `localStorage`.
- Si se incorporan capturas del proyecto clínico, utilizar datos ficticios y verificar permisos; nunca publicar datos de pacientes.

## 3. Arquitectura y mapa de archivos

Es un sitio **estático de una página**, sin backend, base de datos, React ni enrutador de cliente.

| Ruta | Responsabilidad |
| --- | --- |
| `src/data/profile.ts` | Datos exportados: `profile`, `projects`, `experience`, `stack`, `education`, `courses` |
| `src/pages/index.astro` | Documento HTML, metadatos, secciones y scripts de interacción |
| `src/styles/global.css` | Importación de Tailwind, variables de tema, estilos propios y responsive |
| `src/components/Icon.astro` | Componente de iconos SVG mediante mapa de rutas; propiedades `name` y `size` |
| `public/favicon.svg` | Identidad gráfica del sitio |
| `astro.config.mjs` | Salida estática, integración de Tailwind vía Vite, dominio y ruta base |
| `tests/portfolio.spec.ts` | Pruebas de navegador con Playwright |
| `playwright.config.ts` | Chromium, URL de pruebas y servidor automático |
| `.github/workflows/deploy.yml` | Compilación y publicación en GitHub Pages |
| `README.md` | Instrucciones para el propietario: desarrollo, publicación y mantenimiento |
| `package.json` / `package-lock.json` | Scripts y dependencias; usar npm y conservar el lockfile |
| `tsconfig.json` | Configuración estricta de TypeScript basada en Astro |

No editar a mano `dist/`, `.astro/`, `node_modules/`, `test-results/` ni informes generados. No asumir que son cambios fuente del usuario ni borrarlos indiscriminadamente.

### Estructura de la página

1. Header fijo con marca, navegación, cambio de tema y menú móvil.
2. `#inicio`: presentación, disponibilidad y diagrama Angular → NestJS/Prisma → PostgreSQL.
3. Banda del stack principal.
4. `#proyectos`: reservas e historiales clínicos, sin enlaces ficticios.
5. Sobre mí.
6. `#experiencia`: línea de tiempo con cuatro entradas laborales.
7. `#stack`: tecnologías agrupadas por función.
8. `#formacion`: educación, cursos destacados y catálogo completo con filtros.
9. `#contacto`: correo, copiar correo, teléfono y ubicación.
10. Footer y enlace de regreso al inicio.

Los datos están mayormente centralizados, pero algunas frases, metadatos, disponibilidad, banda tecnológica e ilustraciones viven directamente en `index.astro`. Si cambia el nombre, especialidad o disponibilidad, revisar también esas apariciones para evitar inconsistencias.

## 4. Entorno y comandos

- Entorno original: Windows con PowerShell y rutas con espacios. Entrecomillar rutas al usar comandos.
- Node.js **24 LTS recomendado**. El Astro instalado al crear el proyecto requiere Node `>=22.23.4`.
- Usar **npm**. Las versiones concretas instaladas se resuelven en `package-lock.json`; no actualizar dependencias por rutina.
- En la creación inicial, esta carpeta no era un repositorio Git. Verificar el estado actual antes de asumir rama, remoto o capacidad de publicación.

```bash
npm ci
npm run dev
```

Abrir `http://localhost:4321`, o el puerto que indique Astro si está ocupado. No asumir que un servidor de otra sesión siga activo ni que un servicio existente en ese puerto sea este proyecto.

```bash
npm run check
npm run build
npm run preview
```

`check` revisa tipos y archivos Astro. `build` genera `dist/`. `preview` sirve la compilación para verificarla. No recomendar abrir el HTML generado con doble clic.

### Pruebas de navegador

```bash
npx playwright install chromium
npm test
```

Playwright inicia `npm run dev -- --port 4321` si no encuentra servidor. En local puede reutilizar uno existente; en CI no lo reutiliza. Si hay conflicto con otro servicio, resolverlo sin detener procesos desconocidos.

La suite inicial contiene cinco pruebas:

- Contenido principal, dos proyectos, cuatro empleos y enlaces de contacto.
- Cambio de tema y persistencia tras recargar.
- Catálogo de 38 entradas y filtro DevOps con seis entradas.
- Validez de las anclas internas y ausencia de errores JavaScript.
- Ausencia de desbordamiento horizontal en anchos 360, 390, 768 y 1280 px, con el catálogo abierto; funcionamiento del menú móvil.

Los conteos de proyectos, empleos y cursos están fijados en las pruebas. Si el usuario añade contenido, actualizar las expectativas para reflejarlo, no eliminar pruebas para ocultar fallos.

En la implementación inicial pasaron las cinco pruebas, `npm run check` y la compilación. Esto es una referencia histórica, no una garantía para cambios futuros: ejecutar de nuevo las comprobaciones pertinentes y comunicar lo realmente verificado.

## 5. Convenciones visuales y de implementación

- Mantener el estilo sobrio: fondos neutros, verde/turquesa, azul oscuro y buen espacio entre elementos.
- La tipografía actual usa fuentes de sistema; no depende de servicios remotos.
- Tailwind está integrado mediante `@tailwindcss/vite` y `@import "tailwindcss"`; gran parte del diseño utiliza clases CSS propias. No introducir una configuración antigua de Tailwind innecesariamente.
- Los colores se controlan mediante variables CSS de `:root` y `:root[data-theme="dark"]`.
- El tema se aplica en `<head>` para reducir destellos y se guarda bajo la clave `theme`. Los accesos a almacenamiento tienen manejo de errores.
- Preservar el diseño móvil y la regla de movimiento reducido `prefers-reduced-motion`.
- Mantener HTML semántico, idioma español, textos alternativos apropiados, foco visible, etiquetas accesibles y navegación por teclado.
- Los SVG decorativos usan `aria-hidden`; los controles deben tener un nombre accesible.
- No usar barras o porcentajes arbitrarios de dominio tecnológico.
- El catálogo usa `<details>`, botones con `aria-pressed` y anuncios accesibles. Mantener una experiencia útil sin JavaScript para el contenido principal.
- Las interacciones están en un `<script>` de Astro: tema, menú móvil, filtros y copiar correo.
- Antes de renombrar IDs, clases o atributos `data-*`, revisar scripts y pruebas que dependen de ellos. En particular: `#theme-toggle`, `#menu-toggle`, `#navigation`, `.course-catalog`, `.course-list`, `[data-filter]`, `[data-category]`, `.copy-email` y sus regiones de estado.
- Conservar los enlaces `mailto:` y `tel:` funcionales; gestionar fallos del portapapeles sin bloquear el contacto.
- No añadir librerías pesadas para interacciones que se resuelven con JavaScript pequeño.

## 6. Publicación en GitHub Pages

El sitio está publicado en `https://josu343.github.io/portafolio/`, desde el repositorio público `Josu343/portafolio`. La carpeta local ya es un repositorio Git con rama `main` y remoto `origin`. El PDF original está excluido en `.gitignore`; conservar esta protección. Normalizar la barra final de `BASE_URL` antes de concatenar nombres de recursos públicos.

La configuración actual genera únicamente archivos estáticos. **GitHub Pages no ejecuta NestJS, Java ni PostgreSQL**. Esas tecnologías se describen como experiencia del propietario, no como dependencias del portafolio.

- `astro.config.mjs` recibe `SITE_URL` y `BASE_PATH` del entorno.
- El valor local por defecto de `site` es `https://example.com`: es un marcador, no una dirección publicada real.
- El workflow obtiene el dominio y la ruta base desde `actions/configure-pages` y los pasa al build.
- Mantener compatibilidad tanto con `usuario.github.io` como con `usuario.github.io/repositorio/`.
- Para nuevos recursos públicos, considerar `import.meta.env.BASE_URL`; evitar rutas absolutas como `/imagen.png` que fallen bajo un subdirectorio.
- No fijar usuario, repositorio o dominio que el propietario no haya proporcionado.
- El workflow usa Node 24 y `npm ci`, publica `dist/` y se dispara al cambiar `main` o mediante `workflow_dispatch`.
- El repositorio debe tener **Settings → Pages → Source → GitHub Actions**.
- El workflow actual compila y despliega; no ejecuta automáticamente la revisión de tipos ni las pruebas. No afirmar lo contrario.
- No crear repositorios remotos, subir archivos ni publicar información personal sin autorización. Tener el workflow preparado no significa que el sitio ya esté en Internet.

## 7. Flujo recomendado para próximas tareas

1. Leer este archivo, `README.md` y los archivos implicados; revisar cambios existentes antes de editar.
2. Para contenido, modificar primero `src/data/profile.ts` y comprobar las frases relacionadas en la página.
3. Para diseño, respetar variables de tema, responsive y accesibilidad; probar claro y oscuro.
4. Para nuevas imágenes o documentos, verificar privacidad, permisos, peso y compatibilidad con la ruta base de Pages.
5. Ejecutar `npm run check` y `npm run build`; para interacciones o estructura, también `npm test` y revisión visual móvil/escritorio.
6. Actualizar `README.md`, pruebas y esta guía si cambia la arquitectura o el procedimiento de uso.
7. Cerrar con un resumen breve en español: qué cambió, qué se verificó y cómo abrir la página. No presentar servicios locales como enlaces públicos ni asumir que siguen activos tras terminar una sesión.

Priorizar cambios concretos y coherentes con lo existente. No sobrescribir el CV ni descartar trabajo de otras sesiones para resolver una tarea.
