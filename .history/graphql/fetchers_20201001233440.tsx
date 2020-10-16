import {GraphQLClient} from 'graphql-request'
import useSWR from 'swr';

const fetcher = (query) => new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
        authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
    },
}).request(query)

export const usePosts = async () => {
    const { data, error } = useSWR(`
    query{
        posts{
            title,
                content{
                markdown
            }
        }
    }
    `, fetcher)
    
    return {
        posts: data.data.posts,
        error: error
    }
}