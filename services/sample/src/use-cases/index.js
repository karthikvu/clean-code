import { getUsers as getUsersFactory } from "./getUsers";

const buildUseCases = ({ gateways, logger }) => {
  return {
    getUsers: getUsersFactory({ gateways, logger, useCases: {} }), // inject only required useCases. Helps to avoid cyclic dependency
  };
};

export { buildUseCases };
