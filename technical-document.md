## Technical Document

### Use with Docker Development Environments
...

### Application with a NodeJS(NestJS framework) backend and a MongoDB database
```
.
└── nest-mongo-starter/
    ├── src/
    ├── ...
    ├── Dockerfile
    └── docker-compose.yaml
```

[_docker-compose.yaml_](docker-compose.yaml)
```
services:
  server:
    container_name: nest
    restart: always
    build:
      context: nest
      args:
        NODE_PORT: 3000
    ports:
      - 3000:3000
    depends_on:
      - mongo
  mongo:
    container_name: mongo
    restart: always
```

# Feature intgrate with Frontend
### Application with a NodeJS(NestJS framework) backend, Frontend framework and a MongoDB database
Example of a project structure combining this Backend source with any Frontend source:
```
.
├── backend (nest + mongodb) ==> current source
│   ├── Dockerfile
│   ...
├── docker-compose.yaml
├── frontend (react | vue | angular | etc.)
    ├── ...
    └── Dockerfile
```

[_docker-compose.yaml_](docker-compose.yaml)
```
services:
  frontend:
    build:
      context: frontend
    ...
    ports:
      - 8000:8000
    ...
  server:
    container_name: server
    restart: always
    build:
      context: server
      args:
        NODE_PORT: 3000
    ports:
      - 3000:3000
    ...
    depends_on:
      - mongo
  mongo:
    container_name: mongo
    restart: always
    ...
```