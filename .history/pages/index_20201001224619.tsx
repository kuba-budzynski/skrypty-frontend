import Head from 'next/head'
import useSWR from 'swr'
import { fetchGQL } from '../graphql/fetchers';

export default function Home() {

  const {data, error} = useSWR(`
    query{
      messages{
        title,
        ammount,
        loaded
      }
    }
  `, fetchGQL);
  console.log(process.env.GRAPHCMS_ENDPOINT)
  console.log(process.env.GRAPHCMS_TOKEN)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {error ? "Error": data.data ? data.data: "None"}
      </div>
    </>
  )
}