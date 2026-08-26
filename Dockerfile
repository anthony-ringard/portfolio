# syntax=docker/dockerfile:1

# ---- base: shared deps layer -------------------------------------------------
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- dev: hot-reload dev server (docker compose up) --------------------------
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# ---- builder: produces the static export in /app/dist ------------------------
FROM base AS builder
COPY . .
ARG SITE_URL=""
ENV SITE_URL=${SITE_URL}
RUN npm run build

# ---- export: scratch image — just the static files in /dist ------------------
# Use with `docker build --target export -o dist .` to extract the static site
# without installing anything locally.
FROM scratch AS export
COPY --from=builder /app/dist /

# ---- prod: serve the static export with a tiny static file server ------------
FROM node:20-alpine AS prod
WORKDIR /app
RUN npm install -g serve@14
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
