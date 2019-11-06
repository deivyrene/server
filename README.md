# Server

Endpoint para registro de coordenadas y descripción en MONGODB. Los endpoint son los siguientes:

  - http://localhost:1234/coordinates/create
  - http://localhost:1234/coordinates/listAll
  - http://localhost:1234/coordinates/search
  - http://localhost:1234/coordinates/:id/delete

El servidor se desplego en EC2 de AWS, la url con el puerto 1234:

http://ec2-3-83-64-115.compute-1.amazonaws.com:1234/coordinates/listAll

### Tecnología 

El servicio maneja las siguientes tecnologias:

* [node.js]
* [Express]
* [Socket.IO]
* [MongoDB]
* [Redis]
* [EC2] -> Servicio AWS

### Instalacion

Se requiere instalar [Node.js](https://nodejs.org/) v10+ to run.

Instalar Redis y clonar e instalar las dependencias, para iniciar el servidor.

```sh
$ sudo apt-get install redis-server
$ sudo systemctl enable redis-server.service
$ git clone https://github.com/deivyrene/server.git
$ cd server
$ npm install -d
$ node app.js
```

Listo!! Ya tu servidor se ha iniciado el el puerto :1234

Puedes hacer pruebas de los endpoint usando Postman.

License
----

MIT


**Free Software, Hell Yeah!**


