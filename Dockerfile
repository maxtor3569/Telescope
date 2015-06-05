FROM ubuntu:14.04

RUN mkdir /app && mkdir -p /data/db
COPY . /app/
RUN sh /app/bootstrap.sh
CMD ["/bin/sh", "/app/start.sh"]


EXPOSE 80
