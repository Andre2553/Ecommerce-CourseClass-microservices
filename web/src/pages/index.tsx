import { GetServerSideProps } from "next";
import { getAccessToken, getSession } from '@auth0/nextjs-auth0';


export default function Home() {
  return (
    null
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession(req, res);
  const token = getAccessToken(req, res);
  console.log(token);
  if (session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      },
    };
  }
}