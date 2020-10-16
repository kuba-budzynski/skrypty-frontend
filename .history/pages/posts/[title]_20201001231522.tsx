import { GetStaticProps } from 'next'
import React from 'react'
import {usePosts} from '../../graphql/fetchers'

function Post({posts}) {
    return (
        <div>
            {posts.map(post => <div>post.title</div>)}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async context=> {
    
    const {data, error} = usePosts();
    
    return{
        props: {
            posts: data
        }
    }
}

export default Post
