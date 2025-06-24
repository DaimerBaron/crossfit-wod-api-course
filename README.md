
# 🏋️‍♂️ CrossFit WOD API

Una API REST construida con **Node.js** y **Express** para gestionar rutinas de entrenamiento (_Workouts_) de **CrossFit**.  
Los datos se almacenan localmente en un archivo JSON, ideal para pruebas y desarrollo ligero.


## 📦 Características

- 🔄 **CRUD completo** para `Workouts`
- 👥 Gestión de **miembros** y **records** de entrenamiento
- 📁 Organización clara por **controladores**, **servicios**, **rutas** y **utilidades**
- 🛠️ Estructura mantenible y preparada para escalar
- 🌐 Endpoints agrupados bajo: `/api/v1/workouts`

## 📂 Estructura del proyecto

```
📦 crossfit-wod-api/
│
├── 📂 src/
│   ├── 📂 controllers/
│   │   └── 📄 workout.controller.js
│   ├── 📂 database/
│   │   ├── 📄 db.json
│   │   ├── 📄 Workout.js
│   │   └── 📄 utils.js
│   ├── 📂 services/
│   │   └── 📄 workout.service.js
│   ├── 📂 v1/
│   │   └── 📂 routes/
│   │       └── 📄 workout.routes.js
│   └── 📄 index.js
│
├── 📄 package.json
└── 📄 README.md
```

- **controllers/**: Controladores de la lógica de negocio.
- **database/**: Base de datos local (JSON) y utilidades de acceso.
- **services/**: Servicios con la lógica principal de la aplicación.
- **v1/routes/**: Definición de rutas de la API.
- **index.js**: Punto de entrada de la aplicación.

## 📋 Endpoints principales

| Método | Ruta                      | Descripción                  |
|--------|---------------------------|------------------------------|
| GET    | `/api/v1/workouts`        | Obtener todos los workouts   |
| GET    | `/api/v1/workouts/:id`    | Obtener un workout por ID    |
| POST   | `/api/v1/workouts`        | Crear un nuevo workout       |
| PUT    | `/api/v1/workouts/:id`    | Actualizar un workout        |
| DELETE | `/api/v1/workouts/:id`    | Eliminar un workout          |


## 🧪 Datos simulados

Los datos se almacenan en un archivo JSON ubicado en:

## 🚀 Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/crossfit-wod-api-course.git

# Instalar dependencias
cd crossfit-wod-api-course
npm install

# Ejecutar en modo desarrollo
npm run dev


