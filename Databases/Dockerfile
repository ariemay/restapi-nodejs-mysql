FROM mysql:5.7.15

MAINTAINER Arie May Wibowo <ariemayw@gmail.com>

ENV MYSQL_DATABASE=dish_order \
    MYSQL_ROOT_PASSWORD=2359media

ADD dish_schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
