# Delicias del Tandil - Catering de Eventos

Aplicación web moderna desarrollada con **Angular 20** para el servicio de catering "Delicias del Tandil". Diseño inspirado en Squarespace, totalmente responsivo y optimizado para eventos.

## 🚀 Características

- ✨ Diseño moderno y elegante
- 📱 Totalmente responsivo (Mobile-first)
- ⚡ Rendimiento optimizado
- 🎨 Animaciones fluidas y atractivas
- 🧩 Arquitectura modular y escalable
- 🔧 Componentes standalone de Angular 20
- 💎 Código limpio y bien documentado

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── core/                    # Módulo core (singleton services, guards, interceptors)
│   │   └── layout/
│   │       ├── header/          # Componente de navegación
│   │       └── footer/          # Componente de pie de página
│   │
│   ├── features/                # Módulos de funcionalidades
│   │   ├── home/                # Página principal
│   │   │   └── components/
│   │   │       ├── hero/        # Sección hero
│   │   │       ├── stats/       # Estadísticas
│   │   │       ├── services/    # Grid de servicios
│   │   │       ├── features/    # Características
│   │   │       ├── gallery/     # Galería de eventos
│   │   │       ├── testimonials/# Testimonios
│   │   │       └── cta/         # Call to action
│   │   │
│   │   ├── services/            # Página de servicios detallados
│   │   └── contact/             # Página de contacto y formulario
│   │
│   ├── shared/                  # Componentes, directivas y pipes compartidos
│   │
│   ├── app.component.ts         # Componente raíz
│   ├── app.config.ts            # Configuración de la aplicación
│   └── app.routes.ts            # Configuración de rutas
│
├── environments/                # Variables de entorno
├── styles.scss                  # Estilos globales
└── index.html                   # HTML principal
```

## 📦 Tecnologías Utilizadas

- **Angular 20** - Framework principal
- **TypeScript 5.6** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS 7.8** - Programación reactiva
- **Standalone Components** - Arquitectura moderna de Angular
- **Signals** - Sistema de reactividad de Angular

## 🎨 Secciones de la Página

### Página Principal (Home)
- **Hero**: Sección principal con título y llamados a la acción
- **Stats**: Estadísticas de la empresa
- **Services**: Grid de servicios ofrecidos
- **Features**: Características y ventajas
- **Gallery**: Galería de eventos realizados
- **Testimonials**: Testimonios de clientes
- **CTA**: Llamado final a la acción

### Página de Servicios
- Detalle completo de cada servicio
- Características específicas
- Formularios de cotización

### Página de Contacto
- Formulario de contacto reactivo
- Información de contacto
- Validación de campos

## 🚦 Instalación y Uso

### Prerequisitos
```bash
Node.js >= 18.19.0
npm >= 10.0.0
```

### Instalación
```bash
# Clonar el repositorio o navegar a la carpeta
cd deliciasdeltandil

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

### Compilación para Producción
```bash
# Construir para producción
npm run build

# Los archivos compilados estarán en dist/
```

### Testing
```bash
# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test -- --code-coverage
```

### Linting
```bash
# Ejecutar linter
npm run lint
```

## 🎯 Variables de Entorno

Edita `src/environments/environment.ts` para configurar:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  companyName: 'Delicias del Tandil',
  contactEmail: 'contacto@deliciasdeltandil.com',
  contactPhone: '+54 9 11 1234-5678'
};
```

## 🎨 Personalización de Estilos

Los colores y estilos principales se configuran en `src/styles.scss`:

```scss
:root {
  --primary-color: #ea4c89;
  --secondary-color: #2c2c2c;
  --accent-color: #ff6b9d;
  --background-light: #f8f9fa;
  --background-dark: #1a1a1a;
}
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Mobile (< 768px)
- 📊 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🔐 Mejores Prácticas Implementadas

- ✅ Componentes standalone
- ✅ Lazy loading de rutas
- ✅ Signals para state management
- ✅ OnPush change detection
- ✅ Path aliases para imports limpios
- ✅ Strict mode de TypeScript
- ✅ Arquitectura modular
- ✅ Separación de responsabilidades

## 🚀 Próximas Mejoras

- [ ] Integración con backend (API REST)
- [ ] Sistema de autenticación
- [ ] Panel de administración
- [ ] Galería de imágenes dinámica
- [ ] Sistema de reservas online
- [ ] Integración con WhatsApp
- [ ] Blog de recetas y tips
- [ ] PWA (Progressive Web App)
- [ ] Modo oscuro
- [ ] Múltiples idiomas (i18n)

## 📄 Licencia

Este proyecto es privado y pertenece a Delicias del Tandil.

## 👥 Contacto

Para consultas sobre el proyecto:
- Email: contacto@deliciasdeltandil.com
- Teléfono: +54 9 11 1234-5678
- Ubicación: Tandil, Buenos Aires, Argentina

---

Desarrollado con ❤️ para Delicias del Tandil
