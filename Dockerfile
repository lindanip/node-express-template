FROM node/latest

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 4041

CMD ["yarn", "start"]