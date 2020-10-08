FROM node:13-alpine
WORKDIR /app

ENV NODE_ENV=development

RUN npm install react-scripts@3.4.3 -g --silent

COPY package.json /app/package.json

RUN npm install --no-optional

COPY . /app

CMD ["npm", "start"]