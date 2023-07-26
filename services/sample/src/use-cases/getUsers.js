const getUsers =
  ({ gateways, useCases, logger }) =>
  async (...params) => {
    logger.info("usecase", {
      meta: { id: 1 },
      payload: {
        payload: "here",
        params,
        gateways,
      },
    });

    const users = await gateways.sampleGateway.getUsers();
    return users;
  };

export { getUsers };
