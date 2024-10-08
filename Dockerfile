FROM node:20-alpine AS build
WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

ENV VITE_API_URL=https://react-jobs-app-db.onrender.com

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]