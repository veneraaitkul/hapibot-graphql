import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.scss';
import Person from './components/person/Person';

const client = new ApolloClient({
  uri: 'https://hapi-interview-api.herokuapp.com/graphql'
});

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>

      <Person></Person>

    </ApolloProvider>

  );
}

export default App;
