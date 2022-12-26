import { useUser } from '@auth0/nextjs-auth0/client';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { withApollo } from '../../lib/withApollo';
import { useGetProductsQuery } from '../../graphql/generated/graphql';


function Home(){
  const {user} = useUser()
  const {data, loading, error} = useGetProductsQuery();
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
   getServerSideProps: async ({req, res}) => {
    console.log( await getAccessToken(req,res));
    return {
      props: {}
    }
  }
    
});

export default withApollo(Home)