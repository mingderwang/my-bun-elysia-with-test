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
docker build -t example-bun . # Build the Docker image
docker run --name example-bun -p 3000:3000 example-bun # Run the Docker image
```
