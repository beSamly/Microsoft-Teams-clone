# Stage 1
FROM node:14 as react-build
WORKDIR /app
COPY . ./


# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]