import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import MissionTracker from "./components/MissionTracker";


const App = () => {

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <MissionTracker/>
    </ApolloProvider>
  );
}

export default App;
