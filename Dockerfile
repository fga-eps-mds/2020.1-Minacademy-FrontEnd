FROM node:13-alpine
WORKDIR /app

ENV NODE_ENV=development

COPY package.json /app/package.json

RUN npm install --no-optional

COPY . /app

CMD ["npm", "start"]