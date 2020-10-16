import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'

function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            {/* <div className="w-screen h-screen max-w-full" style={{
                backgroundColor: "#252f3f"
            }}>
            </div> */}
            {/* <div className="w-screen h-screen max-w-full bg-gray-800">
            </div> */}
            <div className="w-screen h-screen max-w-full bg-gray-900">
            </div>
        </>

    )
}

export default FAQ
