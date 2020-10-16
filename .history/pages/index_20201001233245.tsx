import Head from 'next/head'
import { usePosts } from '../graphql/fetchers'

export default function Home({posts}) {

  

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div>
        {posts.map(post => <div>post.title</div>)}
      </div> */}
    </>
  )
}

export async function getStaticProps(context) {

  const {posts, error} = usePosts()

  console.log(posts)
  return {
    props: {}
  }
}