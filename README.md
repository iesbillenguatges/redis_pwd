# Redis funcionant en PWD
Anem a crear un projecte que farà servir Node.js com a backend i html+js com a frontend. Tenim aquesta estructura:

```
project/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
└── frontend/
    └── index.html
```
Com podeu veure tenim un docker-compose per a definir i gestionar aplicacions multi-contenidor de Docker de forma molt fàcil.
Dins del backend tenim un Dockerfile que crea un contenidor d'Alpine i hi instal·la Node.js
## Anem per feina
Anem al PWD (https://labs.play-with-docker.com), + ADD NEW INSTANCE i fem
```
$ apk add nano git
$ git clone *** el present repositori ***
$ cd redis_pwd
$ docker-compose up --build
```
Comproveu el port 3000 que funciona el backend, si es així (missatge -> API d'usuaris operativa. Fes GET a /usuaris per veure dades), copieu aquesta (la del port 3000) i editeu el index.html del frontend. Heu de canvia *** URL del 3000 *** per la copiada en els 3 llocs on apareix.

Ctrl+c per a parar el server i docker-compose up --build de nou i:
### A funcionar....!!!
