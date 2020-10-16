import {GraphQLClient} from 'graphql-request'
import { useSWR } from 'swr';

const fetcher = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
    headers: {
        authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
    },
})

export const usePosts = async () => {
    const { data, error } = useSWR(fetcher.request(`
    query{
        posts{
            title,
                content{
                markdown
            }
        }
    }
    `))
    
    return {
        posts: JSON.parse(data.posts),
        error: error
    }
}