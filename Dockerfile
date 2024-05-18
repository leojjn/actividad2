FROM node:16.15.0-alpine


RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY  package.json /usr/src/app
COPY  package-lock.json /usr/src/app
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]