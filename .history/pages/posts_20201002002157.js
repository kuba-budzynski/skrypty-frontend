import React from 'react'
import {usePosts} from '../graphql/usePosts'
import {useSWR} from 'swr'

function Posts({posts}) {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context) {
    
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('', fetcher)
    return {
        props: {
            posts: ""
        },
    }
}

export default Posts
