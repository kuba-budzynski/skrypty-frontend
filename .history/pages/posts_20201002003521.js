import React from 'react'
import useSWR from 'swr'

function Posts({data, error}) {
    console.log(data, " -> ", error);
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context) {
    
    const { data, error } = fetch('https://admin.kasiaklimczukfitness.pl/reaccurings').then(res => {res.json, ""}).catch(err => {"", err.json()});

    return {
        props: {
            data, 
            error
        },
    }
}

export default Posts
