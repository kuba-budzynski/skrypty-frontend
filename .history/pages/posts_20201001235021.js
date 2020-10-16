import React from 'react'
import {usePosts} from '../graphql/usePosts'

function Posts() {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context) {
    
    const {posts, error} = usePosts()
    
    return {
        props: {
            posts
        },
    }
}

export default Posts
