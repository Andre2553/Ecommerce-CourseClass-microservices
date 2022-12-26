import { useUser } from '@auth0/nextjs-auth0/client';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { withApollo } from '../../lib/withApollo';
import { useGetProductsQuery } from '../../graphql/generated/graphql';
import { getServerPageGetProducts, ssrGetProducts } from '../../graphql/generated/page';


function Home({ data }) {
  const { user } = useUser()
  return (
    <div>
      <h1>Home</h1>
      <pre>
        {JSON.stringify(data.products, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx);
    return {
      props: {}
    }
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
)