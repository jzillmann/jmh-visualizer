FROM node:18-alpine as build-deps

WORKDIR /usr/src/app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run release-build

FROM nginx:alpine

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
