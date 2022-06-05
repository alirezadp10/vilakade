FROM keymetrics/pm2:12-slim

WORKDIR /usr/src/app

ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 4000

CMD [ "pm2-runtime", "start", "pm2.json" ]
