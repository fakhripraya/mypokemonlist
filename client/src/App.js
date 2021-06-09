import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import React from 'react';
import Pokemon from './Pages/Pokemon';
import "slick-carousel/slick/slick.css";
import Navbar from './Components/Navbar';
import MyPokemon from './Pages/MyPokemon';
import "slick-carousel/slick/slick-theme.css";
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
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
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
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
