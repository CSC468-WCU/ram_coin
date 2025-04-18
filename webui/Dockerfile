FROM node:23.11-slim

WORKDIR /apps
COPY webui.js /apps
COPY files/   /apps

RUN npm install express
RUN npm install redis@3

CMD ["node", "/apps/webui.js"]
EXPOSE 80
