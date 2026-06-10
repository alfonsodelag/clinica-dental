# CLAUDE.md — Odonto Panamá

## Project Overview

**Name:** Odonto Panamá  
**Razón social:** ODONTO PANAMA S.A.  
**Type:** Next.js 14 dental clinic landing page  
**Language:** Spanish (es-PA — Panamá locale)  
**Stack:** Next.js 14 · Bootstrap 5 · SCSS · React 18  
**Inicio de operaciones:** 1 de febrero de 2021  
**Estado:** Vigente

Esta es la landing page oficial de la Clínica Dental Odonto Panamá, ubicada en Obarrio,
Ciudad de Panamá. El diseño sigue la identidad visual de la marca con estética médica profesional.

---

## Datos de Contacto (producción)

| Campo              | Valor                                         |
|--------------------|-----------------------------------------------|
| WhatsApp principal | `+507 6054-4016`                              |
| Teléfono Waze      | `832-0997` *(confirmar con el cliente)*       |
| Email              | `miodontopanama@gmail.com`                    |
| Dirección          | Avenida Abel Bravo, Duplex #7, Obarrio        |
| Referencia         | Detrás del Hotel Sortis, Ciudad de Panamá     |
| Metro              | ~250 m de la estación Vía Argentina           |
| Instagram          | [@odonto.panama](https://instagram.com/odonto.panama) |
| Google Rating      | 4.8 / 5                                       |

---

## Brand Identity

### Primary Palette

| Token                  | Hex       | Usage                                      |
|------------------------|-----------|--------------------------------------------|
| `--iom-primary`        | `#12445C` | Fondos, botones, headings                  |
| `--iom-bg-light`       | `#F7FAFB` | Background de página, alternancia secciones|
| `--iom-ice`            | `#E6F2F6` | Cards, badge backgrounds, iconos           |
| `--iom-turquoise`      | `#2BB3A3` | Acentos, labels de sección, checkmarks     |
| `--iom-mint`           | `#A7E3D1` | Iconos suaves, elementos decorativos       |
| `--iom-cta`            | `#F2B880` | Botones CTA (contraste cálido)             |
| `--iom-gold`           | `#D2C492` | Info bar background, acento de marca       |
| `--iom-text`           | `#12212A` | Texto principal                            |
| `--iom-text-secondary` | `#6B7C85` | Texto secundario / descriptivo             |
| `--iom-border`         | `#D7E6EC` | Bordes de cards, divisores                 |

### Typography

- **Headings:** `Merriweather` (serif, weight 600–700) — clase `.merriweather`
- **Body:** `Poppins` (sans-serif, weight 400–600) — clase `.poppins`
- **Texto descriptivo:** `Lato` (sans-serif, weight 400) — clase `.lato`

---

## Estructura de la Página

El archivo `pages/index.jsx` compone estas secciones en orden:

| #  | Componente          | Descripción                                           |
|----|---------------------|-------------------------------------------------------|
| 1  | `Hero`              | Split layout: texto izq. + imagen arco der.           |
| 2  | `InfoBar`           | Barra dorada: contacto, horario, CTA WhatsApp         |
| 3  | `Services`          | "Odontología integral para toda la familia"           |
| 4  | `Specialties`       | Grid navy oscuro con 6 especialidades                 |
| 5  | `CTASection`        | Card dorada redondeada: "Recupera tu sonrisa"         |
| 6  | `Facts`             | Stats: 500+ · 4.8/5 · 10+ · 4 años                   |
| 7  | `DoctorSection`     | "Sobre Nosotros" + Por qué elegirnos (4 cards)        |
| 8  | `InnovationSection` | Split: imagen + acordeón FAQ (5 preguntas)            |
| 9  | `BlogSection`       | 3 cards de blog dental                                |
| 10 | `ContactSection`    | Mapa Google Maps + datos de contacto + CTAs           |

**Layout compartido** (`components/Layout.jsx`): envuelve cada página con `Header` + `Footer`.

---

## Servicios de la Clínica

1. Odontología General
2. Limpieza Dental y Profilaxis
3. Odontopediatría
4. Ortodoncia
5. Estética Dental
6. Blanqueamiento Dental
7. Endodoncia
8. Prótesis Dentales
9. Implantes Dentales
10. Cirugías Dentales / Maxilofaciales

---

## Guía de Componentes

### Navegación
- **`Topbar`** — barra delgada azul con dirección, WhatsApp, email, redes sociales (oculta en móvil)
- **`Navbar`** — navbar blanca sticky; logo izquierda, links derecha, ícono WhatsApp verde
  - Links: Inicio · Servicios (dropdown) · Sobre Nosotros · Blog · FAQ · Contáctenos
  - Móvil: cajón offcanvas deslizante

### Hero
- Clase CSS `hero-section` → fondo claro `#F7FAFB`
- `hero-image-wrap` → contenedor con forma de arco (CSS border-radius trick)
- "Odonto" en `--iom-gold`, subtítulo en `--iom-text-secondary`
- Badges de confianza: Rating 4.8 + "Desde 2021"

### InfoBar
- Fondo: `--iom-gold` (`#D2C492`)
- 3 columnas: Contacto · Horario · Botón "Envía un mensaje"
- **Horario:** No confirmado 100% — usar "Atención con cita previa" si el cliente no confirma

### Botones

| Clase              | Estilo                                     |
|--------------------|---------------------------------------------|
| `.btn-iom-dark`    | Sólido `#12445C`, texto blanco, pill radius |
| `.btn-iom-outline` | Outlined `#12445C`, rellena en hover        |
| `.btn-iom-gold`    | Sólido `#F2B880`, texto oscuro              |

---

## Data Layer (`src/data.js`)

Todo el contenido de la página se maneja desde este archivo:

| Export           | Usado en                              |
|------------------|---------------------------------------|
| `services`       | Dropdown Navbar, Footer               |
| `usefulLinks`    | Footer navegación                     |
| `aboutFeatures`  | Services (sección about)              |
| `specialties`    | Grid de especialidades                |
| `stats`          | Barra de estadísticas                 |
| `whyUs`          | DoctorSection (Por qué elegirnos)     |
| `faqItems`       | InnovationSection (acordeón FAQ)      |
| `blogPosts`      | BlogSection cards                     |

Para actualizar contenido (teléfonos, horarios, textos), editar solo `src/data.js`.
El contacto hardcodeado está en `ContactSection.jsx` y `Topbar.jsx`.

---

## Arquitectura de Estilos

```
src/
├── styles/
│   ├── style.css          ← Paleta de marca + todos los estilos custom
│   └── responsive.css     ← Overrides de media queries
└── assets/scss/           ← Personalización de Bootstrap SCSS
    ├── _variables.scss     ← Overrides de variables Bootstrap
    ├── _theme-colors.scss  ← Tokens de color
    └── style.scss          ← Entry point SCSS (importa Bootstrap)
```

**Importante:** Los estilos de marca viven en `src/styles/style.css`.  
Las propiedades CSS (`--iom-*`) están definidas en `:root` al inicio de ese archivo.  
**No** agregar colores hardcodeados — siempre referenciar una variable CSS.

---

## Desarrollo

```bash
# Instalar dependencias (requiere Node.js >= 18.17.0)
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Compilar SCSS manualmente (si es necesario)
npm run sass
```

---

## Convenciones Clave

1. **Solo español** — todo texto, labels, alt tags y aria-labels en español (es-PA).
2. **Sin colores hardcodeados** — usar variables CSS (`var(--iom-primary)`) o clases utilitarias.
3. **Imágenes** — actualmente usando placeholders de `/public/img/`. Reemplazar con fotos reales de Odonto Panamá antes del lanzamiento.
4. **Fuentes** — cargadas vía Google Fonts en `pages/_document.jsx`. No agregar pesos de fuente extra.
5. **Iconos** — usar Unicons (`uil-*` classes). Listado: [iconscout.com/unicons](https://iconscout.com/unicons)
6. **Responsive** — breakpoints Bootstrap. Mobile-first. Probar en `sm`, `md`, `lg`.
7. **Accesibilidad** — todos los elementos interactivos necesitan `aria-label` en español.
8. **Links WhatsApp** — usar formato `https://wa.me/50760544016` (sin guiones ni espacios en el número).

---

## Horario (pendiente confirmar con cliente)

Las fuentes públicas no coinciden:
- Panamá Emprende: Lunes–Viernes 8am–4pm
- Waze: Lunes–Sábado 9am–5pm
- OfertaSimple: Lunes–Viernes 9am–6pm, Sábado 9am–1pm

**En producción**, confirmar directamente con Odonto Panamá antes de publicar horario fijo.
Fallback recomendado: *"Atención con cita previa. Escríbenos por WhatsApp para confirmar disponibilidad."*

---

## SEO Recomendado

**Title:** `Odonto Panamá | Clínica Dental en Obarrio, Ciudad de Panamá`

**Meta description:** `Clínica dental en Obarrio, Panamá. Odontología general, limpieza dental, odontopediatría, ortodoncia, estética dental, endodoncia, prótesis, implantes y cirugías. Agenda por WhatsApp.`

**Keywords:** clínica dental Obarrio, dentista en Panamá, Odonto Panamá, ortodoncia, blanqueamiento dental, implantes dentales, endodoncia, odontopediatría, dentista cerca Hotel Sortis, dentista Vía Argentina

---

## TODO Antes del Lanzamiento

- [ ] Reemplazar imágenes placeholder (`hero-bg.webp`, `best-dental-hospital*.webp`) con fotos reales de Odonto Panamá
- [ ] Reemplazar logos (`/public/img/logo.webp`, `logo-light.webp`) con el logo oficial
- [ ] Confirmar horario real con el cliente y actualizar `InfoBar.jsx` y `Topbar.jsx`
- [ ] Actualizar URL del mapa Google Maps en `ContactSection.jsx` con coordenadas exactas de Obarrio
- [ ] Confirmar número de teléfono secundario (Waze: 832-0997)
- [ ] Confirmar email `miodontopanama@gmail.com` con el cliente antes de publicar
- [ ] Configurar formulario de contacto real (actualmente dirige a `#contacto`)
- [ ] Agregar meta OG image en `pages/_app.jsx`
- [ ] Configurar `site.webmanifest` con colores y nombre de la app
- [ ] Agregar Google Analytics o proveedor de analíticas preferido
- [ ] Verificar y actualizar calificación 4.8 Google Reviews directamente en Google Business
