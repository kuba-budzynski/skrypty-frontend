import {GraphQLClient} from 'graphql-request'

export function fetchGQL(query){
    return new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
    }).request(query);
}

export const usePosts = async () => {
    const data = await new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
        headers: {
            authorization: 'Bearer ' + process.env.GRAPHCMS_TOKEN,
        },
    }).request(`
        query{
            posts{
                title,
                content{
                markdown
                }
            }
        }
    `);
    console.log(data)
    // return {
    //     posts: JSON.parse(data),
    //     error: "none"
    // }
}