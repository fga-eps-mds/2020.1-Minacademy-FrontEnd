FROM node:13.12.0-alpine as build

ENV NODE_ENV=production
ENV SKIP_PREFLIGHT_CHECK=true

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY hom-nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]