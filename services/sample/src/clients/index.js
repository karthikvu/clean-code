import { sampleClient } from "./sample.client";

const clients = {
  sampleClient: sampleClient({ host: process.env.SAMPLE_HOST }),
};

export default clients;
