# crossfit-wod-api-curse
API REST básica para gestionar rutinas de CrossFit, desarrollada con Node.js y Express. Permite crear, listar y almacenar workouts usando una base de datos local en JSON. Ideal para practicar conceptos CRUD y estructura de proyectos backend.

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
/src
├── controllers/    # Lógica de controladores
├── routes/         # Definición de rutas
├── services/       # Lógica de negocio
├── database/       # JSON con datos simulados
└── utils/          # Utilidades generales

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


