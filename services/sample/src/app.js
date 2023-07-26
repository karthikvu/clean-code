import { ServerFactory } from "@clean-code/core";

import buildResources from "./resources";
import routes from "./routes";

const { createApp, logger } = new ServerFactory("clean-code");

const resources = buildResources(logger);

const app = createApp({
  resources,
  routes,
  logger,
});

app.start();
