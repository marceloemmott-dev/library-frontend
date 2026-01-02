<div align="center">

# 📚 Library Frontend

### Sistema de Gestión de Biblioteca - Frontend SPA

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

*Aplicación web moderna para la gestión integral de una biblioteca digital*

[🚀 Inicio Rápido](#-inicio-rápido) •
[📖 Características](#-características-implementadas) •
[🏗️ Arquitectura](#️-arquitectura) •
[🗺️ Roadmap](#️-roadmap)

</div>

---

## 📋 Tabla de Contenidos

- [📋 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Implementadas](#-características-implementadas)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura](#️-arquitectura)
- [🚀 Inicio Rápido](#-inicio-rápido)
- [🔧 Variables de Entorno](#-variables-de-entorno)
- [📜 Scripts Disponibles](#-scripts-disponibles)
- [🔗 Integración con Backend](#-integración-con-backend)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contribuir](#-contribuir)
- [👤 Autor](#-autor)
- [📄 Licencia](#-licencia)

---

## 📋 Descripción del Proyecto

**Library Frontend** es una aplicación SPA (Single Page Application) moderna y escalable diseñada para consumir la [Library Backend API](https://github.com/marceloemmott-dev/library-frontend). Este proyecto forma parte de un **portfolio fullstack** que demuestra competencias en desarrollo web moderno.

### 🎯 Objetivo del Proyecto

Este proyecto demuestra la capacidad de:

| Competencia | Descripción |
|-------------|-------------|
| 🔄 **Consumo de APIs** | Integración con APIs RESTful usando Fetch API |
| ⚛️ **React Moderno** | Uso de Hooks, componentes funcionales y estado |
| 📘 **TypeScript** | Tipado estático para mayor robustez |
| 🏗️ **Arquitectura** | Estructura de carpetas escalable y mantenible |
| 🎨 **UI/UX** | Interfaces intuitivas y responsivas (próximamente) |

---

## ✨ Características Implementadas

### ✅ Módulo de Categorías
- [x] Listar todas las categorías desde la API
- [x] Crear nuevas categorías
- [x] Manejo de estados de carga (loading)
- [x] Manejo y visualización de errores
- [x] Actualización automática de la lista tras crear

### 🔜 Próximas Funcionalidades
- [ ] CRUD completo de categorías (editar, eliminar)
- [ ] Módulo de Libros
- [ ] Módulo de Autores
- [ ] Autenticación de usuarios (JWT)
- [ ] Panel de administración
- [ ] Estilos con Tailwind CSS
- [ ] Tema oscuro/claro
- [ ] Responsive design completo

---

## 🛠️ Stack Tecnológico

<table>
<tr>
<td align="center" width="140">

**UI Library**

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)

React 19

</td>
<td align="center" width="140">

**Lenguaje**

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

TypeScript 5.9

</td>
<td align="center" width="140">

**Build Tool**

![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)

Vite 7.2

</td>
<td align="center" width="140">

**Linting**

![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

ESLint 9

</td>
</tr>
<tr>
<td align="center" width="140">

**HTTP Client**

![Fetch](https://img.shields.io/badge/-Fetch_API-FF6B6B?style=flat-square)

Nativo

</td>
<td align="center" width="140">

**Estilos**

![CSS](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

CSS Modules

</td>
<td align="center" width="140">

**Routing**

![Router](https://img.shields.io/badge/-Soon-gray?style=flat-square)

Próximamente

</td>
<td align="center" width="140">

**State**

![State](https://img.shields.io/badge/-React_Hooks-61DAFB?style=flat-square&logo=react&logoColor=black)

useState/useEffect

</td>
</tr>
</table>

---

## 🏗️ Arquitectura

El proyecto sigue una **arquitectura modular** con separación clara de responsabilidades:

```
📦 library-frontend
├── 📂 public                    # Archivos estáticos
│   └── vite.svg
├── 📂 src
│   ├── 📂 api                   # 🔌 Capa de servicios API
│   │   ├── config.ts            # Configuración (URL base)
│   │   ├── categories.ts        # Funciones CRUD de categorías
│   │   └── types.ts             # Tipos TypeScript compartidos
│   │
│   ├── 📂 components            # 🧩 Componentes reutilizables
│   │   └── (próximamente)
│   │
│   ├── 📂 pages                 # 📄 Páginas de la aplicación
│   │   └── CategoriesPage.tsx   # Página de categorías
│   │
│   ├── App.tsx                  # Componente raíz
│   ├── main.tsx                 # Punto de entrada React
│   └── index.css                # Estilos globales
│
├── ⚙️ .env.example              # Ejemplo de variables de entorno
├── ⚙️ vite.config.ts            # Configuración de Vite
├── ⚙️ tsconfig.json             # Configuración TypeScript
├── 📄 package.json              # Dependencias y scripts
└── 📄 README.md                 # Este archivo
```

### 💡 Patrón de Arquitectura

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                           FLUJO DE LA APLICACIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║   📱 Componente (Page)                                                        ║
║         │                                                                     ║
║         ▼                                                                     ║
║   🔌 API Service (categories.ts)  →  Llamadas HTTP con Fetch                   ║
║         │                                                                     ║
║         ▼                                                                     ║
║   🌐 Backend API (NestJS)  →  http://localhost:4001                          ║
║         │                                                                     ║
║         ▼                                                                     ║
║   📦 Respuesta JSON  →  Actualiza el estado con useState                     ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** >= 18.x
- **npm** >= 9.x
- **Backend API** corriendo en `http://localhost:4001`

### Paso 1: Clonar el repositorio

```bash
git clone git@github.com:marceloemmott-dev/library-frontend.git
cd library-frontend
```

### Paso 2: Instalar dependencias

```bash
npm install
```

### Paso 3: Configurar variables de entorno

```bash
cp .env.example .env
```

Edita el archivo `.env`:

```env
VITE_API_URL=http://localhost:4001
```

### Paso 4: Iniciar en modo desarrollo

```bash
npm run dev
```

### ✅ Verificar la instalación

Una vez iniciada la aplicación, deberías ver:

```
  VITE v7.2.4  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🔧 Variables de Entorno

Crear un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=http://localhost:4001
```

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `VITE_API_URL` | URL base del Backend API | `http://localhost:4001` |

> ⚠️ **Importante**: Las variables de Vite deben comenzar con `VITE_` para ser accesibles en el código.

---

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot-reload |
| `npm run build` | Compila para producción en `/dist` |
| `npm run preview` | Vista previa del build de producción |
| `npm run lint` | Ejecuta ESLint para verificar código |

---

## 🔗 Integración con Backend

Este frontend está diseñado para funcionar con [Library Backend API](https://github.com/marceloemmott-dev/library-backend).

### Endpoints Consumidos Actualmente

| Método | Endpoint | Descripción | Estado |
|--------|----------|-------------|--------|
| `GET` | `/categories` | Obtener todas las categorías | ✅ |
| `POST` | `/categories` | Crear nueva categoría | ✅ |
| `GET` | `/categories/:id` | Obtener categoría por ID | 🔜 |
| `PATCH` | `/categories/:id` | Actualizar categoría | 🔜 |
| `DELETE` | `/categories/:id` | Eliminar categoría | 🔜 |

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

### Flujo de Datos

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   👤 User    │────▶│  ⚛️ React    │────▶│  🌐 Backend  │
│   (Browser)  │     │  Component   │     │  (NestJS)    │
└──────────────┘     └──────────────┘     └──────────────┘
       ▲                                         │
       │                                         │
       └─────────────────────────────────────────┘
                     📤 JSON Response
```

---

## 🗺️ Roadmap

### Fase 1 - MVP ✅
- [x] Setup inicial con Vite + React + TypeScript
- [x] Estructura de carpetas escalable
- [x] Conexión con Backend API
- [x] CRUD parcial de categorías (listar, crear)
- [x] Manejo de estados y errores

### Fase 2 - Estilos (En Progreso) 🔄
- [ ] Integrar Tailwind CSS
- [ ] Sistema de diseño con tokens
- [ ] Componentes UI base (Button, Input, Card)
- [ ] Diseño responsivo
- [ ] Tema oscuro/claro

### Fase 3 - Funcionalidades Completas
- [ ] CRUD completo de categorías (editar, eliminar)
- [ ] Módulo de Autores
- [ ] Módulo de Libros
- [ ] Búsqueda y filtros
- [ ] React Router para navegación

### Fase 4 - Autenticación
- [ ] Login / Logout
- [ ] Registro de usuarios
- [ ] Rutas protegidas
- [ ] Manejo de sesiones con JWT
- [ ] Context API para estado global

### Fase 5 - Mejoras UX
- [ ] Notificaciones toast
- [ ] Confirmaciones de acciones (modales)
- [ ] Paginación
- [ ] Loading skeletons
- [ ] Animaciones y transiciones

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. Crea tu rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Convención de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/):

| Tipo | Descripción |
|------|-------------|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `docs` | Cambios en documentación |
| `style` | Cambios de formato (no afectan lógica) |
| `refactor` | Refactorización de código |
| `test` | Agregar o modificar tests |

---

## 👤 Autor

<div align="center">

Desarrollado con ❤️ como proyecto de portafolio

**Marcelo Emmott Sanchez**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marceloemmott-dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marcelo-emmott-sanchez-75475939b)

</div>

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 🔗 Enlaces Relacionados

| Recurso | Descripción |
|---------|-------------|
| [Library Backend API](https://github.com/marceloemmott-dev/library-backend) | API RESTful con NestJS |
| [Vite Documentation](https://vite.dev/) | Build tool |
| [React Documentation](https://react.dev/) | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | Lenguaje |

---

<div align="center">

⭐ **Si este proyecto te fue útil, considera darle una estrella en GitHub** ⭐

</div>
