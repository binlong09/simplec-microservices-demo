FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install

RUN cd client && npm install

RUN cd client && npm run build

EXPOSE 5000

CMD npm run start