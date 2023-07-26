const { createApp } = require("./AppFactory");
const Logger = require("./entities/Logger");

class ServerFactory {
  #initializeLogger(appName) {
    return new Logger(appName);
  }

  constructor(appName) {
    if (!appName) throw new Error("NOTFOUND: appName");
    this.logger = this.#initializeLogger(appName);
    const coreLogger = this.#initializeLogger("core");
    this.createApp = createApp(coreLogger);
  }
}

module.exports = ServerFactory;
