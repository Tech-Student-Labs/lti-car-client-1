FROM node as builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist/lti-car-client-one .

ENTRYPOINT ["nginx", "-g", "daemon off;"]