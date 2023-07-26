// make an api call, or a DB query here, and format the data or handle the error

import Sample from "../entities/Sample";

// client will be injected, and imports the entity
class SampleGateway {
  #logger;
  #client; // dont expose these to the instance

  constructor(client, logger) {
    this.#client = client;
    this.#logger = logger;
  }

  async getUsers() {
    this.#logger.info("Calling API getUsers");
    const users = await this.#client.Users.all();
    return users.data.map(Sample.fromApi);
  }

  getVersion() {
    return 1;
  }
}

export default SampleGateway;
