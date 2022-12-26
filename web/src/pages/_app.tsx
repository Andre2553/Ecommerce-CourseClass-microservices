import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getApolloClient } from '../lib/withApollo';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  return (
  <UserProvider>
    <ApolloProvider client={getApolloClient()}>
    <Component {...pageProps} />
    </ApolloProvider>
  </UserProvider>
  )
}

export default MyApp
