# Sitio estático - Fonoaudióloga Carla Painemil (Plantilla GitHub Pages)

Este repositorio contiene una plantilla estática para el sitio web de Carla Painemil, lista para publicar en GitHub Pages. Incluye mejoras de accesibilidad, Open Graph, JSON‑LD, favicon y un formulario preparado para Formspree.

Estructura de archivos:
- `index.html` — página principal.
- `css/styles.css` — estilos.
- `js/main.js` — scripts de UX (año, smooth scroll, formulario).
- `favicon.svg` — favicon.
- `.github/workflows/deploy.yml` — workflow que publica en GitHub Pages automáticamente.
- `README.md` — instrucciones.

Antes de publicar — reemplazos necesarios:
1. Abre `index.html` y reemplaza:
   - `https://tusitio.com/` por la URL real de tu sitio (canonical y JSON‑LD) o por la URL de GitHub Pages una vez publicada.
   - `https://tusitio.com/og-image.jpg` por la ruta/URL de tu imagen OG (ideal: 1200×630).
2. Formulario:
   - Reemplaza `https://formspree.io/f/XXXXXXXX` por tu endpoint real de Formspree (o usa otro servicio). Si no quieres Formspree, puedes usar `mailto:` o cualquier backend.
3. Si quieres nombre de dominio personalizado, crea un archivo `CNAME` en la raíz con tu dominio (por ejemplo `www.tudominio.com`) y configura DNS según las instrucciones que dejé anteriormente.

Cómo usar esta plantilla (pasos rápidos)
1. Subir estos archivos al repo (ya lo estás haciendo vía web).
2. El workflow `.github/workflows/deploy.yml` desplegará automáticamente a GitHub Pages tras cada push a `main`.
3. En GitHub: ve a **Actions** para ver la ejecución del deploy y a **Settings → Pages** para obtener la URL pública.

Si necesitas que haga cambios (por ejemplo insertar tu Formspree ID, subir imagen OG o crear CNAME), pégame aquí el ID o dominio y te doy el paso final para que lo agregues (o te indico exactamente qué editar desde la web).
