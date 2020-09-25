FROM node:13-alpine
WORKDIR /app

ENV NODE_ENV=development
ENV REACT_APP_SERVER_ENV=development
RUN npm install react-scripts@3.4.1 -g --silent

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY yarn.lock /app/yarn.lock

RUN npm install --no-optional

COPY . /app

CMD ["npm", "start"]