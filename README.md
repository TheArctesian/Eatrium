## Eatrium

~~half of this shit dosnt work
mysql is fucked dosnt support manjaro
i have no clue what I'm doing with a java backend
and react isnt going to load till I give it table data
which I need from the fucking sql database
otherwise its all going pretty well what about you?~~

Ah the joys of deployment, it all works now so we can relax, mongo is nice to me unlike sql and spring boot is awesome

# For server run

To run server make sure docker is installed then

```bash
docker pull mongo
```

```bash
docker run --name mymongo -d -p 27017:27017 mongo:latest
```

check if its there

```bash
docker ps
```

should return

```bash
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS
      PORTS                      NAMES
912c17af9858   mongo:latest   "docker-entrypoint.s…"   5 seconds ago   Up 3 seco
nds   0.0.0.0:27017->27017/tcp   mytest

```

Then
make sure **Spring boot tools**, **Java ext tools**, **Spring Boot ext Pack** and **Lombok** are installed for vs code

should be good to go then for monitoring go to
http://localhost:8080/swagger-ui.html

## Client

I'm using Yarn so `yarn -i` and `yarn start`
