import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home(){
  const {user} = useUser()
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired();