import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_SERVER}/graphql`, // Replace with your Strapi GraphQL API endpoint
  cache: new InMemoryCache({
    resultCaching:false,
    typePolicies:{
      Query: {
        fields:{
          '*': { merge: false },
        }
      }
    }
  } ),
});

export default client;