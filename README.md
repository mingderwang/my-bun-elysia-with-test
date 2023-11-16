# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.


## Testing
To run tests and show coverage:
```bash
bun test
```


## Deployment (with docker)
To create a Dockerfile if you have none.
```
FROM oven/bun:1
WORKDIR /app
COPY . .
RUN bun install
 
ARG PORT
EXPOSE ${PORT:-3000}
 
CMD ["bun", "server.ts"]
```
then

```
docker build -t my-bun-elysia-example .      # Build the Docker image
docker run --rm -it -p 3000:3000 my-bun-elysia-example   # Run the Docker image

// to push to docker hub for deployment to render

docker login -u <your dockerhub account>
docker build -t <your dockerhub account>/my-bun-elysia-example .
docker push <your dockerhub account>/my-bun-elysia-example
```

refer to https://render.com/
