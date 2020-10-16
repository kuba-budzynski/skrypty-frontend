import Head from 'next/head'
import { usePosts } from '../graphql/fetchers'

export default function Home() {

  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {error ? "Error": JSON.stringify(data)}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {

  const { data, error } = usePosts();

  return {
    props: {
      posts: data
    }
  }
}