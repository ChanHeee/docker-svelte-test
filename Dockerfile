FROM node:15.12.0 as builder
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/public /usr/share/nginx/html