FROM node:23.11-slim

WORKDIR /apps
COPY webui.js /apps
COPY files/   /apps/files

RUN npm install express
RUN npm install redis@3

CMD ["node", "webui.js"]
EXPOSE 80
