FROM node:8.9
ENV TZ Asia/Shanghai

WORKDIR /code

COPY ./package.json ./package-lock.json ./
RUN npm install --production

COPY ./ ./
RUN npm run compile

ENTRYPOINT ["npm", "run"]
CMD ["start"]
