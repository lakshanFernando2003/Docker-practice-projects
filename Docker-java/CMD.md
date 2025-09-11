# Docker Java Project - Command History

This document contains the command history for building and running Docker containers for the Java project.

## Building the Frontend Container

```console
lakshan  …\Docker practice projects\Docker-java\user_interface   main !+?   v22.12.0  ♥ 21:35  docker build -t java-frontend .
[+] Building 0.1s (1/1) FINISHED                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                0.0s
 => => transferring dockerfile: 476B                                0.0s
Dockerfile:24
--------------------
  22 |
  23 |
  24 | >>> user_interface\Dockerfile
  25 |
--------------------
ERROR: failed to build: failed to run Build function: dockerfile parse error on line 24: unknown instruction: user_interface\Dockerfile
```

```console
lakshan  …\Docker practice projects\Docker-java\user_interface   main !+?   v22.12.0  ♥ 21:35  docker build -t java-frontend .
[+] Building 20.1s (10/10) FINISHED                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                0.0s
 => => transferring dockerfile: 451B                                0.0s
 => [internal] load metadata for docker.io/library/node:22-alpine   0.5s
 => [internal] load .dockerignore                                   0.0s
 => => transferring context: 2B                                     0.0s
 => CACHED [1/5] FROM docker.io/library/node:22-alpine@sha256:d216  0.0s
 => => resolve docker.io/library/node:22-alpine@sha256:d2166de198f  0.0s
 => [internal] load build context                                   2.3s
 => => transferring context: 71.72MB                                2.3s
 => [2/5] WORKDIR /user_interface                                   0.0s
 => [3/5] COPY package*.json ./                                     0.1s
 => [4/5] RUN npm install                                           8.3s
 => [5/5] COPY . .                                                  0.7s
 => exporting to image                                              7.1s
 => => exporting layers                                             4.6s
 => => exporting manifest sha256:7ecc9a0416863acbe4e81bbb5f555f2ab  0.0s
 => => exporting config sha256:e86a6f720a9f958dedff19c424e2847b37c  0.0s
 => => exporting attestation manifest sha256:23d9fa03a03c2791e79c9  0.1s
 => => exporting manifest list sha256:4eee1db81d1e3909268cb90cf669  0.0s
 => => naming to docker.io/library/java-frontend:latest             0.0s
 => => unpacking to docker.io/library/java-frontend:latest          2.3s
```

## Listing Docker Images

```console
lakshan  …\Docker practice projects\Docker-java\user_interface   main !+?   v22.12.0  ♥ 21:36  docker images
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
java-frontend                  latest    4eee1db81d1e   17 seconds ago   471MB
java-backend                   latest    fd6b878dcf04   2 hours ago      618MB
fullstack_docker-client        latest    62aee2ae3b79   3 days ago       494MB
fullstack_docker-server        latest    66ff84af5d48   3 days ago       298MB
lakshan2003/node-new-backend   v1        6e476f9116b0   3 days ago       242MB
```

## Running the Frontend Container

```console
lakshan  …\Docker practice projects\Docker-java\user_interface   main !+?   v22.12.0  ♥ 21:36  docker run --name frontend-container -p 3000:5173 java-frontend

> user_interface@0.0.0 dev
> vite --host 0.0.0.0

4:09:09 PM [vite] (client) Re-optimizing dependencies because vite config has changed

  VITE v7.1.5  ready in 301 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.17.0.2:5173/
```

## Docker Compose Up

