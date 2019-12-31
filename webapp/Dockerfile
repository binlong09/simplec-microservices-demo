FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install

RUN npm install --prefix

EXPOSE 5000

CMD npm run start