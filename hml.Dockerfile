FROM node:13.12.0-alpine as build
WORKDIR /

ENV NODE_ENV=production
ENV REACT_APP_SERVER_ENV=homolog
RUN npm install react-scripts@3.4.1 -g --silent

COPY package*.json ./
RUN npm ci --silent

COPY . ./
EXPOSE 3000

CMD ["npm", "start"]