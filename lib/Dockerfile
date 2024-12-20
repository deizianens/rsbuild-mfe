FROM nginx:1.18-alpine

RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 8080

WORKDIR /root

COPY ./build /root

CMD ["nginx", "-g", "daemon off;"]
