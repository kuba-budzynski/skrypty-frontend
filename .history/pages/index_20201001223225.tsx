import Head from 'next/head'
import useSWR from 'swr'
import { fetchGQL } from '../graphql/fetchers';

export default function Home() {

  const [data, error] = useSWR(`

  `, fetchGQL);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
