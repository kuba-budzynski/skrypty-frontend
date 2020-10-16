import { useSWR } from 'swr';
import {GraphQLClient} from 'graphql-request'

export const fetchGQL = (query) => {
   new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
    }).request(query);
}

export function usePosts(){
    const query = `
    query{
        posts{
            title,
            content{
                markdown
            }
        }
    }
    `
    const {data, error} = useSWR(query, fetchGQL);

    return {
        posts: data ? data.data.posts : null,
        error: error
    }

} 