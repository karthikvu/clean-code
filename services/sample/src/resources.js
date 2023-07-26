import { buildGateways } from "./gateways";
import { buildMiddlewares } from "./middlewares";
import { buildUseCases } from "./use-cases";

const buildResources = (logger) => {
  const gateways = buildGateways(logger);
  const useCases = buildUseCases({ gateways, logger });
  const middlewares = buildMiddlewares({ gateways, logger, useCases });
  return {
    gateways,
    useCases,
    middlewares,
  };
};

export default buildResources;
