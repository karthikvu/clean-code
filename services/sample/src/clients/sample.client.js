const axios = require("axios");

const sampleClient = () => {
  const instance = axios.create({
    baseURL: "http://example.com",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      // Handle the error here
      console.error("Error during Axios request:", error);
      return Promise.reject(error); // Rethrow the error to propagate it further
    }
  );

  return {
    Users: {
      all: () => instance.get("/users"),
      byId: (id) => instance.get("/users/:id", { id }),
    },
    Groups: {
      all: () => instance.get("/groups"),
    },
  };
};

export { sampleClient };
