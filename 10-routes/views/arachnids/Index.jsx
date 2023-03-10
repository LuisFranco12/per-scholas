import React from 'react'

function Index(props) {
    return (
        <div>
            <h1>Archnids</h1>
            <ul>
                {props.arachnids.map((arachnid, index) => 
                    <li>
                        <a href={`/arachnids/${index}`}><strong>{arachnid.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index