FROM node:18.14.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.21.3-alpine

COPY --from=build /app/dist/mini-projet-f /usr/share/nginx/html