```console
lakshan  …\Docker practice projects\Docker-java   main !    v2docker compose up -d
[+] Running 0/15
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 0/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 1/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 1/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 1/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 2/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀] Pulling
[+] Running 2/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿] Pulling
[+] Running 3/15⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿] Pulling
[+] Running 5/15⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿] Pulling
[+] Running 7/15⣿⠀⠀⠀⠀⠀⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⠀⣿⣿] Pulling
[+] Running 8/15⣿⠀⠀⠀⠀⣿⠀⣿⣶⣿⣿] Pulling
[+] Running 9/15⣿⠀⠀⠀⣶⣿⠀⣿⣶⣿⣿] Pulling
[+] Running 9/15⣿⠀⠀⠀⣶⣿⠀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣶⣿⡀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣿⣿⡀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣿⣿⡀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣿⣿⣀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣿⣿⣀⣿⣿⣿⣿] Pulling
[+] Running 10/15⠀⠀⠀⣿⣿⣀⣿⣿⣿⣿] Pulling
[+] Running 10/15⣀⠀⠀⣿⣿⣄⣿⣿⣿⣿] Pulling
[+] Running 10/15⣀⠀⠀⣿⣿⣄⣿⣿⣿⣿] Pulling
[+] Running 10/15⣀⠀⠀⣿⣿⣄⣿⣿⣿⣿] Pulling
[+] Running 10/15⣀⠀⠀⣿⣿⣄⣿⣿⣿⣿] 9.437MB
[+] Running 10/15⣀⠀⠀⣿⣿⣦⣿⣿⣿⣿] 11.53MB
[+] Running 10/15⣀⠀⠀⣿⣿⣦⣿⣿⣿⣿] 11.53MB
[+] Running 10/15⣀⠀⠀⣿⣿⣦⣿⣿⣿⣿] 11.53MB
[+] Running 10/15⣀⠀⠀⣿⣿⣶⣿⣿⣿⣿] 12.58MB
[+] Running 10/15⣄⠀⠀⣿⣿⣶⣿⣿⣿⣿] 13.63MB
[+] Running 10/15⣄⠀⠀⣿⣿⣶⣿⣿⣿⣿] 13.63MB
[+] Running 10/15⣄⠀⠀⣿⣿⣶⣿⣿⣿⣿] 13.63MB
[+] Running 11/15⣄⠀⠀⣿⣿⣷⣿⣿⣿⣿] 15.73MB
[+] Running 11/15⣄⠀⠀⣿⣿⣿⣿⣿⣿⣿] 15.73MB
[+] Running 11/15⣄⠀⠀⣿⣿⣿⣿⣿⣿⣿] 15.73MB
[+] Running 11/15⣤⠀⠀⣿⣿⣿⣿⣿⣿⣿] 16.78MB
[+] Running 11/15⣤⠀⠀⣿⣿⣿⣿⣿⣿⣿] 16.78MB
[+] Running 11/15⣤⠀⠀⣿⣿⣿⣿⣿⣿⣿] 16.78MB
[+] Running 11/15⣤⠀⠀⣿⣿⣿⣿⣿⣿⣿] 18.87MB
[+] Running 11/15⣤⠀⠀⣿⣿⣿⣿⣿⣿⣿] 18.87MB
[+] Running 11/15⣦⠀⠀⣿⣿⣿⣿⣿⣿⣿] 19.92MB
[+] Running 11/15⣦⠀⠀⣿⣿⣿⣿⣿⣿⣿] 19.92MB
[+] Running 11/15⣦⠀⠀⣿⣿⣿⣿⣿⣿⣿] 19.92MB
[+] Running 11/15⣦⠀⠀⣿⣿⣿⣿⣿⣿⣿] 20.97MB
[+] Running 11/15⣦⠀⠀⣿⣿⣿⣿⣿⣿⣿] 20.97MB
[+] Running 11/15⣶⠀⠀⣿⣿⣿⣿⣿⣿⣿] 22.02MB
[+] Running 11/15⣶⠀⠀⣿⣿⣿⣿⣿⣿⣿] 22.02MB
[+] Running 11/15⣶⠀⠀⣿⣿⣿⣿⣿⣿⣿] 24.12MB
[+] Running 11/15⣶⠀⠀⣿⣿⣿⣿⣿⣿⣿] 24.12MB
[+] Running 11/15⣷⠀⠀⣿⣿⣿⣿⣿⣿⣿] 25.17MB
[+] Running 11/15⣷⠀⠀⣿⣿⣿⣿⣿⣿⣿] 25.17MB
[+] Running 11/15⣷⠀⠀⣿⣿⣿⣿⣿⣿⣿] 26.21MB
[+] Running 11/15⣷⠀⠀⣿⣿⣿⣿⣿⣿⣿] 26.21MB
[+] Running 12/15⣷⠀⠀⣿⣿⣿⣿⣿⣿⣿] 26.21MB
[+] Running 12/15⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿] 27.26MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 28.31MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 28.31MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 29.36MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 29.36MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 29.36MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 31.46MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 31.46MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 31.46MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 32.51MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 32.51MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 33.55MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿]  34.6MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿]  34.6MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿] 35.65MB
[+] Running 12/15⣿⠀⡀⣿⣿⣿⣿⣿⣿⣿]  36.7MB
[+] Running 12/15⣿⡀⡀⣿⣿⣿⣿⣿⣿⣿] 37.75MB
[+] Running 12/15⣿⡀⡀⣿⣿⣿⣿⣿⣿⣿] 37.75MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 39.85MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 39.85MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 39.85MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 40.89MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 41.94MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 42.99MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 42.99MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 45.09MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 45.09MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 45.09MB
[+] Running 12/15⣿⡀⣀⣿⣿⣿⣿⣿⣿⣿] 46.14MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 47.19MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 48.23MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 48.23MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 50.33MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 50.33MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 50.33MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 52.43MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 52.43MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 53.48MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 53.48MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 54.53MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 55.57MB
[+] Running 12/15⣿⡀⣄⣿⣿⣿⣿⣿⣿⣿] 55.57MB
[+] Running 12/15⣿⡀⣤⣿⣿⣿⣿⣿⣿⣿] 57.67MB
[+] Running 12/15⣿⡀⣤⣿⣿⣿⣿⣿⣿⣿] 57.67MB
[+] Running 12/15⣿⡀⣤⣿⣿⣿⣿⣿⣿⣿] 57.67MB
[+] Running 12/15⣿⡀⣤⣿⣿⣿⣿⣿⣿⣿] 58.72MB
[+] Running 12/15⣿⡀⣤⣿⣿⣿⣿⣿⣿⣿] 59.77MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 60.82MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 60.82MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 62.91MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 62.91MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 62.91MB
[+] Running 12/15⣿⣀⣤⣿⣿⣿⣿⣿⣿⣿] 63.96MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 65.01MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 65.01MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 66.06MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 67.11MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 68.16MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 68.16MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 68.16MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 69.21MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 70.25MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿]  71.3MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿]  71.3MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿]  71.3MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿]  73.4MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿]  73.4MB
[+] Running 12/15⣿⣀⣦⣿⣿⣿⣿⣿⣿⣿] 74.45MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿]  75.5MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿]  75.5MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 76.55MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 76.55MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 78.64MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 78.64MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 78.64MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 79.69MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 79.69MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 80.74MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 81.79MB
[+] Running 12/15⣿⣀⣶⣿⣿⣿⣿⣿⣿⣿] 81.79MB
[+] Running 12/15⣿⣀⣷⣿⣿⣿⣿⣿⣿⣿] 83.89MB
[+] Running 12/15⣿⣀⣷⣿⣿⣿⣿⣿⣿⣿] 83.89MB
[+] Running 12/15⣿⣀⣷⣿⣿⣿⣿⣿⣿⣿] 83.89MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 84.93MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 84.93MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 85.98MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 85.98MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 88.08MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 88.08MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 89.13MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 89.13MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 91.23MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 91.23MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 92.27MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 92.27MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 94.37MB
[+] Running 12/15⣿⣄⣷⣿⣿⣿⣿⣿⣿⣿] 94.37MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 95.42MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 95.42MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 96.47MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 96.47MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 96.47MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 97.52MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 97.52MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 98.57MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 98.57MB
[+] Running 12/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 99.61MB
[+] Running 13/15⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿] 99.61MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 100.7MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 101.7MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 102.8MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 102.8MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 103.8MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 104.9MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 104.9MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 105.9MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿]   107MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿]   108MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿]   108MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 109.1MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 109.1MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 110.1MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 111.1MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 111.1MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 112.2MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 112.2MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 113.2MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 113.2MB
[+] Running 13/15⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿] 114.3MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 115.3MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 115.3MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 116.4MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 116.4MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 117.4MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 118.5MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 118.5MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 119.5MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 119.5MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 120.6MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 120.6MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 121.6MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 122.7MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 122.7MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 123.7MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 124.8MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 124.8MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 125.8MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 125.8MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 126.9MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 126.9MB
[+] Running 13/15⣿⣦⣿⣿⣿⣿⣿⣿⣿⣿] 127.9MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿]   129MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿]   129MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿]   130MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿]   130MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 131.1MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 131.1MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 132.1MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 132.1MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 133.2MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 134.2MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 134.2MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 135.3MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 136.3MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 136.3MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 137.4MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 138.4MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 138.4MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 139.5MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 140.5MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 140.5MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 141.6MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 142.6MB
[+] Running 13/15⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿] 142.6MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 143.7MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 144.7MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 144.7MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 144.7MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 145.8MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 146.8MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 146.8MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 146.8MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 147.8MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 148.7MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 148.9MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 149.9MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 149.9MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿]   151MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿]   151MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿]   152MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 153.1MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 153.1MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 154.1MB
[+] Running 13/15⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿] 155.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 13/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] 156.2MB
[+] Running 15/15⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿] Pulling
 ✔ postgres Pulled             32.3s
#1 [internal] load local bake definitions
#1 reading from stdin 1.08kB done
#1 DONE 0.0s

#2 [backend internal] load build definition from Dockerfile
#2 transferring dockerfile: 176B 0.0s done
#2 DONE 0.0s

#3 [frontend internal] load build definition from Dockerfile
#3 transferring dockerfile: 551B done
#3 DONE 0.0s

#4 [auth] library/node:pull token for registry-1.docker.io
#4 DONE 0.0s

#5 [frontend internal] load metadata for docker.io/library/node:22-alpine
#5 ...

#6 [auth] library/openjdk:pull token for registry-1.docker.io
#6 DONE 0.0s

#7 [backend internal] load metadata for docker.io/library/openjdk:17-alpine
#7 DONE 1.8s

#5 [frontend internal] load metadata for docker.io/library/node:22-alpine
#5 ...

#8 [backend internal] load .dockerignore
#8 transferring context: 2B done
#8 DONE 0.0s

#9 [backend 1/2] FROM docker.io/library/openjdk:17-alpine@sha256:4b6abae565492dbe9e7a894137c966a7485154238902f2f25e9dbd9784383d81
#9 resolve docker.io/library/openjdk:17-alpine@sha256:4b6abae565492dbe9e7a894137c966a7485154238902f2f25e9dbd9784383d81 0.0s done
#9 DONE 0.0s

#10 [backend internal] load build context
#10 ...

#5 [frontend internal] load metadata for docker.io/library/node:22-alpine
#5 DONE 2.1s

#11 [frontend internal] load .dockerignore
#11 transferring context: 73B done
#11 DONE 0.0s

#12 [frontend 1/6] FROM docker.io/library/node:22-alpine@sha256:d2166de198f26e17e5a442f537754dd616ab069c47cc57b889310a717e0abbf9
#12 resolve docker.io/library/node:22-alpine@sha256:d2166de198f26e17e5a442f537754dd616ab069c47cc57b889310a717e0abbf9 0.0s done
#12 DONE 0.0s

#10 [backend internal] load build context
#10 ...

#13 [frontend internal] load build context
#13 transferring context: 1.45kB 0.3s done
#13 DONE 0.3s

#14 [frontend 2/6] WORKDIR /app
#14 CACHED

#10 [backend internal] load build context
#10 ...

#15 [frontend 3/6] COPY package*.json ./
#15 DONE 0.4s

#10 [backend internal] load build context
#10 transferring context: 52.70MB 1.6s done
#10 DONE 1.6s

#9 [backend 1/2] FROM docker.io/library/openjdk:17-alpine@sha256:4b6abae565492dbe9e7a894137c966a7485154238902f2f25e9dbd9784383d81
#9 CACHED

#16 [backend 2/2] COPY target/Docker-java-0.0.1-SNAPSHOT.jar Docker-java.jar
#16 DONE 0.1s

#17 [frontend 4/6] RUN npm install
#17 ...

#18 [backend] exporting to image
#18 exporting layers 1.2s done
54adaafa409871ca41284ecf5 0.0s done
#18 naming to docker.io/library/docker-java-backend:latest done
#18 unpacking to docker.io/library/docker-java-backend:latest 0.2s done
#18 DONE 1.5s

#19 [backend] resolving provenance for metadata file
#19 DONE 0.0s

#17 [frontend 4/6] RUN npm install
#17 29.29
#17 29.29 added 181 packages, and audited 182 packages in 29s
#17 29.29
#17 29.29 41 packages are looking for funding
#17 29.29   run npm fund for details
#17 29.29
#17 29.29 found 0 vulnerabilities
#17 29.29 npm notice
#17 29.29 npm notice New major version of npm available! 10.9.3 -> 11.6.0
#17 29.29 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.6.0
#17 29.29 npm notice To update run: npm install -g npm@11.6.0
#17 29.29 npm notice
#17 DONE 29.5s

#20 [frontend 5/6] COPY . .
#20 DONE 0.1s

#21 [frontend 6/6] RUN echo "VITE_API_URL=http://backend:8080/api" > .env
#21 DONE 0.2s

#22 [frontend] exporting to image
#22 exporting layers
#22 exporting layers 4.0s done
#22 exporting manifest sha256:3e4089bcdfab759697fde05d2b77244f3892d24b4fcba6c9e29302fc3c5cc045 done
#22 exporting config sha256:04e3e0a6061d91fc5bdc61ebae2af00ba856098eaa2df37c0d2f4f484312a919 done
#22 exporting attestation manifest sha256:7bd5789b204506ceb5ae2c0d6b5bb7a6b5c16e367f9fd21d2e711316ef72500b 0.0s done
#22 exporting manifest list sha256:a1bb26fa1e5cfd0deaf0357d7a259a79b4cb03ba899e75da0c87c12ad7f3d706 done
#22 naming to docker.io/library/docker-java-frontend:latest done
#22 unpacking to docker.io/library/docker-java-frontend:latest
#22 unpacking to docker.io/library/docker-java-frontend:latest 1.4s done
#22 DONE 5.5s

#23 [frontend] resolving provenance for metadata file
#23 DONE 0.0s
                                                                     11.6s
80->8080/tcp, [::]:8080->8080/tcp   java_backend_container
ee978fcd8317   postgres:15            "docker-entrypoint.s…"   36 seconds ago   Up 34 seconds (healthy)   0.0.0.0:5432->5432/tcp, [::]:5432->5432/tcp   postgres_container
```
