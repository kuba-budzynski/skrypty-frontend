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
    const {data, error} = useSWR('https://admin.kasiaklimczukfitness.pl/reaccurings', (key) => fetch(key))
} 