FROM node:13.12.0-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm ci --silent

COPY . ./
EXPOSE 3000

CMD ["yarn", "start"]