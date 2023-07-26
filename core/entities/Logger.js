const winston = require("winston");

// const formatter = winston.

class Logger {
  constructor(name) {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.simple()
      ),
      defaultMeta: { service: name },
      transports: [new winston.transports.Console()],
    });
  }

  info(text, { meta, payload } = {}) {
    this.logger.info(text, { meta, payload });
  }

  warn(text, { meta, payload, error } = {}) {
    this.logger.warn(text, { meta, payload, error });
  }

  error(text, { meta, payload, error } = {}) {
    this.logger.error(text, { meta, payload, error });
  }

  fatal(text, { meta, payload, error } = {}) {
    this.logger.error(text, { name: this.name, meta, payload, error });
  }
}

module.exports = Logger;
