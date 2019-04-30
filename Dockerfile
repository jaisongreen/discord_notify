FROM node:8

COPY ./package.json /src/package.json
WORKDIR /src

RUN yarn
ADD . /src

CMD yarn start
