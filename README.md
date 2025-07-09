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


