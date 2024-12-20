FROM nginx:1.27.2-alpine-slim

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 3001

WORKDIR /root

COPY ./dist /root

CMD ["nginx", "-g", "daemon off;"]

