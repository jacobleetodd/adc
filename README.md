# adc

- Client and server are running in docker: docker-compose up --build
- However, the server is not actually being used. I would have to:
  - Set up an ORM such as TypeORM
  - Create a route, controller, service, and model to GET analytics data
  - This could be done with query params that enable search functionality (e.g. product, platform, metric, start data, end date) which would simplify client data manipulation logic
  - Seed the data
- The client is currently using the data json directly and performing all filtering manually
- General next steps:
  - Add TypeScript to the project
  - Add linting and Prettier
  - Add Husky to enforce linting rules
