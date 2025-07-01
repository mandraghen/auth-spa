# auth-spa

This is a web app built using the nextjs framework that demonstrates how to integrate a client into an authentication flow based on OIDC and keycloak as authentication service.
The site includes a header with a component to login using the [authentication code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) and will include a login page to test the flow fully at server side and a protected page that will call a protected resource in a service.

For further information regarding the high level architecture, check the [Auth flow for a Microservices Architecture project](https://github.com/users/mandraghen/projects/1).

## Technologies Used

- **Next.js 15**: A React framework for production.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.
- **Next-auth**: js library to manage the OIDC flow with keycloak

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v23 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

Yarn is preferred, so now on it will be taken as reference.

Also you need to setup your keycloak instance and make it available to the app.
You can use a k8s setup I implemented in this [repo](https://github.com/mandraghen/k8s-infrastructure) and you can keep most of configurations.

### Running the application

1. Clone the repository:
    ```bash
    git clone https://github.com/mandraghen/auth-spa.git
    cd auth-spa
    ```
2. Install the dependencies:
    ```bash
    yarn install
    ```
3. Start the development server:
    ```bash
    yarn dev
    ```
4. Run external dependencies:
    ```bash
    docker compose up
    ```
5. Open your browser and navigate to http://localhost:3000.
6. You need to create a secret key to let next-auth to encrypt the token information that is sent to the client and add it to your .env.local file:
    ```bash
    AUTH_SECRET==<auth_secret>
    ```
also you need to add the client secret that is set on keycloak:
    ```bash
    KEYCLOAK_ID=local-web #oidc client id in keycloak
    KEYCLOAK_REALM=demorealm #realm name in keycloak
    KEYCLOAK_SECRET=<client_secret>
    ```
