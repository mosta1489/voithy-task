FROM node:18.14.2-alpine

WORKDIR /task

COPY . .

# RUN ["npm", "i"]

CMD [ "npm", "start"]

