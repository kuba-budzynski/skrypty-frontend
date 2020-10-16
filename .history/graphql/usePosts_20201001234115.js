import { useSWR } from 'swr';
import {GraphQLClient} from 'graphql-request'

export default usePosts = () => {
    const query = ``
    const {data, error} = useSWR();

    return {
        data: data ? data.data.posts : null,
        error: error
    }

} 