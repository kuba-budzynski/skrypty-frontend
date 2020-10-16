import React from 'react'
import {usePosts} from '../graphql/usePosts'

function Posts() {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context) {
    
    const {reaccurings, error} = usePosts()
    
    return {
        props: {
            posts: reaccurings
        },
    }
}

export default Posts
