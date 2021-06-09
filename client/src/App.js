import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React from 'react';
import Pokemon from './Pages/Pokemon';
import Navbar from './Components/Navbar';
import MyPokemon from './Pages/MyPokemon';
import PokemonDetail from './Pages/PokemonDetail';
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Pokemon} />
          <Route path='/me' exact component={MyPokemon} />
          <Route path='/detail' exact component={PokemonDetail} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
