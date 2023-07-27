# Clean Code Framework

The Clean Code Framework is a Node.js framework that follows the principles of Clean Code Architecture, inspired by the teachings of Uncle Bob. It provides a structured and organized way to build Node.js applications, making them maintainable, scalable, and easy to understand.

## Folder Structure

The framework is designed with the following folder structure:

```
+---config
+---core
    +---entities
    +---middlewares
    +---routes
+---dist
+---docs
+---infra
+---migrations
+---scripts
+---services
    +---sample
        +---src
            +---clients
            +---entities
            +---gateways
            +---middlewares
            +---routes
                +---internal
                +---v1
            +---use-cases
            +---utils
```

- **config**: Configuration files required for the application.
- **core**: Core components of the framework, including entities, middlewares, and routes.
- **dist**: The build output directory.
- **docs**: Documentation related to the framework or services.
- **infra**: Infrastructure-related files, such as database configurations.
- **migrations**: Database migration files.
- **scripts**: Scripts to assist in development or deployment tasks.
- **services**: Contains individual services, each residing in its folder.

Each service within the `services` directory is structured with its own `src` folder, containing various components needed for that specific service.

## How to Init

To get started with the Clean Code Framework, follow these steps:

1. Install the framework as a dependency using npm or yarn:

```
npm install @clean-code/core
```

2. Import the required modules and build resources for your application:

```js
import { ServerFactory } from "@clean-code/core";

// Import your custom buildResources and routes
import buildResources from "./resources";
import routes from "./routes";

// Create a new instance of ServerFactory with your app name
const { createApp, logger } = new ServerFactory("clean-code");

// Build resources using your logger
const resources = buildResources(logger);

// Create your app with resources, routes, and logger
const app = createApp({
  resources,
  routes,
  logger,
});

// Start the application
app.start();
```

## resources.js

The `resources.js` module is a crucial part of the Clean Code Framework, responsible for building and providing essential resources to the application. It combines various components, including gateways, use cases, and middlewares, and offers them as a cohesive set of resources to be utilized by the application.

### How It Works

The `buildResources` function is the central piece of this module. It takes a `logger` as a parameter, which is an instance of the logger used for logging purposes throughout the application. The `buildResources` function then proceeds to build the necessary resources by invoking corresponding functions from other modules:

- **Gateways**: The `buildGateways` function (imported from "./gateways") is called to construct the required gateways. Gateways are responsible for interacting with external systems, such as databases or APIs.

- **Use Cases**: The `buildUseCases` function (imported from "./use-cases") is invoked to create the use cases. Use cases encapsulate the application's business logic and interact with gateways to perform specific tasks.

- **Middlewares**: The buildMiddlewares function (imported from "./middlewares") is used to build an array of middleware components. Middlewares are intermediaries that handle common operations like authentication, error handling, or request preprocessing.

Once all the components are constructed, the `buildResources` function returns an object that bundles these resources together:

```js
{
  gateways,    // Object containing the built gateways
  useCases,    // Object containing the built use cases
  middlewares, // Array of Express.js middlewares
```

### Usage

To utilize the resources provided by `resources.js`, you can import the `buildResources` function and pass a logger instance as an argument:

```js
import buildResources from "./resources";
import logger from "./logger"; // Assuming you have a logger module

const resources = buildResources(logger);
```

The `resources` object obtained from `buildResources` can then be used throughout the application to access the built gateways, use cases, and middlewares, making it easier to organize and manage various application components.

## Customization

Feel free to customize the `resources.js` module according to your application's specific needs. You can extend the resources by adding more components or modify the existing functions to tailor the behavior as per your requirements.

For more information on the usage and customization of resources, refer to the documentation in the `docs` directory.

## Tasks Yet to Be Done

[ ] Tests: Implement unit tests and integration tests to ensure the correctness and robustness of the application.

[ ] TypeScript: Add TypeScript support to the project for enhanced type safety and better code development experience.

[ ] Dependency Management: Organize and manage project dependencies using a package manager like npm or yarn.

[ ] Documentation: Provide comprehensive documentation on how to use the framework, its architecture, and each service's responsibilities.

[ ] Linting and Code Formatting: Set up linting rules and code formatting guidelines to enforce a consistent coding style.

[ ] Error Handling: Enhance error handling mechanisms for graceful handling of exceptions and failures.

[ ] Authentication and Authorization: Implement authentication and authorization mechanisms to secure the application.

[ ] Logging: Improve logging mechanisms for better tracking and monitoring of application activities.

[ ] Validation: Implement data validation to ensure data integrity and prevent invalid input.

[ ] CI/CD: Set up Continuous Integration (CI) and Continuous Deployment (CD) pipelines for automated testing and deployment.

[ ] Security: Enhance security measures to protect against potential vulnerabilities and attacks.

[ ] Performance Optimization: Optimize application performance for improved responsiveness and efficiency.

[ ] Scalability: Plan for application scalability to handle increasing loads and user base.

[ ] Error Reporting: Implement error reporting mechanisms to receive alerts and notifications on critical issues.

[ ] Monitoring: Set up monitoring tools to track application metrics and performance.

[ ] Dockerization: Dockerize the application for containerization and easier deployment.

[ ] Example Service: Create an example service to showcase the framework's capabilities and usage.

## License

This module is open-source and licensed under the MIT License. You are encouraged to use, modify, and contribute to this module to improve the Clean Code Framework for the community.

Happy coding!
