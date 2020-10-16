import Head from 'next/head'
import useSWR from 'swr'

export default function Home() {

  const [data, error] = useSWR(`
    
  `)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
