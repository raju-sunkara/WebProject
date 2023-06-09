FROM node:latest

USER root

COPY . /usr/share

WORKDIR /usr/share

EXPOSE 3000

RUN npm install axios
RUN npm install express

ENTRYPOINT ["node", "frontend.js"]