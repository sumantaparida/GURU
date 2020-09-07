FROM nginx:1.17-alpine
WORKDIR /usr/src
COPY build /usr/src/build
# COPY ["app/config.js", "/etc/nginx/conf.d/default.conf"]
COPY ["mintpro.conf", "/etc/nginx/conf.d/mintpro.conf"]