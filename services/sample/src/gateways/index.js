import clients from "../clients";
import SampleGateway from "./Sample.gateway";

const buildGateways = (logger) => {
  if (!logger) {
    throw new Error("Missing logger");
  }
  return {
    sampleGateway: new SampleGateway(clients.sampleClient, logger),
  };
};

export { buildGateways };
