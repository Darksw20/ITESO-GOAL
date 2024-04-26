# ITESO-GOAL

## Objetivo

Realizar el diseño y la preparación del API del proyecto integrador, implementando una estructura MVC.

# Requerimientos

Instalación DOCKER
Agregar .env

1. **Crear archivo .env**: En la raíz del proyecto, crea un archivo llamado `.env`. En este archivo, define las siguientes variables de entorno:

   ```plaintext
   NODE_ENV=development
   PORT=8080
   JWT_SECRET=secret

   DB_HOST=mysql
   DB_PORT=3306
   DB_NAME=goal_db
   DB_USER=root
   DB_PASSWORD=rootpass
   ```

   Estas variables se utilizan para configurar el puerto en el que se ejecutará el servidor, modo dev o produccion, y configuración de docker.

# Inicializar BD

- Instalar dependencias

```bash
npm i
```

- Para el sistema ejecutar:

```bash
docker-compose --profile app build // Este comando crear el contenedor y requirimeintos para iniciar la BD
docker-compose --profile app up
```

# Pruebas

- Una vez compilada la app

```bash
docker-compose build // Este comando crear el contenedor y requirimeintos para iniciar la BD
docker-compose --profile test up
```

# Coverage

- Una vez compilada la app

```bash
docker-compose build // Este comando crear el contenedor y requirimeintos para iniciar la BD
docker-compose --profile coverage up
```
