FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install -yf npm ssh curl && \
    npm install -g mup && \
    curl https://install.meteor.com/ | sh && \
    mup setup
RUN mkdir /app
COPY . /app/
CMD ["/bin/sh", "/app/start.sh"]


EXPOSE 80
