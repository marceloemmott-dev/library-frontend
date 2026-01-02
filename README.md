# 📚 Library Frontend

Frontend SPA (Single Page Application) para el sistema de gestión de biblioteca. Este proyecto consume la [Library API Backend](https://github.com/marceloemmott-dev/library-backend) desarrollada con NestJS.

---

## 🎯 Objetivo del Proyecto

Este proyecto forma parte de un portfolio fullstack que demuestra la capacidad de:
- Construir aplicaciones frontend modernas con React y TypeScript
- Consumir APIs RESTful
- Implementar patrones de diseño y buenas prácticas de desarrollo
- Crear interfaces de usuario intuitivas y responsivas

---

## 🚀 Características Implementadas

### ✅ Módulo de Categorías
- [x] Listar todas las categorías
- [x] Crear nuevas categorías
- [x] Manejo de estados de carga (loading)
- [x] Manejo de errores

### 🔜 Próximas Funcionalidades
- [ ] CRUD completo de categorías (editar, eliminar)
- [ ] Módulo de Libros
- [ ] Módulo de Autores
- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] Estilos con Tailwind CSS
- [ ] Tema oscuro/claro
- [ ] Responsive design

---

## 🛠️ Tecnologías

| Tecnología | Descripción |
|------------|-------------|
| **React 19** | Biblioteca para construir interfaces de usuario |
| **TypeScript** | Superset de JavaScript con tipado estático |
| **Vite** | Build tool y dev server ultra rápido |
| **ESLint** | Linter para mantener código limpio |
| **Fetch API** | Cliente HTTP nativo para consumir la API |

---

## 📁 Estructura del Proyecto

```
library-frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── api/             # Servicios de conexión a la API
│   │   ├── config.ts    # Configuración (URL base)
│   │   ├── categories.ts # Funciones para el CRUD de categorías
│   │   └── types.ts     # Tipos TypeScript
│   │
│   ├── components/      # Componentes reutilizables (próximamente)
│   │
│   ├── pages/           # Páginas de la aplicación
│   │   └── CategoriesPage.tsx
│   │
│   ├── App.tsx          # Componente raíz
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
│
├── .env.example         # Ejemplo de variables de entorno
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración TypeScript
└── vite.config.ts       # Configuración de Vite
```

---

## ⚡ Inicio Rápido

### Prerrequisitos
- Node.js >= 18
- npm o yarn
- Backend API corriendo en `http://localhost:4001`

### Instalación

```bash
# 1. Clonar el repositorio
git clone git@github.com:marceloemmott-dev/library-frontend.git
cd library-frontend

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con la URL del backend

# 4. Iniciar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🔧 Variables de Entorno

Crear un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=http://localhost:4001
```

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL base del backend API | `http://localhost:4001` |

---

## 📜 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview

# Ejecutar linter
npm run lint
```

---

## 🔗 Integración con el Backend

Este frontend está diseñado para funcionar con [Library API Backend](https://github.com/marceloemmott-dev/library-backend).

### Endpoints Consumidos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/categories` | Obtener todas las categorías |
| `POST` | `/categories` | Crear una nueva categoría |

### Ejemplo de Respuesta API

```json
{
  "message": "Categories found",
  "data": [
    {
      "id": 1,
      "name": "Ficción"
    },
    {
      "id": 2,
      "name": "Ciencia"
    }
  ]
}
```

---

## 🗺️ Roadmap

### Fase 1 - MVP ✅
- [x] Setup inicial con Vite + React + TypeScript
- [x] Conexión con API backend
- [x] CRUD de categorías (listar, crear)

### Fase 2 - Estilos (En progreso)
- [ ] Integrar Tailwind CSS
- [ ] Diseño responsivo
- [ ] Sistema de temas (dark/light mode)
- [ ] Componentes UI reutilizables

### Fase 3 - Funcionalidades Completas
- [ ] CRUD completo de categorías
- [ ] Módulo de libros
- [ ] Módulo de autores
- [ ] Búsqueda y filtros

### Fase 4 - Autenticación
- [ ] Login/Logout
- [ ] Registro de usuarios
- [ ] Rutas protegidas
- [ ] Manejo de sesiones con JWT

### Fase 5 - Mejoras UX
- [ ] Notificaciones toast
- [ ] Confirmaciones de acciones
- [ ] Paginación
- [ ] Loading skeletons

---

## 🧑‍💻 Desarrollo

### Agregar nuevo módulo

1. Crear tipos en `src/api/types.ts`
2. Crear funciones de API en `src/api/[module].ts`
3. Crear página en `src/pages/[Module]Page.tsx`
4. Agregar ruta en `App.tsx`

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👤 Autor

**Marcelo Emmott**
- GitHub: [@marceloemmott-dev](https://github.com/marceloemmott-dev)

---

## 🔗 Enlaces Relacionados

- [Library Backend API](https://github.com/marceloemmott-dev/library-backend) - API RESTful con NestJS
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
