import {GraphQLClient} from 'graphql-request'

export function fetchGQL(query){
    return new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
    }).request(query);
}