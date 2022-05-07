import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.forEach(({ message, location, path }) => {
      alert(`Graphql Error: ${message}`);
    });
  }
});

const urltohit = from([
  errorLink,
  new HttpLink({
    uri: 'https://hackathon-neog.hasura.app/v1/graphql',
    headers: {
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET_KEY,
      'content-type': 'application/json',
    },
  }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: urltohit,
});

export { client, ApolloProvider };
