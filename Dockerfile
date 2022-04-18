FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

ENV APP_PORT=6000
ENV DATABASE_HOST=mongo
ENV DATABASE_PORT=27017
ENV DATABASE_NAME=docker

EXPOSE 6000

CMD ["npm", "start"]