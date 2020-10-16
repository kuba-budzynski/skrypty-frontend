import { useSWR } from 'swr';
import {GraphQLClient} from 'graphql-request'

export const fetchGQL = (query) => {
    new
}

export default usePosts = () => {
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
    const {data, error} = useSWR();

    return {
        data: data ? data.data.posts : null,
        error: error
    }

} 