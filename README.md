# README - Proyecto Next.js + Django REST Framework

## Descripción
Este proyecto consiste en un frontend desarrollado con Next.js y un backend construido con Django REST Framework. A continuación, encontrarás las instrucciones para configurar y ejecutar el proyecto localmente.

## Requisitos previos
- Node.js (v16 o superior)
- Python (3.8 o superior)
- pip (gestor de paquetes de Python)


## Configuración inicial

### 1. Clonar el repositorio


### 2. Configurar el backend (Django)

#### Instalar dependencias
```bash
cd backend
python -m venv env  # Crear entorno virtual
source env/bin/activate  # Activar entorno virtual (Linux/Mac)
# En Windows: env\Scripts\activate

pip install -r requirements.txt


#### Migraciones y superusuario
```bash
python manage.py migrate
python manage.py createsuperuser
```

#### Ejecutar el servidor de desarrollo
```bash
python manage.py runserver
```
El backend estará disponible en: http://localhost:8000

### 3. Configurar el frontend (Next.js)

#### Instalar dependencias
```bash
cd ../client
npm install
```

#### Configurar variables de entorno
Modifical si es necessario el archivo Links.ts ya que la URL para las peticiones se encuentra ahi:
```
export const API_URL = 'http://localhost:8000/'

```

#### Ejecutar el servidor de desarrollo
```bash
npm run dev
```
El frontend estará disponible en: http://localhost:3000

## Estructura del proyecto
```
/
├── serer/          # Código Django
│   ├── env/         # Entorno virtual (ignorar en git)
│   ├── manage.py     # Script de administración
│   └── ...           # Resto de archivos Django
├── client/         # Código Next.js
│   ├── node_modules/ # Dependencias (ignorar en git)
│   ├── public/       # Archivos estáticos
│   └── ...           # Resto de archivos Next.js
└── README.md         # Este archivo
```

## Comandos útiles

### Backend
- `python manage.py runserver`: Inicia el servidor de desarrollo
- `python manage.py makemigrations`: Crear migraciones
- `python manage.py migrate`: Aplicar migraciones

### Frontend
- `npm run dev`: Inicia el servidor de desarrollo

## Problemas comunes

Si tienes problemas con CORS:
1. Asegúrate de que `corsheaders` está en tus dependencias
2. Verifica que en `server/settings.py` tengas:
   ```python
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:3000",
   ]
   ```
   o tambien
 ```python
   CORS_ORIGIN_ALLOW_ALL = True
 ```




