# API Tasks

Esta es una API de Tasks desarrollada en Node.js con TypeScript. Utiliza Express para el enrutamiento, Mongoose para la integración con MongoDB, y JWT para la autenticación.

## Requisitos previos

- Node.js instalado en tu máquina
- MongoDB instalado y en ejecución

## Instalación

1. Clona este repositorio: `git clone https://github.com/joanccresources/atix-todo-list-backend.git`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias (ver sección Variables de Entorno)
4. Ejecuta el servidor en modo de desarrollo: `npm run dev`

## Postman
[Este link](https://www.postman.com/interstellar-spaceship-130611/workspace/atix-todo-list-api)

## Uso

### Endpoints

#### USER

- `POST /api/v1/user/new`: Registra un nuevo usuario.
  - Body raw (json):
    ```json
    {
        "name": "Test10",
        "email": "test10@test.com",
        "password": "Test1234#"
    }
    ```

#### AUTH

- `POST /api/v1/auth`: Endpoint para iniciar sesión.
  - Body raw (json):
    ```json
    {
        "email": "test01@test.com",
        "password": "Test1234#"
    }
    ```

- `GET /api/v1/auth/renew`: Endpoint para renovar el token.
  - Headers:
    - `x-token`

#### TASKS

- `POST /api/v1/task/new`: Crea una nueva tarea.
  - Body raw (json):
    ```json
    {
        "text": "Tarea 01 by Test01 :)",
        "checked": true
    }
    ```
  - Headers:
    - `x-token`

- `GET /api/v1/task`: Obtiene todas las tareas del usuario autenticado.
  - Headers:
    - `x-token`

- `PUT /api/v1/task/:id`: Actualiza una tarea existente.
  - Body raw (json):
    ```json
    {
        "text": "Tarea 001 by Test01 :D",
        "checked": false
    }
    ```
  - Headers:
    - `x-token`

- `DELETE /api/v1/task/:id`: Elimina una tarea existente.
  - Headers:
    - `x-token`



### Variables de Entorno

- `MONGO_URI`: URI de conexión a la base de datos MongoDB.
- `JWT_SECRET`: Secreto para la generación de tokens JWT.

---