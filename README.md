# ITESO-GOAL
## Objetivo
Realizar el dise�o y la preparaci�n del API del proyecto integrador, implementando una estructura MVC.

# Requerimientos
Instalaci�n DOCKER
Agregar .env

# Inicializar BD
- run 
```bash
npm i
```

- Para configurar IP (Correr ipconfig y copiar Direcci�n IPv4)
Adaptador de Ethernet Ethernet:

   Sufijo DNS espec�fico para la conexi�n. . : domain_not_set.invalid
   Direcci�n IPv6 . . . . . . . . . . : 
   Direcci�n IPv6 temporal. . . . . . : 
   V�nculo: direcci�n IPv6 local. . . : 
   Direcci�n IPv4. . . . . . . . . . . . . . : 192.168

- Pegar IP en .env (DB_HOST=)

(Esto se configurara automaticamente en un futuro)
- En archivo (src/config/config.json) remplazar campos "host": con IP copiada

- Ejecutar para levantar db(se requiere docker abierto e instalado):
```bash
docker-compose up --build
```
Este comando crear el contenedor y requirimeintos para iniciar la BD

# Pruebas
- Se requiere una aplicac�on de despliegue de BD (Docker u otros similares)

# Rutas
La ruta localhost:PUERTO/api/healthcheck crea un nuevo usuario en la tabla USER