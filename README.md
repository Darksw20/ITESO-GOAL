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
   DB_HOST=192.168.64.1
   DB_PORT=3306
   DB_NAME=goal_db
   DB_USER=root
   DB_PASSWORD=rootpass
   ```
   Estas variables se utilizan para configurar el puerto en el que se ejecutará el servidor, modo dev o produccion, y configuración de docker.

# Inicializar BD
- run 
```bash
npm i
```

- Para configurar IP (Correr ipconfig y copiar Dirección IPv4)
Adaptador de Ethernet Ethernet:

   Sufijo DNS específico para la conexión. . : domain_not_set.invalid
   Dirección IPv6 . . . . . . . . . . : 
   Dirección IPv6 temporal. . . . . . : 
   Vínculo: dirección IPv6 local. . . : 
   Dirección IPv4. . . . . . . . . . . . . . : 192.168

- Pegar IP en .env (DB_HOST=)

(Esto se configurara automaticamente en un futuro)
- En archivo (src/config/config.json) remplazar campos "host": con IP copiada

- Ejecutar para levantar db(se requiere docker abierto e instalado):
```bash
docker-compose up --build
```
Este comando crear el contenedor y requirimeintos para iniciar la BD

# Pruebas
- Se requiere una aplicacíon de despliegue de BD (Docker u otros similares)

# Rutas
La ruta localhost:PUERTO/api/healthcheck crea un nuevo usuario en la tabla USER