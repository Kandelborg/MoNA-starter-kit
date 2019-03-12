FROM keymetrics/pm2:latest-alpine

# Setting working directory. All the path will be relative to WORKDIR
RUN mkdir -p /usr/src/app/src
WORKDIR /usr/src/app

ARG NPM_TOKEN
ENV PM2_PUBLIC_KEY edrf69acgkrmzxz
ENV PM2_SECRET_KEY w41tthlapeaz5im

# Installing dependencies
COPY package*.json /usr/src/app/
RUN cd /usr/src/app && npm ci --production

RUN rm -f .npmrc

# Copying source files
COPY . .

EXPOSE 3333
# Building app
RUN npm run build

# Running the app
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
