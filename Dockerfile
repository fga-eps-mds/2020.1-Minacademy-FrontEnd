FROM node:13-alpine
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --no-optional

COPY . /app

CMD ["npm", "start"]