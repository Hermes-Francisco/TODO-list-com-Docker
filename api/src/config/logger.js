const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format((info) => {
      info.level = info.level.toLocaleUpperCase();
      info.message = `[${new Date().toISOString()}] -->   ${info.message}`;
      return info;
    })(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
