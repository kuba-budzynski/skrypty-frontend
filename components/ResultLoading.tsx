import React from 'react'

function ResultLoading({image}) {
    return (
        <div className="w-full">
            <img className="rounded mx-auto px-4 w-10/12 object-cover" src={image} alt="Default loader" />
        </div>
    )
}

export default ResultLoading
