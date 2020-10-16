import React from 'react'
import {usePosts} from '../graphql/usePosts'

function Posts() {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context) {
    
    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR('https://admin.kasiaklimczukfitness.pl/reaccurings', fetcher)
    return {
        props: {
            posts: data
        },
    }
}

export default Posts
