FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ADD . /usr/src/app

CMD ["node", "index.js"]

EXPOSE 5000

ENV FIRE_LIMIT=3
ENV SERVER_NAME=server
ENV PORT=5000
ENV TARGET_HOST=nginx
ENV TARGET_URI=target_server