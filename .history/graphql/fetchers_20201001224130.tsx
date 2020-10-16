import {GraphQLClient} from 'graphql-request'

export function fetchGQL(query){
    // console.log(process.env.GRAPHCMS_ENDPOINT)
    // console.log(process.env.GRAPHCMS_TOKEN)
    return new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
    }).request(query);
}