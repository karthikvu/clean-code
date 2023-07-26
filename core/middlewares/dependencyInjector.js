const injectDependencies =
  ({ useCases, logger, gateways }) =>
  (req, res, next) => {
    req.useCases = useCases;
    req.logger = logger;
    req.gateways = gateways;
    next();
  };

module.exports = { injectDependencies };
