import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    useMutation,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://users-messages-gql.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

const newMessage = gql`mutation ($username:ID!, $body: String!) {
    createMessage(username: $username, body: $body) {
      body
      user{
        username
      }
    } 
  }`;

const newUser = gql`mutation($username:ID!, $first_name: String!, $last_name: String!) {
      createUser(username: $username, first_name: $first_name, last_name: $last_name) {
      username
      }
    }`;

export { newUser, newMessage, client };
