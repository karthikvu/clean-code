const express = require("express");

const adminRoutes = require("./routes");
const { injectDependencies } = require("./middlewares");

const PORT = process.env.PORT || 3000;

const createApp =
  (coreLogger) =>
  ({ resources, routes, logger }) => {
    let app = express();
    const { gatways, useCases, middlewares } = resources;

    app.use(injectDependencies({ gatways, useCases, logger }));

    middlewares.forEach((middleware) => {
      app.use(middleware);
    });

    app.use("/admin", adminRoutes);
    app.use("/api", routes);

    function onError(error) {
      if (error.syscall !== "listen") {
        throw error;
      }

      var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case "EACCES":
          coreLogger.error(bind + " requires elevated privileges");
          process.exit(1);
          break;
        case "EADDRINUSE":
          coreLogger.error(bind + " is already in use");
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    const start = () => {
      app.listen(PORT, (err) => {
        if (err) {
          onError(err);
        } else {
          coreLogger.info("Listening on " + PORT);
        }
      });
    };
    app.start = start;

    return app;
  };

module.exports = { createApp };
