import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { client, ApolloProvider } from './context/graphql-apollo-provider';
import { UserProvider } from './context/user-context';
import { ModalProvider } from './context/Modal-context';
import { AlertProvider } from './context/Alert-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <ModalProvider>
          <AlertProvider>
            <ApolloProvider client={client}>
              <App />
            </ApolloProvider>
          </AlertProvider>
        </ModalProvider>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
