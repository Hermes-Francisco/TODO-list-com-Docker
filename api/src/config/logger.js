const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: 'DD/MM/YYYY HH:mm:ss',
    }),
    winston.format((info) => {
      info.message = `${info.level.toUpperCase()} [${info.timestamp}]: ${info.message}`;
      return info;
    })(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
