FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app


COPY ["package.json", "package-lock.json*", "./"]


RUN npm install --production --silent


RUN apk add --no-cache curl


COPY . .


ENV API_URI=http://lemon-backend:5000/api/topics


EXPOSE 3000


USER node


CMD ["node", "server.js"]
